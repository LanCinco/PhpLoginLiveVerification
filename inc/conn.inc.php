<?php
	$con = mysqli_connect("127.0.0.1:3307", "root", "") or die (mysqli_error());
	mysqli_select_db($con, "tsismosadb") or die (mysqli_error($con));
?>