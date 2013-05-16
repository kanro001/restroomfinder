$(document).ready(function(){
	
	
	$(window).resize(function () {
		//Do something when the size of window has been changed
		/*if (!$('.finder_loader').is(':hidden'))
			showloading(); */
	});
	
	getSiderBarDataByArea();
	getSiderBarDataByGender();
	
});

function getSiderBarDataByArea(){
	//alert("begin----------");

	$.post("ajax/sidebar.php?action=area",
			function(data,status){
		//alert("----------");
		//alert("Data: " + data.success + "\nMsg:" + data.msg + "\nStatus: " + status + "\nHoboken: " + data.hoboken);
		//Set Area Sidebar data 
		$('#finder_area_widget>li:nth-child(1)>span').html(" (" + data.hoboken + ")");
		$('#finder_area_widget>li:nth-child(2)>span').html(" (" + data.koreanTown + ")");
		$('#finder_area_widget>li:nth-child(3)>span').html(" (" + data.westvilliage + ")");
		$('#finder_area_widget>li:nth-child(4)>span').html(" (" + data.eastvilliage + ")");
		$('#finder_area_widget>li:nth-child(5)>span').html(" (" + data.timessquare + ")");
		
	},
	"json").fail(function() {
		alert("area sidebar ajax error...");
	});
	
	//alert("end------");
}

function getSiderBarDataByGender(){
	//alert("begin----------");


	$.post("ajax/sidebar.php?action=gender",
			function(data,status){
		//alert("----------");
		//alert("Data: " + data.user + "\nMsg:" + data.msg + "\nStatus: " + status + "\nBoth: " + data.both);
		//Set Gender Sidebar data 

		$('#finder_gender_widget>li:nth-child(1)>span').html(" (" + data.both + ")");
		$('#finder_gender_widget>li:nth-child(2)>span').html(" (" + data.male + ")");
		$('#finder_gender_widget>li:nth-child(3)>span').html(" (" + data.female + ")");
		$('#finder_gender_widget>li:nth-child(4)>span').html(" (" + data.unisex + ")");
		
	},
	"json").fail(function() {
		alert("sidebar ajax error...");
	});
	
	//alert("end------");
}

function onAreaSideBarClick(area){
	
}