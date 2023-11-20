<?php
$category_list = array(
    '1' => 'Избранные',
    '2' => 'Уникальные',
    '3' => 'Ванильные',
    '4' => 'С модами',
    '5' => 'Мини-игры',
    '6' => 'Все'
);

$links = array(
    'link_to_site_1' => 'https://avemc.ru/shop',
    'link_to_site_2' => 'https://avemc.ru/page/rules',
    'link_to_site_3' => 'https://vk.com/im?sel=-220451023',
    'link_to_site_4' => 'https://vk.com/avemc',
    'link_to_site_5' => 'https://discord.com/invite/g75VWp5PKW',
    'link_to_site_6' => 'https://t.me/+P08kQsL3cQQ3MGNi',
    'link_to_site_7' => 'https://avemc.ru/',
);

$servers = array(
    'a935db28-4f02-43ec-8598-f0d9db217f1b' => array(
        'server_name' => 'Mysterius',
        'server_category' => '4',
    ),
    '8754940d-0132-4495-abed-972278406f66' => array(
        'server_name' => 'Architechnica',
        'server_category' => '4',
    ),
    '6cc16a75-04fb-42b0-afe9-89a6400e926f' => array(
        'server_name' => 'DivineRPG',
        'server_category' => '4',
    ),
    '542dc539-f4b3-4c76-a43a-324462164d50' => array(
        'server_name' => 'Vanilla+',
        'server_category' => '3',
    )
);

$sliders = array(
    /*'slide_1' => array(
        'link' => 'https://avemc.ru/',
        'image' => 'https://avemc.ru/sliders/launcher-slide-1.png'
    ),*/
    'slide_2' => array(
        'link' => 'https://avemc.ru/shop',
        'image' => 'https://avemc.ru/sliders/launcher-slide-3.png'
    ),
);

$data = array(
    'category_list' => $category_list,
    'servers' => $servers,
    'sliders' => $sliders
);

if(@$_GET['get'] == 'info'){
    echo(json_encode($data));
}
