<?php
$host = "mysql1008.mochahost.com";
$dbusername = "oliverss_swift";
$dbpassword = "Hacker@911";
$dbname = "oliverss_swiftapp";

$con = mysqli_connect($host, $dbusername, $dbpassword, $dbname);

 // Getting the received JSON into $json variable.
$json=file_get_contents('php://input');
//decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
//echo json_encode($obj['name']+','+$obj['number']+','+$obj['location']);

//name store into $name.
$user = $obj['user'];


    $add="INSERT INTO user_request(user)  (SELECT id FROM user WHERE number = '$user' OR email='$user')";
    if(mysqli_query($con, $add)){
        echo json_encode('Thank you for trusting us!..you will recieve a call from one of our agents in a moment.');
    }else{
        echo json_encode('Please check your internet connection');
        //our query fail
    }
    //alert msg in react native


mysqli_close($con);

?>