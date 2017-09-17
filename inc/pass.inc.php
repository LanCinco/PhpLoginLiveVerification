<?php
	include ("conn.inc.php");

	$up = mysqli_real_escape_string($con, $_POST['userPass']);
	$uc = mysqli_real_escape_string($con, $_POST['userId']);
	$up2 = md5($up);

	$query = mysqli_query($con, "SELECT * FROM users where usercode = '".$uc."'");

	$count = mysqli_num_rows($query);

	if($count == 0 ){
		echo "2";
	} else {
		$getP = mysqli_fetch_assoc($query);
		$pass = $getP['userpass'];

		if($up2 == $pass) {
			echo "1";
		} else {
			echo "2";
		}
	}



?>

	