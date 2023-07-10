<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Server;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TopController extends Controller {

    public function topByMoney(Request $request){
        $server = Server::find($request->get('server'));
        if ($server){
            return [
                'success' => true,
                'top' => $server->getEconomyManager()->getTop(25)
            ];
        }else{
            return [
                'success' => false,
                'message' => 'Сервер не найден!'
            ];
        }
    }

    public function topByVotes(Request $request){
        $startOfMonth = Carbon::now()->startOfMonth()->getTimestamp();

        return [
            'success' => true,
            'data' => \DB::select('SELECT user_id AS id, COUNT(*) AS total, users.login AS login, users.uuid AS uuid FROM top_votes JOIN users ON top_votes.user_id = users.id WHERE top_votes.time > ? GROUP BY top_votes.user_id ORDER BY total DESC', [$startOfMonth])
        ];
    }

    public function topcraft(Request $request){
        $secretKey = config('settings.topcraft_secret');
        $username = $request->get('username');
        $user = User::fromLogin($username);

        if ($request->get('signature') == sha1($username . $request->get('timestamp') . $secretKey)){
            if ($user){
                $this->successVote($user, 'TopCraft');
                return \Response::make('OK');
            }
        }
    }

    public function mctop(Request $request){
        $secretKey = config('settings.mctop_secret');
        $username = $request->get('nickname');
        $user = User::fromLogin($username);

        if ($request->get('token') == md5($username . $secretKey)){
            if ($user){
                $this->successVote($user, 'MCTop');
                return \Response::make('OK');
            }
        }
    }

    public function mcrate(Request $request){
        $secretKey = config('settings.mcrate_secret');
        $username = $request->get('nick');
        $user = User::fromLogin($username);

        if ($request->get('hash') == md5(md5($username . $secretKey . 'mcrate'))){
            if ($user){
                $this->successVote($user, 'MCRate');
                return \Response::make('OK');
            }
        }
    }

    public function minecraftrating(Request $request){
        $secretKey = config('settings.minecraftrating_secret');
        $username = $request->get('username');
        $user = User::fromLogin($username);

        if ($request->get('signature') == sha1($username . $request->get('timestamp') .  $secretKey)){
            if ($user){
                $this->successVote($user, 'MinecraftRating');
                return \Response::make('ok');
            }
        }
    }


    public function successVote(User $user, $top){
        $votePerDay = config('settings.vote_per_day');

        if ($votePerDay){
            $lastVote = \DB::table('top_votes')->where([
                ['user_id', '=', $user->id],
                ['top', '=', $top]
            ])->orderByDesc('time')->limit(1)->first();

            if ($lastVote && $lastVote->time > (now()->getTimestamp() - (60 * 60 * 24))){
                return;
            }
        }

        \DB::table('top_votes')->insert([
            'user_id' => $user->id,
            'top' => $top,
            'time' => now()->getTimestamp()
        ]);

        $this->giveReward($user, $top);
    }

    public function giveReward(User $user, $top){
        $user->addRealmoney(config('settings.vote_reward_real', 0));
    }
}
