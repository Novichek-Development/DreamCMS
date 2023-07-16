<?php
namespace App\Http\Controllers;

use App\Events\PaymentEvent;
use App\Models\Activity;
use App\Models\User;
use App\Notifications\BalanceAdd;
use Cache;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Qiwi\Api\BillPayments;
use Response;
use Illuminate\Support\Facades\Log;

class PaymentController extends Controller{

    // Минимальная сумма => фактор пополнения
    protected static $factor = [
    //        5000 => 1.30,
    //        3000 => 1.25,
    //        2000 => 1.20,
    //        1000 => 1.15,
    //        500 => 1.10
    ];

    /*public function qiwip2p(Request $request){
        $uuid = $request->get('account');
        $sum = $request->get('sum');

        if ($uuid){
            $user = User::fromUUID($uuid);
        }else{
            $user = \Auth::user();
        }

        $orderID = \DB::table('qiwip2p_orders')->insertGetId([
            'user_id' => $user->id,
            'sum' => $sum
        ]);

        $publicKey = config('settings.qiwip2p_public_key', 'demo');
        $secretKey = config('settings.qiwip2p_secret_key', 'demo');

        $billPayments = new BillPayments($secretKey, [
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false
        ]);

        $response = $billPayments->createBill($orderID, [
            'amount' => $sum,
            'currency' => 'RUB',
            'comment' => "Пополнение баланса игрока " . $user->login,
            'expirationDateTime' => $billPayments->getLifetimeByDay(3),
            'email' => $user->email,
            'account' => $user->id
        ]);

        return [
            'success' => true,
            'url' => $response['payUrl'],
            'data' => []
        ];
    }*/

    public function qiwip2p(Request $request){
        $uuid = $request->get('account');
        $sum = $request->get('sum');

        if ($uuid){
            $user = User::fromUUID($uuid);
        }else{
            $user = \Auth::user();
        }

        $orderID = \DB::table('qiwip2p_orders')->insertGetId([
            'user_id' => $user->id,
            'sum' => $sum
        ]);

        $publicKey = config('settings.qiwip2p_public_key', 'demo');
        $secretKey = config('settings.qiwip2p_secret_key', 'demo');

        $billPayments = new BillPayments($secretKey, [
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false
        ]);

        $response = $billPayments->createPaymentForm([
            'publicKey' => $publicKey,
            'amount' => $sum,
            'billId' => $orderID,
            'email' => $user->email,
            'account' => $user->id,
            'comment' => "Пополнение баланса игрока " . $user->login,
        ]);

        return [
            'success' => true,
            'url' => $response,
            'data' => []
        ];
    }

    public function qiwip2p_success(Request $request){
        $publicKey = config('settings.qiwip2p_public_key', 'demo');
        $secretKey = config('settings.qiwip2p_secret_key', 'demo');

        $sign = $request->header('X-Api-Signature-SHA256');

        $bill = $request->get('bill');
        $orderID = $bill['siteId'];

        if ($bill['status']['value'] !== "PAID")
            return Response::make('Счет не оплачен!', 403);

        $billPayments = new BillPayments($secretKey, [
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false
        ]);

        if ($billPayments->checkNotificationSignature($sign, $request->all(), $secretKey)){
            $order = \DB::table('qiwip2p_orders')->where('id', $orderID)->first();

            if ($order) {
                $amount = $bill['amount']['value'];

                if ($order->sum == $amount){
                    $user = User::find($order->user_id);

                    if ($user){
                        $this->success($user, $amount, 'qiwip2p', $request->toArray());
                        return Response::make('OK');
                    }else{
                        return Response::make('Пользователь не найден!', 403);
                    }
                }else{
                    return Response::make('Сумма заказа изменена!', 403);
                }
            }else{
                return Response::make('Заказ не найден!', 403);
            }
        }else{
            return Response::make('Неверная подпись!', 403);
        }
    }

