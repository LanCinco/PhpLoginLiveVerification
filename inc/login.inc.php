<?php
    include ("conn.inc.php");
    $un = mysqli_real_escape_string($con, $_POST['userId']);
    $pass = mysqli_real_escape_string($con, $_POST['userPass']);
    $passHash = md5($pass);
    $query = mysqli_query($con, "SELECT * FROM users WHERE usercode = '".$un."'");
    $numrows = mysqli_num_rows($query);
    if ($un == "" or $pass == "") {
         echo "0"; // incomplete
    } else {
        if ($numrows !=0) { 
            if (mysqli_num_rows($query) == 1) {
                $get = mysqli_fetch_assoc($query);
                $dbUn = $get['usercode'];
                $dbPass = $get['userpass'];
                $dbVf = $get['verify'];
            }
            if ($un == $dbUn && $passHash == $dbPass) {
                if($dbVf == "T") {
                    session_start();
                    $_SESSION['user_log'] = $un;
                    echo "1"; // it support
                } else if ($dbVf == "manager") {
                    session_start();
                    $_SESSION['user_log'] = $un;
                    echo "2";  // manager
                }
            } else {
                echo "3"; // wrong pasword
            }
    } else {
        echo "4";  // invalid id
        }
    }
?>