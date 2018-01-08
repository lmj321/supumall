<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";

    $id = isset($_POST['goodsId'])? $_POST['goodsId'] : '';
     $qty  = isset($_POST['Qty'])? $_POST['Qty'] : '';
         //var_dump($_ids) ;
     $sql = "update car set qty = '$qty' where id = '$id'";
    
        $result = excute($sql);

        // if(excute($sql)){
        //  echo 'good';
        // }else{
        //  echo 'file';
        // }


    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>