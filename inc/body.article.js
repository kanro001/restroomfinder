$(document).ready(function(){
	
	
	$(window).resize(function () {
		//Do something when the size of window has been changed
		
	});
	
	getActicleData();
	//getActicleDataByArea("Hoboken");
});

function getActicleData(){
	//alert("begin----------");

	$.post("ajax/acticle.php?action=body",
			function(data,status){
		//alert("----------");
		//var str = "data.data"+"7"+"addr";
		//alert("Data: " + data.success + "\nMsg:" + data.msg + "\nStatus: " + status + "\nname: " + eval(str));
		//Set Area Sidebar data 
		for (var i=0;i<10;i++)
		{ 
			var flag = eval("data.data"+ i +"gender");
			var gender;
			if(flag == 0)
				gender = "Both";
			else if(flag == 1)
				gender = "Male";
			else if(flag == 2)
				gender = "Female";
			else if(flag == 3)
				gender = "Unisex";
			else
				gender = "Unknown";
			var arcticle_content = "<article class=\"finder_post finder_clearfix\">"+

										"<header>"+
											"<h1 class=\"finder_post-title\">"+
												"<a href=\"#\">" + eval("data.data"+ i +"room_name") + "</a>"+
											"</h1>"+
											"<p class=\"finder_post-meta\">"+
												"<a href=\"javascript:getActicleDataByArea('" + eval("data.data"+ i +"area") + "')\";)>" + eval("data.data"+ i +"area") + "</a>"+
												"<em> in </em>"+
												"<a href=\"#\">" + eval("data.data"+ i +"city") + "</a>"+
												"<span> | </span>"+
												"<time class=\"finder_post-date\" >" + eval("data.data"+ i +"date") + "</time>"+
											"</p>"+
											"<address class=\"item_loc\">"+
												"<strong>" + eval("data.data"+ i +"addr") + "<br/></strong>"+
												"<abbr title=\"Phone\">P:</abbr> " + eval("data.data"+ i +"phone") + ""+
											"</address>"+
											"<div class=\"item_gender\">"+
												"<span>Gender : </span>"+
												"<span>" + gender + "</span>"+
											"</div>"+
										"</header>"+
										"<figure class=\"finder_post-image\"> "+
											"<img src=\"" + eval("data.data"+ i +"img") + "\" /> "+
										"</figure>"+
										
									"</article>";
			$('#finder_content').append(arcticle_content);
		}
		
	},
	"json").fail(function() {
		alert("content article ajax error...");
	});
	
	//alert("end------");
}

function getActicleDataByArea(area){
	//alert("begin----------");
	showloading();
	$.post("ajax/acticle.php?action=area",{
		"area":area,
	},
	function(data,status){
		//alert("----------");
		//var str = "data.data"+"0"+"addr";
		//alert("Data: " + data.success + "\nMsg:" + data.msg + "\nStatus: " + status + "\nNum: " + data.count + "\naddr: " + eval(str));
		//Set Area Sidebar data 
		var article_count = data.count;
		for (var i=0;i <article_count; i++)
		{ 
			var flag = eval("data.data"+ i +"gender");
			var gender;
			if(flag == 0)
				gender = "Both";
			else if(flag == 1)
				gender = "Male";
			else if(flag == 2)
				gender = "Female";
			else if(flag == 3)
				gender = "Unisex";
			else
				gender = "Unknown";
			var article_content = "<article class=\"finder_post finder_clearfix\">"+
	
										"<header>"+
											"<h1 class=\"finder_post-title\">"+
												"<a href=\"#\">" + eval("data.data"+ i +"room_name") + "</a>"+
											"</h1>"+
											"<p class=\"finder_post-meta\">"+
												"<a href=\"javascript:getActicleDataByArea('" + eval("data.data"+ i +"area") + "')\";)>" + eval("data.data"+ i +"area") + "</a>"+
												"<em> in </em>"+
												"<a href=\"#\">" + eval("data.data"+ i +"city") + "</a>"+
												"<span> | </span>"+
												"<time class=\"finder_post-date\" >" + eval("data.data"+ i +"date") + "</time>"+
											"</p>"+
											"<address class=\"item_loc\">"+
												"<strong>" + eval("data.data"+ i +"addr") + "<br/></strong>"+
												"<abbr title=\"Phone\">P:</abbr> " + eval("data.data"+ i +"phone") + ""+
											"</address>"+
											"<div class=\"item_gender\">"+
												"<span>Gender : </span>"+
												"<span>" + gender + "</span>"+
											"</div>"+
										"</header>"+
										"<figure class=\"finder_post-image\"> "+
											"<img src=\"" + eval("data.data"+ i +"img") + "\" /> "+
										"</figure>"+
										
									"</article>";
			if(i == 0){
				$('#finder_content').html(article_content);
			}else{
				$('#finder_content').append(article_content);
			}
		}
		
		$('#dialog-overlay').css({
			"z-index":"3000"
		}).show(); 
		$('#dialog-overlay').hide();
		$('.finder_loader').hide();
		
	},
	"json").fail(function() {
		alert("content article by area ajax error...");
	});
	
	//alert("end------");
}

