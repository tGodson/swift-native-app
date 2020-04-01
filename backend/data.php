<?php

$host = "localhost";
$dbusername = "jasonmxn_escrow";
$dbpassword = "Hacker@911";
$dbname = "jasonmxn_escrow";

$con = mysqli_connect($host, $dbusername, $dbpassword, $dbname);

 // Getting the received JSON into $json variable.
$json=file_get_contents('php://input');
//decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
//name store into $name.
$name = $obj['name'];
//same with $number.
$number = $obj['number'];
//name store into $location.
$location = $obj['location'];
//same with $email.
$email = $obj['email'];
//same with $password.
$password = $obj['password'];

if($obj['number']!==""){
    $result="SELECT * FROM user WHERE phone_num = '$number'";
    if(mysqli_query($con, $result)->num_rows>0){
        echo json_encode('number already exist');
        //alert msg in react native
    }else{
        $add="INSERT INTO user(phone_num) VALUES ('$number')";
        if(mysqli_query($con, $add)){
            echo json_encode('user registered successfuly');
        }else{
            echo json_encode('check internet connection');
            //our query fail
        }
    }

}else{
    echo json_encode('try again');
}

mysqli_close($con);

?>