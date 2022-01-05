<?php
require_once("auth.php");

// Initialize the session
session_start();

// Check if the user is logged in, if not then redirect him to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}



?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Marvel Collection</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <style>
            body {
                font: 14px sans-serif;
                text-align: center;
            }
        </style>
        <script src="collection.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js"></script>
    </head>
    <body>
        <h1>Marvel Super Hero Collector</h1>
        <h4 class="my-5">Hi, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b></h4>

    </body>
    <div id="buttons">
        <div id="searchbar">
            <label>Search Here:
                <input type="text" class="search-content" id="starts-with" placeholder="e.g. Iron Man"/>
            </label>
            <button class="button" onclick="queryAPI()">Search</button>
        </div>
    </div>
    <!-- results -->
    <div id="data-row">
        <!-- Results go here -->
        <div>
            <div></div>
            <div></div>
        </div>
    </div>
    </div>
    <div id="logout">
        <a href="reset-password.php" class="btn btn-warning">Reset Your Password</a>
        <a href="logout.php" class="btn btn-danger ml-3">Sign Out of Your Account</a>
        <a href="superlist.php"class="btn btn-danger ml-3">Display your collection</a>
    </div>
</html>