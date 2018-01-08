<?php
/**
 * @Author: Marte
 * @Date:   2017-12-12 15:24:51
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-01-06 20:05:21
 */
        $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'supumall';
    $cont = new mysqli($servername,$username,$password,$database);
    if($cont -> connect_errno){
        die("连接失败".$connect_errno);
    }
    // 转成utf-8码;
    $cont->set_charset("utf8");

    header('Access-Control-Allow-Origin:*');
    $username = isset($_GET['username']) ? $_GET['username'] : "";
    $goodsId = isset($_GET['goodsId']) ? $_GET['goodsId'] : "";
    $type = isset($_GET['type']) ? $_GET['type'] : "";
    $sql = "select * from carlist where username='$username'";
    $array = array();
    $result = $cont->query($sql);
    if($result->num_rows > 0){
        $res = $result->fetch_all(MYSQLI_ASSOC);
        $result->free();
        $res = $res[0]['goodsId'];
        if(strrchr($res,",")=="," ){

            $res = substr($res,0,-1);
        }
        if(strpos($res,',')){
            $array = explode(',',$res);
        }else{
            Array_unshift($array,$res);
        }
    
        if($goodsId!=""){
            if($type=="change"){
                $string = $goodsId;
            }else{
                Array_unshift($array,$goodsId); 
                $string = implode(',',$array);
               
            }
            $sql = "update carlist set goodsId='$string' where username='$username'";
            $result = $cont->query($sql);
            // 判断是否写入成功;
            if($result){
                echo "ok";
            }else{
                // 输出失败;
                echo "Error: " .$sql ."<br>" .$cont->error; 
            }
            $cont->close();     
        }else{
            if($type=="change"){
                $sql = "update carlist set goodsId='' where username='$username'";
                $result = $cont->query($sql);
                // 判断是否写入成功;
                if($result){
                    echo "ok";
                }else{
                    // 输出失败;
                    echo "Error: " .$sql ."<br>" .$cont->error; 
                }
                $cont->close();  
            }else{
                $row = array();
                if($array[0] === ""){
                    echo "none";
                }else{
                    for ($i= 0;$i< count($array); $i++){
                        if($array[$i] == ""){
                            return;
                        } 
                        $sql = "select * from list where id = $array[$i]";
                        $result = $cont->query($sql);
                        $res = $result->fetch_all(MYSQLI_ASSOC);
                        $result->free();
                        Array_unshift($row,$res[0]); 
                    } 
                    echo json_encode($row,JSON_UNESCAPED_UNICODE);
                }
            }
        }  
    }else{
        if($goodsId!=""){
            $sql = "insert into carlist(username,goodsId)values('$username','$goodsId')";
            $result = $cont->query($sql);
            // 判断是否写入成功;
            if($result){
                echo "ok";
            }else{
                // 输出失败;
                echo "Error: " .$sql ."<br>" .$cont->error; 
            }
        }else{
            echo "none";
        }
        $cont->close();
    }
?>