<?php
    include 'connect.php';

    // 接受前端数据
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    // $email = isset($_GET['email']) ? $_GET['email'] : '';
// 
    // $password = md5($password);
    //查看用户名是否已经存在
    $sql = "select username from user where username='$username'";
     //var_dump($sql);

    $result = $conn->query($sql);
 //var_dump($result->num_rows);
    if($result->num_rows>0){
        // 释放查询内存(销毁)
        // $result->free();

        // 用户名已经被占用
        echo "fail";
    }else{
        // 释放查询内存(销毁)
        // $result->free();

        // 密码md5加密
        $password = md5($password);

        $sql = "insert into user(username,password) values('$username','$password')";
        $result = $conn->query($sql);

        if ($result) {
            // 写入成功
            echo "ok";
        } else {
            // 写入失败
            echo "Error";
        }
    }



    //关闭连接
    $conn->close();

?>