function getActicleDataByGender(gender){
	//alert("begin----------");
	showloading();
	$.post("ajax/acticle.php?action=gender",{
		"gender":gender,
	},
	function(data,status){
		//alert("----------");
		//var str = "data.data"+"0"+"addr";
		//alert("Data: " + data.success + "\nMsg:" + data.msg + "\nStatus: " + status + "\nNum: " + data.count + "\naddr: " + eval(str));
		//Set Area Sidebar data 
		var article_count = data.count;
		for (var i=0;i <article_count; i++)
		{ 
			var flag = eval("data.data"+ i +"gender");
			var gender;
			if(flag == 0)
				gender = "Both";
			else if(flag == 1)
				gender = "Male";
			else if(flag == 2)
				gender = "Female";
			else if(flag == 3)
				gender = "Unisex";
			else
				gender = "Unknown";
			var article_content = "<article class=\"finder_post finder_clearfix\">"+
	
										"<header>"+
											"<h1 class=\"finder_post-title\">"+
												"<a href=\"#\">" + eval("data.data"+ i +"room_name") + "</a>"+
											"</h1>"+
											"<p class=\"finder_post-meta\">"+
												"<a href=\"javascript:getActicleDataByArea('" + eval("data.data"+ i +"area") + "')\";)>" + eval("data.data"+ i +"area") + "</a>"+
												"<em> in </em>"+
												"<a href=\"#\">" + eval("data.data"+ i +"city") + "</a>"+
												"<span> | </span>"+
												"<time class=\"finder_post-date\" >" + eval("data.data"+ i +"date") + "</time>"+
											"</p>"+
											"<address class=\"item_loc\">"+
												"<strong>" + eval("data.data"+ i +"addr") + "<br/></strong>"+
												"<abbr title=\"Phone\">P:</abbr> " + eval("data.data"+ i +"phone") + ""+
											"</address>"+
											"<div class=\"item_gender\">"+
												"<span>Gender : </span>"+
												"<span>" + gender + "</span>"+
											"</div>"+
										"</header>"+
										"<figure class=\"finder_post-image\"> "+
											"<img src=\"" + eval("data.data"+ i +"img") + "\" /> "+
										"</figure>"+
										
									"</article>";
			if(i == 0){
				$('#finder_content').html(article_content);
			}else{
				$('#finder_content').append(article_content);
			}
		}
		
		$('#dialog-overlay').css({
			"z-index":"3000"
		}).show(); 
		$('#dialog-overlay').hide();
		$('.finder_loader').hide();
		
	},
	"json").fail(function() {
		alert("content article by area ajax error...");
	});
	
	//alert("end------");
}
