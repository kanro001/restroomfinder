$(document).ready(function(){
	$(window).resize(function () {
		//Do something when the size of window has been changed
		var maskWidth = $(window).width();
		//alert("AAAAAAAAAAAAAAA" + maskWidth);
		
		if(maskWidth <= "650"){
			if ($('#finder_upload_widget').is('.finder_widget')){
				//alert("-----------");
				relocateMap();
			}
		}
		if(maskWidth > "650"){
			if ($('#finder_upload_widget').is('.finder_post')){
				//alert("-----------");
				recoverMap();
			}
		}
	});
});

function relocateMap(){
	$('#finder_upload_widget').removeClass("finder_post");
	var x=document.getElementById("finder_upload_widget");
	var str = "<article class=\"finder_post finder_clearfix\" id=\"finder_upload_widget\">" + x.innerHTML + "</article>";
	//alert(str);
	$("#finder_upload_widget").remove();
	//$('#finder_upload_widget').getE
	//
	$('#finder_content').prepend(str);
}

function recoverMap(){
	$('#finder_upload_widget').removeClass("finder_widget");
	var x=document.getElementById("finder_upload_widget");
	var str = "<section class=\"finder_widget\"  id=\"finder_upload_widget\">" + x.innerHTML + "</section>";
	//alert(str);
	$("#finder_upload_widget").remove();
	//$('#finder_upload_widget').getE
	//
	$('#finder_sidebar').append(str);
}

function relocateMapByMenu(){
	//$('#finder_upload_widget').removeClass("finder_widget");
	var x=document.getElementById("finder_upload_widget");
	var str = "<article class=\"finder_post finder_clearfix\" id=\"finder_upload_widget\">" + x.innerHTML + "</article>";
	//alert(str);
	//$("#finder_upload_widget").remove();

	$('body').append(str);
	
	var maskHeight = $(document).height(); 
	var maskWidth = $(window).width();
	// calculate the values for center alignment
	var dialogHeight =  $('#finder_upload_widget').outerHeight(); 
	var dialogWidth = $('#finder_upload_widget').outerWidth();
	// assign values to the overlay and dialog box
	$('#dialog-overlay').css({
		height:maskHeight, 
		width:maskWidth
	}).show(); 
	$('#finder_upload_widget').css({ 
		"z-index":"5000",
		position:"absolute",
		width:"40%",
		top: "60%",
		left:"50%",
		"margin-left": -(dialogWidth/2),
		"margin-top": -(dialogHeight/2)
	}).show(); 
}

function upload_ajax(){
	//body_signup_submit
	//alert("begin----------");
	var gender = $('#finder_upload_gender').val();
	alert(gender);
	var name = $('#finder_upload_name').val();
	alert(name);
	var area = $('#finder_upload_area').val();
	alert(area);
	var city = $('#finder_upload_city').val();
	alert(city);
	
	//alert(repassword);
	showloading();
	$.post("ajax/upload.php",
	{
		"upload_gender":firstname,
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
