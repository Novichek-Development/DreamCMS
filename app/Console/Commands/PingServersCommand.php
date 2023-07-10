<?php

namespace App\Console\Commands;

use App\Models\Server;
use App\Models\UserGroup;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use xPaw\MinecraftPing;
use xPaw\MinecraftPingException;

class PingServersCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'servers:ping';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Ping all servers and update online';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $curonline = 0;

        $failed_servers = collect();

        /* @var Server $server */
        foreach (Server::getActive() as $server){
            try{
                $query = new MinecraftPing($server->ip, $server->port);

                if (version_compare($server->version, '1.7.0', '<')){
                    $data = $query->QueryOldPre17();
                    if($data){
                        $server->online = $data['Players'];
                        $server->maxonline = $data['MaxPlayers'];
                    }
                }else{
                    $data = $query->Query();
                    if($data){
                        $server->online = $data['players']['online'];
                        $server->maxonline = $data['players']['max'];
                    }
                }

                $curonline += $server->online;
                $server->save();
            } catch (\Throwable $e){
                echo $e;

                $server->online = 0;
                $server->maxonline = 0;
                $server->save();

                $failed_servers->push($server);
            } finally {
                if($query) {
                    $query->Close();
                }
            }
        }

        /*foreach ($failed_servers as $key => $server){
            try{
                if($raw = $server->sendCommand('minecraft:list')){
                    $raw = str_replace("There are ", "", $raw);
                    $raw = str_replace(" players online", "", $raw);

                    $info = explode(":", $raw);
                    $online = explode("/", $info[0]);

                    $server->online = intval($online[0]);
                    $server->maxonline = intval($online[1]);
                    $server->save();
                }
                unset($failed_servers[$key]);
            }catch (\Throwable $e){
                print_r($e);
            }
        }*/

        $key = Carbon::now()->toDateString();
        $record = Cache::store('global')->get('record_' . $key, 0);

        if ($record < $curonline){
            Cache::store('global')->set('record_' . $key, $curonline);

            echo 'Set record for ' . $key . ' to ' . $curonline;
        }else{
            echo 'Record for ' . $key . ' still ' . $record;
        }
    }
}
