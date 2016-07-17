<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
$sens_list = array(
  'id' => array(
    '28_00000448abc3',
    '28_0a020b08010d',
    '35_000002793ac7',
    '81_000000000001',
  )
);
if (isset($_GET['dev'])){
  if (in_array($_GET['dev'], $sens_list['id'])) {
  // проверка на правильность id;
    $db = new SQLite3('/home/myhome/all.sqlite');
    $db->busyTimeout(5000);
    if (isset($_GET['data'])){
      switch ($_GET['data']){
        case 'all':
          $results = $db->query('SELECT * FROM data_'.$_GET['dev'].' order by id;');
        break;
        case 'day':
          $results = $db->query('SELECT * FROM (SELECT * FROM data_'.$_GET['dev'].' ORDER BY id DESC LIMIT 288) order by id;');
        break;
    }
}
while($rr = $results->fetchArray(SQLITE3_ASSOC)) {
    $data[] = array( ($rr['date']+10800)*1000, $rr['data']);
    //10800 - корректировка часового пояса на MSK;
}
} else {
  $data[] = array('code' => '404');
}
echo json_encode($data);
}
?>