        // FREEKASSA
    public function freekassa(Request $request){
        $uuid = $request->get('account');
        $sum = $request->get('sum');

        if ($uuid){
            $user = User::fromUUID($uuid);
        }else{
            $user = \Auth::user();
        }

        $orderID = \DB::table('freekassa_orders')->insertGetId([
            'user_id' => $user->id,
            'sum' => $sum
        ]);

        $merchant_id = '36857';
        $secret_word = 'C8)SWE*Hy^N%Dwd';
	$currency = 'RUB';

        $data = [
            'm' => $merchant_id,
            'o' => $orderID,
            'currency' => $currency,
            's' => md5($merchant_id.':'.$sum.':'.$secret_word.':'.$currency.':'.$orderID),
            'oa' => $sum,
        ];

        return [
            'success' => true,
            'url' => 'https://pay.freekassa.ru/?' . http_build_query($data),
            'data' => []
        ];
    }

    public function freekassaSuccess(Request $request){
        $merchant_id = '36857';
        $secret_word = 'PcsZ@QkV/,03vAr';

        $sum = $request->get('AMOUNT');
        $orderID = $request->get('MERCHANT_ORDER_ID');

        if ($request->get('SIGN') == md5($merchant_id.':'.$sum.':'.$secret_word.':'.$orderID)){
            $order = \DB::table('freekassa_orders')->where('id', $orderID)->first();

            if ($order) {
                if ($order->sum == $sum){
                    $user = User::find($order->user_id);

                    if ($user){
                        $this->success($user, $sum, 'freekassa', $request->toArray());
                        return Response::make('YES');
                    }else{
                        return Response::make('Пользователь не найден!', 403);
                    }
                }else{
                    return Response::make('Сумма заказа изменена!', 403);
                }
            }else{
                return Response::make('Заказ не найден!', 403);
            }
        }

        return Response::make('Подпись запроса не валидна!', 403);
    }

    // INTERKASSA

    public function interkassa(Request $request){
        $uuid = $request->get('account');
        $sum = $request->get('sum');

        if ($uuid){
            $user = User::fromUUID($uuid);
        }else{
            $user = \Auth::user();
        }

        $orderID = \DB::table('interkassa_orders')->insertGetId([
            'user_id' => $user->id,
            'sum' => $sum
        ]);

        $data = [
            'ik_co_id' => config('settings.interkassa_public', 'demo'),
            'ik_pm_no' => $orderID,
            'ik_cur' => 'RUB',
            'ik_am' => $sum,
            'ik_desc' => "Пополнение баланса игрока " . $user->login
        ];

        $data['ik_sign'] = $this->interkassaSign($data);

        return [
            'success' => true,
            'url' => 'https://sci.interkassa.com/',
            'data' => $data
        ];
    }

    public function interkassaSuccess(Request $request){
        $orderID = $request->get('ik_pm_no');

        if ($request->get('ik_inv_st') != 'success'){
            return Response::make('ik_inv_st != success', 403);
        }

        if ($request->get('ik_sign') == $this->interkassaSign($request->toArray())){
            $order = \DB::table('interkassa_orders')->where('id', $orderID)->first();

            if ($order) {
                $amount = $request->get('ik_am');

                if ($order->sum == $amount){
                    $user = User::find($order->user_id);

                    if ($user){
                        $this->success($user, $amount, 'interkassa', $request->toArray());
                        return Response::make('OK');
                    }else{
                        return Response::make('Пользователь не найден!', 403);
                    }
                }else{
                    return Response::make('Сумма заказа изменена!', 403);
                }
            }else{
                return Response::make('Заказ не найден!', 403);
            }
        }

        return Response::make('Подпись запроса не валидна!', 403);
    }

    public function interkassaSign($dataSet){
        $private_key = config('settings.interkassa_private', 'demo');

        unset($dataSet['ik_sign']);
        ksort($dataSet, SORT_STRING);
        array_push($dataSet, $private_key);
        $signString = implode(':', $dataSet);
        return base64_encode(hash('sha256', $signString, true));
    }

    // OBMENKA

