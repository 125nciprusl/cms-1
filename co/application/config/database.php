<?php

return array(
    'default-connection' => 'concrete',
    'connections' => array(
        'concrete' => array(
            'driver' => 'c5_pdo_mysql',
            'server' => 'localhost',
            'database' => 'codb',
            'username' => 'prus',
            'password' => 'root',
            'charset' => 'utf8'
        )
    )
);
