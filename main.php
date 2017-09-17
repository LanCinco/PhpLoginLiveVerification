<?php
	// [ Connector > Connector ]
	include ("./inc/conn.inc.php");
	date_default_timezone_set('Asia/Manila');

	session_start();
	if(!isset($_SESSION['user_log'])) {
		header ("Location: index.php");
	} else {
		$uname = $_SESSION['user_log'];

			$query = mysqli_query($con, "SELECT * FROM users WHERE usercode = '$uname' LIMIT 1");
			if (mysqli_num_rows($query) == 1) {

				$get = mysqli_fetch_assoc($query);
				$uName = $get['usercode'];
		}
	}
?>
<!DOCTYPE html>
<html lang = "en">
<head>
	<title>Tsismosa.ph</title>
	<meta charset="utf-8"/>
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<link rel = "stylesheet" type = "text/css" href = "css/styleDefault.css">
	<link rel = "stylesheet" type = "text/css" href = "css/styleIndex.css">
	<link rel = "shortcut icon" type = "image/x-icon" href ="img/logo.ico" />
	<link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Quicksand:300,400,500,700|Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Ubuntu:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">
	<script src = "js/jquery.js"></script>
</head>
<body>
<nav>
	<div class = "navTop">Develop by: xexnianx</div>
	<img src = "icon/logoNav.svg"></li>
	<div class = "navBot">&copy 2017 Tsismosa.ph</div>
</nav>
</body>
</html>