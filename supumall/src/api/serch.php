<?php

    include "DBHelper.php";
    $serch = isset($_POST['serch'])? $_POST['serch'] : '';

    $sql  = "SELECT * FROM list WHERE CONCAT(`describe`)  LIKE '%$serch%'";
  // $sql = "select * from list where describe Like '%澳洲%'";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>