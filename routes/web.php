<?php
Route::any('/payments/unitpay', "PaymentController@unitpaySuccess");
Route::any('/payments/skinpay', "PaymentController@skinpaySuccess");
Route::any('/payments/enot', "PaymentController@enotSuccess");
Route::any('/payments/digiseller', "PaymentController@digiseller");
Route::any('/payments/interkassa', "PaymentController@interkassaSuccess");
Route::any('/payments/freekassa', "PaymentController@freekassaSuccess");
Route::any('/payments/qiwip2p', "PaymentController@qiwip2p_success");

Route::any('/top/webhook/topcraft', "API\TopController@topcraft");
Route::any('/top/webhook/mctop', "API\TopController@mctop");
Route::any('/top/webhook/mcrate', "API\TopController@mcrate");
Route::any('/top/webhook/minecraftrating', "API\TopController@minecraftrating");

Route::any('/payments/obmenka/{any}', "PaymentController@obmenkaSuccess");

Route::any('/webhook/telegram/q35BdeStfqNZdn2iJPoMOFwp', "WebController@telegram");

Route::get('/skin/{any}/{string?}/{size?}', "SkinController@skin");

Route::get('/game/lk', "GameController@index");

Route::fallback('WebController@layout');
