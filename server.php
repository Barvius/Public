<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$db = new SQLite3('/home/myhome/all.sqlite');
$db->busyTimeout(5000);
$sens_list = array(
  'id' => array(
    '28_00000448abc3',
    '28_0a020b08010d',
    '35_000002793ac7',
    '81_000000000001',
  )
);
if (isset($_GET['act'])){
    if ($_GET['act'] == "weather_data"){
      for ($i=0;$i<4;$i++) {
        // выборка последних значений с БД;
        $results = $db->query('select * from data_'.$sens_list['id'][$i].' where id=(select max(id) from data_'.$sens_list['id'][$i].');');
        while($rr = $results->fetchArray(SQLITE3_ASSOC)) {
            $rezult[$i] = round($rr['data'],1);
        }
      }
      $data = array('code' => '200', 'data' => array('temperature' => $rezult[0], 'humidity' => $rezult[2], 'pressure' => $rezult[3], 'wind_speed' =>$rezult[1] ));
    }
}
if (isset($_GET['dev'])){
  if (in_array($_GET['dev'], $sens_list['id'])) {
  // проверка на валидность id;
    $results = $db->query('SELECT * FROM data_'.$_GET['dev'].' order by id;');
    while($rr = $results->fetchArray(SQLITE3_ASSOC)) {
        $data[] = array( ($rr['date']+10800)*1000, round($rr['data'],1));
        //10800 - корректировка часового пояса на MSK;
    }
  }
}
if (!$data) {
    $data[] = array('code' => '404');
    // если $data пустой то отдаем 404;
}
echo json_encode($data);

?>