    public function obmenka(Request $request){
        $uuid = $request->get('account');
        $sum = $request->get('sum');

        if ($uuid){
            $user = User::fromUUID($uuid);
        }else{
            $user = \Auth::user();
        }

        $kassa_id = config('settings.obmenka_id', 'demo');
        $private_key = config('settings.obmenka_private', 'demo');

        $orderID = \DB::table('obmenka_orders')->insertGetId([
            'user_id' => $user->id,
            'status' => 0
        ]);

        $data = [
            "CLIENT_ID" => $kassa_id,
            "INVOICE_ID" => $orderID,
            "AMOUNT" => $sum,
            "CURRENCY" => "RUR",
            //"PAYMENT_CURRENCY" => "visamaster.rur",
            "DESCRIPTION" => "Пополнение баланса игрока " . $user->login,
            "SUCCESS_URL" => config('app.url') . "/page/success",
            "FAIL_URL" => config('app.url') . "/page/fail",
            "STATUS_URL" => config('app.url') . "/payments/obmenka/" . $orderID
        ];

        $sign = $this->obmenkaSign($data, $private_key);

        $data["SIGN_ORDER"] = implode(";", array_keys($data));
        $data["SIGN"] = $sign;

        return Response::json([
            'success' => true,
            'url' => "https://acquiring.obmenka.ua/acs?" . http_build_query($data)
        ]);
    }

    public function obmenkaSuccess(Request $request, $orderID){
        $kassa_id = config('settings.obmenka_id', 'demo');
        $private_key = config('settings.obmenka_private', 'demo');

        $order = \DB::table('obmenka_orders')->where([
            ['id', '=', $orderID],
            ['status', '=', 0]
        ])->first();
        if ($order){
            $user = User::find($order->user_id);

            $data = [
                'payment_id' => $orderID
            ];

            $postdata = json_encode($data);

            $sign = base64_encode(md5($private_key . base64_encode(sha1($postdata, true)) . $private_key, true));

            $ch = curl_init('https://acquiring_api.obmenka.ua/api/einvoice/status');
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json',
                'DPAY_CLIENT: ' . $kassa_id,
                'DPAY_SECURE: ' . $sign
            ]);
            $result = curl_exec($ch);
            curl_close($ch);

            $info = json_decode($result);

