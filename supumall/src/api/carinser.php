<?php

    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";


    $imgurl  = isset($_POST['imgurl'])? $_POST['imgurl'] : '';
    $content  = isset($_POST['content'])? $_POST['content'] : '';
    $username  = isset($_POST['username'])? $_POST['username'] : '';
    $qty  = isset($_POST['qty'])? $_POST['qty'] : '';
    $price=isset($_POST['price'])? $_POST['price'] : '';
    $sales=isset($_POST['sales'])? $_POST['sales'] : '';

    $sql = "insert into car (imgurl,content,userid,qty,price,sales)values('$imgurl','$content','$username','$qty','$price','$sales')";
    
        $result = excute($sql);

        // if(excute($sql)){
        //  echo 'good';
        // }else{
        //  echo 'file';
        // }


    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
