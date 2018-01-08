<?php
    
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";

    $username = isset($_POST['username'])? $_POST['username'] : '';

$sql  = "SELECT * FROM car WHERE CONCAT(`userid`)  LIKE '$username'";
  // $sql = "select * from list where describe Like '%澳洲%'";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>