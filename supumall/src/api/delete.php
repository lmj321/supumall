<?php

    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $id = isset($_POST['goodsId'])? $_POST['goodsId'] : '';
    $sql="delete from car where id ='$id'";
     // $sql = "update car set qty = '$qty' where id = '$id'";
     $result = excute($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
