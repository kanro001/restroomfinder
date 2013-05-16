$(document).ready(function () {
	
	// if user clicked on button, the overlay layer or the dialogbox, close the dialog
	$('.dialog_close').click(function () {
		$('#dialog-overlay, #dialog-box').hide();
		return false;
	}); 
	// if user resize the window, call the same function again
	// to make sure the overlay fills the screen and dialogbox aligned to center
	$(window).resize(function () {
		//only do it if the dialog box is not hidden
		if (!$('.finder_contentslider').is(':hidden'))
			popupSlider(); 
		if (!$('#dialog-box').is(':hidden'))
			popup(); 
	});
	
	$('#dialog-overlay')
	  .css('cursor', 'pointer')
	  .click(
	    function(){
			$('#dialog-overlay, #dialog-box, .finder_contentslider, .finder_loader, #finder_upload_widget').hide();
			return false;
	    }
	  );
}); 
//Popup dialog 
function popup() {
	// get the screen height and width
	var maskHeight = $(document).height(); 
	var maskWidth = $(window).width();
	// calculate the values for center alignment
	var dialogHeight =  $('#dialog-box').outerHeight(); 
	var dialogWidth = $('#dialog-box').outerWidth();
	// assign values to the overlay and dialog box
	$('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show(); 
	$('#dialog-box').css({ 
		top: "50%",
		left:"50%",
		"margin-left": -(dialogWidth/2),
		"margin-top": -(dialogHeight/2)
	}).show(); 
}
//Popup slider
function popupSlider(){
	// get the screen height and width
	var maskHeight = $(document).height(); 
	var maskWidth = $(window).width();
	// calculate the values for center alignment
	var dialogHeight =  $('.finder_contentslider').outerHeight(); 
	var dialogWidth = $('.finder_contentslider').outerWidth();
	// assign values to the overlay and dialog box
	$('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show(); 
	$('.finder_contentslider').css({ 
		top: "50%",
		left:"50%",
		"margin-left": -(dialogWidth/2),
		"margin-top": -(dialogHeight/2)
	}).show(); 
}

function signupform(){
	var message = "<div class=\"body_login\" id=\"body_register\">"+
						"<h1><a  href=\"javascript:loginform()\">Log In</a><span> | </span><a href=\"#\">Sign Up</a></h1>"+
						"<input type=\"text\" name=\"firstname\" class=\"body_login_input\" placeholder=\"First Name\"  id=\"body_signup_input_firstname\" required autofocus>"+
						"<input type=\"text\" name=\"lastname\" class=\"body_login_input\" id=\"body_signup_input_lastname\" placeholder=\"Last Name\" required>"+
						"<input type=\"email\" name=\"email\" class=\"body_login_input\" id=\"body_signup_input_email\" pattern=\"[^ @]*@[^ @]*\" placeholder=\"Email Address\" required>"+
						"<input type=\"password\" name=\"password\" class=\"body_login_input\" id=\"body_signup_input_password\" placeholder=\"Password\" required>"+
						"<input type=\"password\" name=\"re-password\" class=\"body_login_input\" id=\"body_signup_input_repassword\" placeholder=\"Password\" required>"+
						"<input type=\"submit\" value=\"Sign Up\" class=\"body_login_submit\" id=\"body_signup_submit\" onclick=\"signup_ajax()\">"+
					"<\/div>";
	var message2 ="<div action=\"\" class=\"body_login\" id=\"body_login\">"+
						"<h1><a href=\"#\">Log In</a><span> | </span><a href=\"javascript:signupform()\">Sign Up</a></h1>" + 
						"<input type=\"email\" name=\"email\" class=\"body_login_input\" id=\"body_login_input_email\" pattern=\"[^ @]*@[^ @]*\" placeholder=\"Email Address\" autofocus required>"+
						"<input type=\"password\" name=\"password\" class=\"body_login_input\" id=\"body_login_input_password\" placeholder=\"Password\" required>" +
						"<input type=\"submit\" value=\"Log In\" class=\"body_login_submit\" id=\"body_login_submit\" onclick=\"signup_ajax()\">"+
						"<p class=\"body_login_help\"><a href=\"pwhelper.html\">Forgot password?</a></p>"+
					"</div>";
	$('#dialog-message').html(message);
}

function loginform(){
	var message ="<div action=\"\" class=\"body_login\" id=\"body_login\">"+
					"<h1><a href=\"#\">Log In</a><span> | </span><a href=\"javascript:signupform()\">Sign Up</a></h1>" + 
					"<input type=\"email\" name=\"email\" class=\"body_login_input\" id=\"body_login_input_email\" pattern=\"[^ @]*@[^ @]*\" placeholder=\"Email Address\" autofocus required>"+
					"<input type=\"password\" name=\"password\" class=\"body_login_input\" id=\"body_login_input_password\" placeholder=\"Password\" required>" +
					"<input type=\"submit\" value=\"Log In\" class=\"body_login_submit\" id=\"body_login_submit\" onclick=\"login_ajax()\">"+
					"<p class=\"body_login_help\"><a href=\"pwhelper.html\">Forgot password?</a></p>"+
				"</div>";
	$('#dialog-message').html(message);
}
