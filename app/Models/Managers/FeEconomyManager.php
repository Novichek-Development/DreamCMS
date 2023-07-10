<?php

namespace App\Models\Managers;

use App\Models\Interfaces\IEconomyManager;
use App\Models\User;
use Illuminate\Database\Connection;

class FeEconomyManager implements IEconomyManager{
    private $DB;

    function __construct(Connection $db){
        $this->DB = $db;
    }

    function getBalance($user){
        if ($user instanceof User) $user = $user->uuid;

        $userinfo = $this->DB->table('fe_accounts')
            ->select('money')
            ->where('uuid', $user)
            ->first();

        if ($userinfo) return $userinfo->money;

        return 0;
    }

    function addMoney($user, $count){
        if ($user instanceof User) $user = $user->uuid;

        $balance = $this->getBalance($user) + $count;

        return $this->DB->table('fe_accounts')->where('uuid', $user)->update(
            ['money' => $balance]
        );
    }

    function withdrawMoney($user, $count){
        if ($user instanceof User) $user = $user->uuid;

        $balance = $this->getBalance($user);

        if($balance >= $count){
            return $this->DB->table('fe_accounts')->where('uuid', $user)->update(
                ['money' => $balance - $count]
            );
        } else return false;
    }

    function getTop($count)
    {
        $data = $this->DB->table('fe_accounts')
            ->orderByDesc('money')
            ->limit($count)->get(['money', 'uuid']);

        return $data->map(function ($item){
            $user = User::fromUUID($item->uuid);
            if ($user){
                $user->top_money = intval($item->money);
                $user = $user->only('id', 'login', 'uuid', 'top_money');
            }
            return $user;
        })->filter();
    }
}
