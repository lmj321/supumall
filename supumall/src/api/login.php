<?php

    include 'connect.php';

    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // 密码md5加密
    $password = md5($password);
        //var_dump($password) ;
    $sql = "SELECT * FROM user WHERE (username='$username') AND (password='$password')";
    $result = $conn->query($sql);
    //var_dump($result);
    if($result->num_rows>0){
        echo 'success';
    }else{
        echo 'fail';
    }
  $conn->close(); 
?>
