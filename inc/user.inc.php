<?php
	include ("conn.inc.php");

	$uc = mysqli_real_escape_string($con, $_POST['userId']);

	$query = mysqli_query($con, "SELECT * FROM users where usercode = '".$uc."'");
	$count = mysqli_num_rows($query);

	if($count == 0 ){
		echo "2";
	} else {
		echo "1";
	}



?>

