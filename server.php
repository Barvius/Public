<?php
header('Access-Control-Allow-Origin: *');  
header('Content-Type: application/json');
if (isset($_GET['act'])){
    if ($_GET['act'] == "weather_data"){
        echo json_encode(array('code' => '200','relevance' => exec('cat /home/myhome/relevance'), 'data' => array('temperature' => exec('cat /home/myhome/28-00000448abc3'), 'temperature_sun' => exec('cat /home/myhome/28-0415a30fdfff'), 'humidity' => exec('cat /home/myhome/35-000002793ac7'), 'pressure' => exec('cat /home/myhome/81-000000000001'), 'wind_speed' => exec('cat /home/myhome/28-0a020b08010d'))));
    }
}
?>