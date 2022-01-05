<?php
/* Database configuration */
define('DB_SERVER', 'marveldb.crxkno0dzeml.us-east-1.rds.amazonaws.com');
define('DB_USERNAME', 'admin');
define('DB_PASSWORD', 'ironman1');
define('DB_NAME', 'my_marvel_db');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

/* Check Connection */
if ($link === false) {
    die("ERROR: Could not connect to database " . mysqli_connect_error());

}
?>
