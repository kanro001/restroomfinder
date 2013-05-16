$(document).ready(function(){
	
	
	$(window).resize(function () {
		//only do it if the dialog box is not hidden
		if (!$('.finder_loader').is(':hidden'))
			showloading(); 
	});
	
});

function signup_ajax(){
		//body_signup_submit
		//alert("begin----------");
		var firstname = $('#body_signup_input_firstname').val();
		//alert(firstname);
		var lastname = $('#body_signup_input_lastname').val();
		//alert(lastname);
		var email = $('#body_signup_input_email').val();
		//alert(email);
		var password = $('#body_signup_input_password').val();
		var repassword =$('#body_signup_input_repassword').val();
		
		//alert(repassword);
		//alert(password);
		showloading();
		$.post("ajax/login.php?action=signup",
		{
			"signup_firstname":firstname,
			"signup_lastname":lastname,
			"signup_email":email,
			"signup_password":password/*,
			"signup_repassword":repassword*/
		},
		function(data,status){
			//alert("----------");
			//alert("Data: " + data.user + "\nMsg:" + data.msg + "\nStatus: " + status);
			
			loginheader(data.user);
			$('#dialog-overlay').css({
				"z-index":"3000"
			}).show(); 
			$('#dialog-overlay, #dialog-box').hide();
			$('.finder_loader').hide();
		},
		"json").fail(function() {
			alert("signup ajax error...");
		});
		
		//alert("end------");
}

function login_ajax(){
		//alert("begin----------");
		var email = $("#body_login_input_email").val();
		var password = $("#body_login_input_password").val();
		
		//alert(email);
		//alert(password);
		showloading();
		$.post("ajax/login.php?action=login",
		{
			"login_email":email,
			"login_password":password
		},
		function(data,status){
			//alert("----------");
			//alert("Data: " + data.user + "\nMsg:" + data.msg + "\nStatus: " + status);
			
			loginheader(data.user);
			$('#dialog-overlay').css({
				"z-index":"3000"
			}).show(); 
			$('#dialog-overlay, #dialog-box').hide();
			$('.finder_loader').hide();
		},
		"json").fail(function() {
			alert("login ajax error...");
		});
		
		//alert("end------");
}

function loginheader(username){
	var message = "<a class=\"finder_signin\" href=\"javascript:void(0);\">" + username + "</a>" +
			"<span>	|	</span>" +
			"<a class=\"finder_signin\" href=\"javascript:logout();\">Logout</a>";
	
	$('.finder_header_box').html(message);
}

function logout(){
	$.post("ajax/login.php?action=logout",
	function(data,status){
		//alert("----------");
		//alert("Data: " + data + "\nStatus: " + status);
		var message = "<a class=\"finder_signin\" href=\"javascript:popup(); loginform();\">Sign In</a>" +
		"<span>	|	</span>" +
		"<a class=\"finder_signin\" href=\"javascript:popup(); signupform();\">Register</a>";

		$('.finder_header_box').html(message);
	}).fail(function() {
		//alert("error...");
	});
	
}

function showloading(){
	// calculate the values for center alignment
	var dialogHeight =  $('.finder_loader').outerHeight(); 
	var dialogWidth = $('.finder_loader').outerWidth();
	// assign values to the overlay and dialog box
	$('.finder_loader').css({ 
		top: "50%",
		left:"50%",
		"margin-left": -(dialogWidth/2),
		"margin-top": -(dialogHeight/2)
	}).show(); 
	$('#dialog-overlay').css({
		"z-index":"5500"
	}).show(); 
}