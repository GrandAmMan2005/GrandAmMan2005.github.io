<?php
require_once("auth.php");
require_once("config.php");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$sql = "SELECT username, supername, dateadded FROM collections, users where collections.userid=users.id and
        collections.userid=?";
$result = $link->prepare($sql);
$result -> bind_param("i",$_SESSION["id"]);
$result -> execute();
$result -> store_result();
$result -> bind_result($supername, $username, $dateadded);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch()) {
    echo "id: " . $supername . " - Name: " . $username. " " . "- Date Added: " . $dateadded. "<br>";
  }
} else {
  echo "0 results";
}
$link->close();

?>
<html>
  <header>
    <title>Your List</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
      body {
        font: 14px sans-serif;
        text-align: center;
        font-size:20px;

      }
    </style>
  </header>
  <body>
    <h3>This is your super hero collection.</h3>
    <a href="welcome.php">Click here to return to the welcome page</a>
  </body>



</html>