
// show and hide navigation tab
$('.btnSali').click(function(){
	document.getElementById('mainHidden').style.width = "500px";
	document.getElementById('cover').style.visibility = "visible";
	document.getElementById('navHidden').style.marginLeft = "0px";
});
$('.navClose').click(function(){
	$('.userPass').val("");
	$('.userId').val("");
	$('.iptClearU').fadeOut('fast');
	$('.iptClearP').fadeOut('fast');
	$('.iptOkayU').fadeOut('fast');
	$('.iptClearU').fadeOut('fast');
	document.getElementById('mainHidden').style.width = "0px";
	document.getElementById('cover').style.visibility = "hidden";
	document.getElementById('navHidden').style.marginLeft = "-500px";
	$('.error').fadeOut('fast');
    $('.errorBg').fadeOut('fast');
});
// Form
$('.frmLogin').submit(function(e){
    e.preventDefault();
});
// Submit 
$('.lSubmit').click(function(e){
    e.preventDefault();
    $.ajax({
        url: "./inc/login.inc.php",
        method: "post",
        data: $('.frmLogin').serialize(),
        dataType: "text",
        success: function(strMessage) {

        }
    });    
});
// clear user
$('.iptClearU').click(function(){
	$('.userId').val("");
	$(this).fadeOut('fast');
});
// clear password
$('.iptClearP').click(function(){
	$('.userPass').val("");
	$(this).fadeOut('fast');
});
// live verify user
$('.userId').keyup(function(){
	$.ajax({
        url: "./inc/user.inc.php",
        method: "post",
        data: $('.frmLogin').serialize(),
        dataType: "text",
        success: function(strMessage) {
        	if($('.userId').val() == "") {
        		$('.iptOkayU').fadeOut('fast');
        		$('.iptClearU').fadeOut('fast');
	        	} else {
	        		if (strMessage == 2 ) {
	        		$('.iptClearU').fadeIn('fast');
		        		$('.iptOkayU').fadeOut('fast');
		        	} else {
		        		$('.iptClearU').fadeOut('fast');
		        		$('.iptOkayU').fadeIn('fast');
		        	}
        	}
        	
        }
    }); 
});
// live verify password
$('.userPass').keyup(function(){
	$.ajax({
        url: "./inc/pass.inc.php",
        method: "post",
        data: $('.frmLogin').serialize(),
        dataType: "text",
        success: function(strMessage) {
        	if($('.userPass').val() == "") {
        		$('.iptOkayP').fadeOut('fast');
        		$('.iptClearP').fadeOut('fast');
	        	} else {
	        		if (strMessage == 2 ) {
	        		$('.iptClearP').fadeIn('fast');
		        		$('.iptOkayP').fadeOut('fast');
		        	} else {
		        		$('.iptClearP').fadeOut('fast');
		        		$('.iptOkayP').fadeIn('fast');
		        	}
        	}
        	
        }
    }); 
});
// Verify Login 
$('#lSubmit').click(function(e){
    e.preventDefault();
    $.ajax({
        url: "./inc/login.inc.php",
        method: "post",
        data: $('.frmLogin').serialize(),
        dataType: "text",
        success: function(strMessage) {
             if (strMessage == "1") {
                window.location = "http://localhost/tsismosa/main.php";
                exit;
            } else if (strMessage == "2") {
                window.location = "http://localhost/CyberReport/admin.php";
                exit;
            } else if (strMessage == "0") {
            	$('.error').text('Ano trip mo? Lagyan mo lahat!');
            	$('.error').fadeIn('slow');
            	$('.errorBg').fadeIn('slow');
            } else if (strMessage == "4") {
            	$('.error').text('Nakitang ng may mali tuloy padin!! Tsk!');
            	$('.error').fadeIn('slow');
            	$('.errorBg').fadeIn('slow');
            } else if (strMessage == "3") {
            	$('.error').text('Nakitang ng may mali tuloy padin!! Tsk!');
            	$('.error').fadeIn('slow');
            	$('.errorBg').fadeIn('slow');
            }
        }
    });    
});
// Cancel login
$('#lClose').click(function(e){
	e.preventDefault();
	$('.userPass').val("");
	$('.userId').val("");
	$('.iptClearU').fadeOut('fast');
	$('.iptClearP').fadeOut('fast');
	$('.iptOkayU').fadeOut('fast');
	$('.iptClearU').fadeOut('fast');
	document.getElementById('mainHidden').style.width = "0px";
	document.getElementById('cover').style.visibility = "hidden";
	document.getElementById('navHidden').style.marginLeft = "-500px";
	$('.error').fadeOut('fast');
    $('.errorBg').fadeOut('fast');
});