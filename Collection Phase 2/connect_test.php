<?php
$servername = "mydatabase.crxkno0dzeml.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "ironman1";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>