<?php

namespace App\Models\Managers;

use App\Models\Interfaces\IEconomyManager;
use App\Models\User;
use Illuminate\Database\Connection;

class EconomyLiteManager implements IEconomyManager{
    private $DB;

    function __construct(Connection $db){
        $this->DB = $db;
    }

    function getBalance($user){
        if ($user instanceof User) $user = $user->uuid;

        $userinfo = $this->DB->table('accounts')
            ->select('коин_balance as balance')
            ->where('uid', $user)
            ->first();

        if ($userinfo) return $userinfo->balance;

        return 0;
    }

    function addMoney($user, $count){
        if ($user instanceof User) $user = $user->uuid;

        $balance = $this->getBalance($user) + $count;

        if($this->DB->table('accounts')
            ->select('коин_balance')
            ->where('uid', $user)
            ->first()){
            return $this->DB->table('accounts')->where('uid', $user)->update(
                ['коин_balance' => $balance]
            );
        }else{
            return $this->DB->table('accounts')->insert(
                ['коин_balance' => $balance, 'uid' => $user, 'job' => 'unemployed', 'job_notifications' => 0]
            );
        }

    }

    function withdrawMoney($user, $count){
        if ($user instanceof User) $user = $user->uuid;

        $balance = $this->getBalance($user);

        if($balance >= $count){
            return $this->DB->table('accounts')->where('uid', $user)->update(
                ['коин_balance' => $balance - $count]
            );
        } else return false;
    }

    function getTop($count)
    {
        $data = $this->DB->table('accounts')
            ->orderByDesc('коин_balance')
            ->select('uid', 'коин_balance as money')
            ->limit($count)->get();

        return $data->map(function ($item){
            $user = User::fromUUID($item->uid);
            if ($user){
                $user->top_money = intval($item->money);
                $user = $user->only('id', 'login', 'uuid', 'top_money');
            }
            return $user;
        })->filter();
    }
}
