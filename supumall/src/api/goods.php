<?php

	header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $sql  = isset($_POST['sql'])? $_POST['sql'] : '';
    $result = query($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