            if ($info->status === 'PAYED' || $info->status === 'PAYED_RECALC' || $info->status === 'FINISHED'){
                $amount = $info->amount;
                $currency = $info->accrual_currency;

                switch ($currency){
                    case 'UAH':
                        $amount = $amount * 2.7;
                        break;
                    case 'USD':
                        $amount = $amount * 75;
                        break;
                    case 'EUR':
                        $amount = $amount * 89;
                        break;
                }

                \DB::table('obmenka_orders')->where([
                    ['id', '=', $order->id]
                ])->update([
                    'status' => 1
                ]);

                $this->success($user, $amount, 'obmenka', $info);

                return Response::make('OK');
            }
        }
    }

    public function obmenkaSign($data = [], $secret = ''){
        return base64_encode(md5($secret . base64_encode(sha1(implode("", $data), true)) . $secret, true));
    }

    // ENOT

    public function enot(Request $request){
        $sum = $request->get('sum');
        $uuid = $request->get('account');

        if ($uuid){
            $user = User::fromUUID($uuid);
        }else{
            $user = \Auth::user();
        }

        $MERCHANT_ID   = config('settings.enot_merchant_id', 'demo');
        $SECRET_WORD   = config('settings.enot_formkey', 'demo');

        $orderID = \DB::table('enot_orders')->insertGetId([
            'user_id' => $user->id
        ]);

        $sign = md5($MERCHANT_ID.':'.$sum.':'.$SECRET_WORD.':'.$orderID);

        $query = [
            'm' => $MERCHANT_ID,
            'oa' => $sum,
            'o' => $orderID,
            's' => $sign,
            'cr' => 'RUB',
            'c' => 'Пополнение баланса аккаунта ' . $user->login,
        ];

        return Response::json([
            'success' => true,
            'url' => "https://enot.io/pay?" . http_build_query($query)
        ]);
    }

    public function enotSuccess(Request $request){
        $secret_word = config('settings.enot_secretkey', 'demo');

        $merchant = $request->get('merchant');
        $merchant_id = $request->get('merchant_id');
        $amount = $request->get('amount');
        $sign = $request->get('sign_2');
        $currency = $request->get('currency');

        if ($sign != md5($merchant.':'.$amount.':'.$secret_word.':'.$merchant_id)) {
            return [
                'success' => false,
                'message' => 'Неверная подпись!'
            ];
        }

        $order = \DB::table('enot_orders')->where('id', $merchant_id)->first();
        if ($order) {
            $user = User::findOrFail($order->user_id);
            $this->success($user, $amount, 'enot.io', $request->toArray());

            return Response::make('Good');
        }

        return [
            'success' => false,
            'message' => 'Заказ ' . $merchant_id . ' не найден!'
        ];
    }

    // SKINPAY
    public function skinpay(Request $request){
        $uuid = $request->get('account');

        if ($uuid){
            $user = User::fromUUID($uuid);
        }else{
            $user = \Auth::user();
        }

        $publickey = config('settings.skinpay_publickey', 'demo');
        $privatekey = config('settings.skinpay_privatekey', 'demo');

        $orderID = \DB::table('skinpay_orders')->insertGetId([
            'user_id' => $user->id
        ]);

        $query = [
            'orderid' => $orderID,
            'key' => $publickey,
        ];

        $query['sign'] = hash_hmac('sha1', self::skinPaySign($query), $privatekey);

        return Response::json([
            'success' => true,
            'url' => "https://skinpay.com/deposit?" . http_build_query($query)
        ]);
    }

    public function skinpaySuccess(Request $request){
        $status = $request->get('status');
        if ($status === 'success'){
            $amount_rur = $request->get('amount_rur');

            $privatekey = config('settings.skinpay_privatekey', 'demo');

            $sign = $request->get('sign');

            $checkSign = hash_hmac('sha1', self::skinPaySign($request->toArray()), $privatekey);;

            if ($sign === $checkSign){
                $orderid = $request->get('orderid');

                $order = \DB::table('skinpay_orders')->where('id', $orderid)->first();
                if ($order){
                    $user = User::findOrFail($order->user_id);
                    $amount = round($amount_rur / 100, 2);

                    $this->success($user, $amount, 'skinpay', $request->toArray());

                    return Response::make('OK');
                }else{
                    return Response::json([
                        'success' => false,
                        'message' => 'Заказ не найден!'
                    ]);
                }
            }else{
                return Response::json([
                    'success' => false,
                    'message' => 'Неверная подпись!'
                ]);
            }
        }
    }

    public static function skinPaySign($q) {
        $paramsString = '';
        ksort($q);
        foreach ($q as $key => $value) {
            if($key == 'sign') continue;
            $paramsString .= $key .':'. $value .';';
        }
        return $paramsString;
    }

    // UNITPAY
    public function unitpay(Request $request){
        $params    = $request->get('params');

        $method    = $request->get('method');
        $signature = $params['signature'];
        $uuid      = $params['account'];
        $count     = $params['orderSum'];

        // Рекомендую включить если у вас нет прокси или настроен real-ip модуль

        /*if (!in_array($request->ip(), ['31.186.100.49', '178.132.203.105', '52.29.152.23', '52.19.56.234', '94.130.70.247', '127.0.0.1'])){
            return Response::json([
                'error' => ['message' => 'Запрос не с IP системы (' . $request->ip() . ')!']
            ]);
        }*/

        if ($signature != $this->getSignature($method, $params, config('settings.unitpay_secretkey', 'demo'))){
            return Response::json([
                'error' => ['message' => 'Неверная подпись запроса!']
            ]);
        }

        if ($params['orderCurrency'] != 'RUB'){
            return Response::json([
                'error' => ['message' => 'Платежи принимаются только русскими рублями!']
            ]);
        }

        if ($method == 'check'){
            if ($user = User::fromUUID($uuid)){
                return Response::json([
                    'result' => ['message' => 'Успешная проверка!']
                ]);
            }
            return Response::json([
                'error' => ['message' => 'Такого игрока нет!']
            ]);
        }

        if ($method == 'pay'){
            if ($user = User::fromUUID($uuid)){
                $this->success($user, $count, 'unitpay', $params);
            }
            return Response::json([
                'error' => ['message' => 'Такого игрока нет или не удалось пополнить баланс! Обратитесь к администратору!']
            ]);
        }

        if ($method == 'error'){
            $error = $request->get('errorMessage');
            return Response::make($error);
        }
    }

    protected function getSignature($method, array $params, $secretKey) {
        ksort($params);
        unset($params['sign']);
        unset($params['signature']);
        array_push($params, $secretKey);
        array_unshift($params, $method);
        return hash('sha256', join('{up}', $params));
    }

    // DIGISELLER

    public function digiseller(Request $request){
        $uniqueCode = $request->get('uniquecode');

        $this->processDigisellerUniqueCode($uniqueCode);

        return redirect('/page/success');
    }

    public static function processDigisellerUniqueCode($uniqueCode){
        $apiToken = self::getDigisellerAPIToken();

        $ch = curl_init('https://api.digiseller.ru/api/purchases/unique-code/' . $uniqueCode . '?token=' . $apiToken);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Accept: application/json'
        ]);
        $result = curl_exec($ch);
        curl_close($ch);

        $data = json_decode($result);

        if ($data->retval === 0){
            parse_str(base64_decode($data->query_string), $custom_params);
            $user = User::fromUUID($custom_params['uuid']);
            $amount = $data->cnt_goods;

            if (\DB::table('digiseller_orders')->where([
                'inv' => $data->inv,
                'status' => 1
            ])->count()){
                return false;
            }

            \DB::table('digiseller_orders')->insert([
                'inv' => $data->inv,
                'status' => 1
            ]);

            self::success($user, $amount, 'digiseller', $data);

            return true;
        }

        return false;
    }

    public static function getDigisellerAPIToken(){
        if (Cache::store('global')->has('digiseller_api_token')){
            return Cache::store('global')->get('digiseller_api_token');
        }

        $token = config('settings.digiseller_token', 'demo');
        $time = Carbon::now()->getTimestamp();

        $postdata = json_encode([
            'seller_id' => 229804,
            'timestamp' => $time,
            'sign' => hash('sha256', $token . $time)
        ]);

        $ch = curl_init('https://api.digiseller.ru/api/apilogin');
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Accept: application/json',
        ]);
        $result = curl_exec($ch);
        curl_close($ch);

        $data = json_decode($result);

        if ($data->retval === 0){
            Cache::store('global')->put('digiseller_api_token', $data->token, now()->addHour());
            return $data->token;
        }

        return $data->retval;
    }

    public static function checkDigisellerOrders(){
        $data = [
            'id_seller' => 229804,
            'product_ids' => [3086435],
            'date_start' => Carbon::now()->subRealHour()->format('Y-m-d H:m:s'),
            'date_finish' => Carbon::now()->format('Y-m-d H:m:s'),
            'returned' => 1,
            'page' => 1,
            'rows' => 1000
        ];

        $token = config('settings.digiseller_token', 'demo');
        $data['sign'] = hash('sha256', $data['id_seller'] . $data['product_ids'][0] . $data['date_start'] . $data['date_finish'] . $data['returned'] . $data['page'] . $data['rows'] . $token);

        $postdata = json_encode($data);

        $ch = curl_init('https://api.digiseller.ru/api/seller-sells');
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Accept: application/json',
        ]);
        $result = curl_exec($ch);
        curl_close($ch);

        $data = json_decode($result);

        if ($data->retval === 0){
            foreach ($data->rows as $order){
                if (\DB::table('digiseller_orders')->where([
                        'inv' => $order->invoice_id,
                        'status' => 1
                    ])->count() <= 0){
                    self::processDigisellerUniqueCode($order->product_entry);
                }
            }
        }
    }

    // SHARED
    public static function success(User $user, $amount, $system, $params = []){
        $params = json_decode(json_encode($params), true);

        $sumfactor = 1;
        foreach(self::$factor as $sum => $factor){
            if ($amount >= $sum){
                $sumfactor = $factor;
                break;
            }
        }

        $total_amount = $amount * $sumfactor;

        if ($user->addRealmoney($total_amount)) {
            $params['sc_factor'] = $sumfactor;
            $params['sc_system'] = $system;
            $params['sc_total_amount'] = $total_amount;
            $params['sc_amount'] = $amount;

            Activity::user_action($user, 'balance_add', $params);

            try {
                $user->notify(new BalanceAdd(round($total_amount, 2)));
                event(new PaymentEvent($user, $total_amount));
                $user->clearCache();

                $refer = $user->getRefer();
                if ($refer){
                    $percent = config('settings.refer_profit', 0);
                    if ($percent > 0){
                        $user->addRealmoney(($amount * $percent) / 100);
                    }
                }
            }catch (\Throwable $ignored){}

            return true;
        }

        return false;
    }
}
