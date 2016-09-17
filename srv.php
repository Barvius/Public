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
if (isset($_GET['dev'])){
  if (in_array($_GET['dev'], $sens_list['id'])) {
  // проверка на валидность id;
  $results = $db->query('select * from data_'.$_GET['dev'].' where id=(select max(id) from data_'.$_GET['dev'].');');
  while($rr = $results->fetchArray(SQLITE3_ASSOC)) {
      $value = round($rr['data'],1);
  }
    $results = $db->query('SELECT * FROM data_'.$_GET['dev'].' order by id;');
    while($rr = $results->fetchArray(SQLITE3_ASSOC)) {
        $data[] = array( ($rr['date']+10800)*1000, round($rr['data'],1));
        //10800 - корректировка часового пояса на MSK;
    }
      $data = array('code' => '200', 'value' => $value, 'data' => $data);
  }
}
if (!$data) {
    $data[] = array('code' => '404');
    // если $data пустой то отдаем 404;
}
echo json_encode($data);

?>
