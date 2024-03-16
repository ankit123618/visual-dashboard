<?php
// imports connection file
require_once("connection.php");
/* Api to fetch data from database*/
$select = "select * from data";
$result = mysqli_query($connection,$select);
echo json_encode(mysqli_fetch_all($result,MYSQLI_ASSOC), JSON_PRETTY_PRINT);
?>