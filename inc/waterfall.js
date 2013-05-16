$(document).ready(function(){
	var scrollTop = $(window).scrollTop();
	var windowHeight = $(window).height();
	var doch = $(document).height();

	
	$(window).scroll(function(){
		scrollTop = $(window).scrollTop();
		
		windowHeight = $(window).height();
		
		doch = $(document).height();
		
		if((scrollTop + windowHeight)>(doch - 20)){
			if($(window).scrollTop() < 3000){
				$(".col1").append("<p class = \"para\">" + $("p:nth-child("+ getRandomNum() + ")").html() + "</p>");
			}
			if($(window).scrollTop() < 3000){
				$(".col2").append("<p class = \"para\">" + $("p:nth-child("+ getRandomNum() + ")").html() + "</p>");
			}
		}
	});

	
	
});

function getRandomNum(){ 
    var rand = parseInt(1 + Math.random() * 6); 
    return rand; 
}


