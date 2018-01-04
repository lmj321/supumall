<?php

    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";

  $sql = "select * from list order by price asc";
 
    $currentPage = isset($_POST['currentPage']) ? $_POST['currentPage'] : '1';
       $pageSize=isset($_POST['pageSize']) ? $_POST['pageSize']:'10';

    $result = query($sql);
    $res = array(
        'data'=>array_slice($result,($currentPage-1)*$pageSize,$pageSize),
        'total'=>count($result)
    );
    echo json_encode($res, JSON_UNESCAPED_UNICODE);
?>
