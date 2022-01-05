<?php
include_once("auth.php");
include_once("config.php");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$sql = "insert into `collections`(`userid`, `supername`)values(?,?)";
$stmt = $link->prepare($sql);
$stmt -> bind_param("is", $_SESSION['id'], $_GET['name']);

if ($stmt->execute()) {
    $_SESSION['addToList'] = array("success" => true, "message" => "Hero Added To Your Collection");
} else {
    $_SESSION['addToList'] = array("success" => false, "message" => "Hero Was Not Added To Your Collection");
}
header("Location: superlist.php");
die;
?>

