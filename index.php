<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<!-- Disable iPhone inital scale -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Restroom Finder</title>
<link rel="stylesheet" href="bootstrap.min.css"/>
<link rel="stylesheet" href="main.css"/>
<link rel="stylesheet" href="media-queries.css"/>
<!-- Support HTML5 tags for IE less than 9 -->
<!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!-- Support media query for IE less than 9 -->
<!--[if lt IE 9]>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->
</head>
<body >
	<script src="jquery.min.js"></script>
	<script src="bootstrap.min.js"></script>
	<script type="text/javascript" src="jquery.easing.1.3.js"></script>
	<script src="main.js"></script>

<div id="finder_pagewrap">

	<header id="finder_header">

		<hgroup>
			<h1 id="finder_site-logo"><a href="#">Restroom Finder</a></h1>
			<h2 id="finder_site-description">Save yourself and others under emergency situations</h2>
			<div class="finder_header_box">
				<a class="finder_signin" href="javascript:popup()">Sign In</a>
				<span>	|	</span>
				<a class="finder_signin" href="javascript:popup(); signupform();">Register</a>
			</div>
		</hgroup>

		<nav>
			<ul id="finder_main-nav" class="finder_clearfix">
				<li><a href="javascript:location.reload();">Home</a></li>
				<li><a href="javascript:relocateMapByMenu();">Upload</a> </li>
				<li><a href="javascript:popupSlider()">Surf</a></li>
			</ul>
			<!-- /#finder_main-nav --> 
		</nav>

		<script src="inc/body.search.js"></script>
		<form id="finder_searchform">
			<input type="search" id="finder_s" placeholder="Search">
		</form>

	</header>
	<!-- /#finder_header -->
	
	<script src="inc/body.article.js"></script>
	<div id="finder_content">

		
		<!-- <article class="finder_post finder_clearfix">

			<header>
				<h1 class="finder_post-title">
					<a href="#">Manhattan Mall</a>
				</h1>
				<p class="finder_post-meta">
					<a href="#">Hoboken</a>
					<em>in</em>
					<a href="#">Category</a>
					<span> | </span>
					<time class="finder_post-date" >May 8, 2011</time>
				</p>
				<address class="item_loc">
					<strong>Manhattan Mall, 33rd St., New York, NY 10001<br/></strong>
					<abbr title="Phone">P:</abbr> (918) 456-7890
				</address>
				<div class="item_gender">
					<span>Gender :</span>
					<span>Both</span>
				</div>
			</header>
			<figure class="finder_post-image"> 
				<img src="images/1.jpg" /> 
			</figure>
			
		</article> -->
		<!-- /.finder_post -->
		
		<!-- <article class="finder_post finder_clearfix">

			<header>
				<h1 class="finder_post-title">
					<a href="#">Debaun Auditorium</a>
				</h1>
				<p class="finder_post-meta">
					<time class="finder_post-date" datetime="2011-05-08" pubdate>May 8, 2011</time>
					<em>in</em>
					<a href="#">Category</a>
				</p>
				<address class="item_loc">
					<strong>500 Hudson St, Hoboken, NJ 07030<br/></strong>
					<abbr title="Phone">P:</abbr> (201) 456-7890
				</address>
				<div class="item_gender">
					<span>Gender :</span>
					<span>Unisex</span>
				</div>
			</header>
			<figure class="finder_post-image"> 
				<img src="images/3.jpg" /> 
			</figure>
		</article> -->
		<!-- /.finder_post -->
		
		<!-- <article class="finder_post finder_clearfix">

			<header>
				<h1 class="finder_post-title">
					<a href="#">Charmin Restrooms</a>
				</h1>
				<p class="finder_post-meta">
					<time class="finder_post-date" datetime="2011-05-08" pubdate>May 8, 2011</time>
					<em>in</em>
					<a href="#">Category</a>
				</p>
				<address class="item_loc">
					<strong>142 West 42nd Street, New York, NY 10036<br/></strong>
					<abbr title="Phone">P:</abbr> (918) 456-7890
				</address>
				<div class="item_gender">
					<span>Gender :</span>
					<span>Both</span>
				</div>
			</header>
			<figure class="finder_post-image"> 
				<img src="images/2.jpg" /> 
			</figure>
		</article> -->
		<!-- /.finder_post -->
		
		<!-- 
		<article class="finder_post finder_clearfix">
			<header>
				<h1 class="finder_post-title">
					<a href="#">Debaun Auditorium</a>
				</h1>
				<p class="finder_post-meta">
					<time class="finder_post-date" datetime="2011-05-08" pubdate>May 8, 2011</time>
					<em>in</em>
					<a href="#">Category</a>
				</p>
				<address class="item_loc">
					<strong>500 Hudson St, Hoboken, NJ 07030<br/></strong>
					<abbr title="Phone">P:</abbr> (201) 456-7890
				</address>
				<div class="item_gender">
					<span>Gender :</span>
					<span>Unisex</span>
				</div>
			</header>
			<figure class="finder_post-image"> 
				<img src="images/sample-image.jpg" /> 
			</figure>
			<p>Fusce ut sem est. In eu sagittis felis. In gravida arcu ut neque ornare vitae rutrum turpis vehicula. Nunc ultrices sem mollis metus rutrum non malesuada metus fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque interdum rutrum quam, a pharetra est pulvinar ac. Vestibulum congue nisl magna. Ut vulputate odio id dui convallis in adipiscing libero condimentum. Nunc et pharetra enim. Praesent pharetra, neque et luctus tempor, leo sapien faucibus leo, a dignissim turpis ipsum sed libero. Sed sed luctus purus. Aliquam faucibus turpis at libero consectetur euismod. Nam nunc lectus, congue non egestas quis, condimentum ut arcu. Nulla placerat, tortor non egestas rutrum, mi turpis adipiscing dui, et mollis turpis tortor vel orci. Cras a fringilla nunc. Suspendisse volutpat, eros congue scelerisque iaculis, magna odio sodales dui, vitae vulputate elit metus ac arcu. Mauris consequat rhoncus dolor id sagittis. Cras tortor elit, aliquet quis tincidunt eget, dignissim non tortor.</p>

			<h3>Vimeo Video</h3>
			<div class="finder_video">
				<iframe src="http://player.vimeo.com/video/6284199" width="550" height="400" frameborder="0"></iframe>
			</div>
			<h3>YouTube</h3>
			<div class="finder_video">
				<object width="500" height="400">
					<param name="movie" value="http://www.youtube.com/v/NmRTreaCJXs?version=3">
					</param>
					<param name="allowFullScreen" value="true">
					</param>
					<param name="allowscriptaccess" value="always">
					</param>
					<param name="wmode" value="transparent">
					</param>
					<embed wmode="transparent"  src="http://www.youtube.com/v/NmRTreaCJXs?version=3" type="application/x-shockwave-flash" width="600" height="420" allowscriptaccess="always" allowfullscreen="true"></embed>
				</object>
			</div>

		</article>
		
		 -->
	</div>
	<!-- /#finder_content --> 
	
	
	<script src="inc/body.sidebar.js"></script>
	<script src="map/map.js"></script>
	<aside id="finder_sidebar">
		<section class="finder_widget">
			<h4 class="finder_widgettitle">Map</h4>
			<div class="finder_all_map">

				<?php 
					include("map/map.php");
				?>
				
			</div>
		</section>
	
		<section class="finder_widget">
			<h4 class="finder_widgettitle">Gender</h4>
			<ul id="finder_gender_widget">
				<li><a href="javascript:getActicleDataByGender('0');">Both</a><span> (0)</span></li>
				<li><a href="javascript:getActicleDataByGender('1');">Male</a><span> (0)</span></li>
				<li><a href="javascript:getActicleDataByGender('2');">Female</a><span> (0)</span></li>
				<li><a href="javascript:getActicleDataByGender('3');">Unisex</a><span> (0)</span></li>
			</ul>
		</section>
		<!-- /.finder_widget -->

		<section class="finder_widget">
			<h4 class="finder_widgettitle">Area</h4>
			<ul id="finder_area_widget">
				<li><a href="javascript:getActicleDataByArea('Hoboken');">Hoboken</a><span> (0)</span></li>
				<li><a href="javascript:getActicleDataByArea('Korean Town');">Korean Town</a><span> (0)</span></li>
				<li><a href="javascript:getActicleDataByArea('West Villiage');">West Villiage</a><span> (0)</span></li>
				<li><a href="javascript:getActicleDataByArea('East Villiage');">East Villiage</a><span> (0)</span></li>
				<li><a href="javascript:getActicleDataByArea('Times Square');">Times Square</a><span> (0)</span></li>
			</ul>
		</section>
		<!-- /.finder_widget -->
		
		
		<link rel="stylesheet" href="inc/upload.css"/>
		<script src="inc/body.upload.js"></script>
		<section class="finder_widget" id="finder_upload_widget">
			<h4 class="finder_widgettitle">Upload</h4>
			<div class="finder_upload">
				<form class="finder_upload_form" action="ajax/upload.php" method="post" enctype="multipart/form-data">
				<select class="body_upload_input" id="finder_upload_gender" name="finder_upload_gender" required/>
					<option value="both">Both</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="unisex">Unisex</option>
				</select>
				<input class="body_upload_input" type="text" name="finder_upload_name" id="finder_upload_name" placeholder="Building name" required></input>
				<input class="body_upload_input" type="text" name="finder_upload_addr" id="finder_upload_addr" placeholder="Address" required></input>
				<!-- <input class="body_login_input" type="text" name="floor"/> -->
				<span>Click on the map for coordinates.</span>
				<div id="finder_upload_map">
				<?php 
					include("map/lo.php");
				?>
				</div>
				<input class="body_upload_input" type="text" name="finder_upload_longitude" id="finder_upload_longitude" placeholder="Longitude" required/>
				<input class="body_upload_input" type="text" name="finder_upload_latitude" id="finder_upload_latitude" placeholder="Latitude" required/>
				<input class="body_upload_input" type="text" name="finder_upload_area" id="finder_upload_area" placeholder="Area" required/>
				<input class="body_upload_input" type="text" name="finder_upload_city" id="finder_upload_city" placeholder="City" required/>
				<input class="body_upload_input" type="text" name="finder_upload_phone" id="finder_upload_phone" placeholder="Phone" required/>
				<input class="body_upload_input" type="file" name="finder_upload_file" id="finder_upload_file" required/>
				<input class="body_upload_submit" type="submit" name="add" id="finder_upload_submit" value="Add""/>
				</form>
			</div>
		</section>
		
		<!-- /.finder_widget -->
						
	</aside>
	<!-- /#finder_sidebar -->

	<footer id="finder_footer">
	
		<p>Designed by <a href="">Binzhe Liu</a> and <a href="">Hongyu Qu</a></p>

	</footer>
	<!-- /#finder_footer --> 
	
</div>
<!-- /#finder_pagewrap -->

<link rel="stylesheet" href="inc/popup.css"/>
<link rel="stylesheet" href="inc/body.login.css"/>
<script src="inc/popup.js"></script>
<script src="inc/body.login.js"></script>
<div id="dialog-overlay"></div>
</script>
<div id="dialog-box">
    <div class="dialog-content">
            <div id="dialog-message">
				<div action="" class="body_login" id="body_login">
					<h1><a href="#">Log In</a><span> | </span><a href="javascript:signupform()">Sign Up</a></h1>
					<input type="email" name="email" class="body_login_input" id="body_login_input_email" pattern="[^ @]*@[^ @]*" placeholder="Email Address" autofocus required>
					<input type="password" name="password" class="body_login_input" id="body_login_input_password" placeholder="Password" required>
					<input type="submit" value="Log In" class="body_login_submit" id="body_login_submit" onclick="login_ajax()">
					<p class="body_login_help"><a href="pwhelper.html">Forgot password?</a></p>
				</div>
            </div>
            <!-- /#dialog-message -->
            <a href="#" class="dialog_close button">Close</a>
    </div><!-- /#dialog-content -->
</div>
<!-- /#dialog-box -->
<div id="finder_one" class="finder_contentslider">
	<link rel="stylesheet" type="text/css" href="inc/arrow.css"/>
	<link rel="stylesheet" type="text/css" href="inc/slider.css"/>
	<script type="text/javascript" src="inc/slider.js"></script>
	<script type="text/javascript">
		$(function() {
			$('#finder_one').ContentSlider({
				width : '900px',
				height : '400px',
				speed : 800,
				easing : 'easeOutQuad'
			});
		});
	</script>
	<div class="finder_cs_wrapper">
		<div class="finder_cs_slider">

			<div class="finder_cs_article">
				<h2> <a href="#">Manhattan Mall</a> </h2>
				<a href="#">
					<img src="images/1.jpg"
						alt="Artist's interpretation of article headline" />
				</a>
				<p>
					<time class="finder_post-date" datetime="2011-05-08" pubdate>May 8, 2011</time>
					<em>in</em>
					<a href="#">Category</a>
					<strong>Manhattan Mall, 33rd St., New York, NY 10001<br/></strong>
					<abbr title="Phone">P:</abbr> (918) 456-7890
				</p>
				<p>The Manhattan Mall, owned and managed by Vornado Realty Trust and one of the few indoor shopping malls in New York City, is located at 33rd Street and Sixth Avenue. </p>
		
				<a href="#" class="finder_readmore">Read More</a>
			</div><!-- End finder_cs_article -->

			<div class="finder_cs_article">
				<h2> <a href="#">Article Number Two</a> </h2>
				<a href="#">
					<img src="images/2.jpg"
						alt="Artist's interpretation of article headline" />
				</a>
				<p>
					Nibh nihil et ex accumsan insitam. Qui lius congue
					hendrerit quam vero. Demonstraverunt molestie ipsum
					magna nobis sequitur. Ex diam euismod quis ii velit.
				</p>
				<p>
					In quam lectores placerat Investigationes illum. Diam
					sollemnes nihil lorem claram consectetuer. Eros nam
					placerat claritas claritatem congue. Adipiscing ut
					clari suscipit nulla habent.
				</p>
				<a href="#" class="finder_readmore">Read More</a>
			</div><!-- End finder_cs_article -->

			<div class="finder_cs_article">
				<h2> <a href="#">Article Number Three</a> </h2>
				<a href="#">
					<img src="images/3.jpg"
						alt="Artist's interpretation of article headline" />
				</a>
				<p>
					Clari eum vel blandit notare quarta. Autem processus
					lectores augue iriure facit. Volutpat aliquip erat
					imperdiet ipsum tation. Typi luptatum ut
					demonstraverunt eros quam. Ut clari consectetuer
					tincidunt liber qui. 
				</p>
				<p>
					Modo vel facilisis qui liber est. Eorum Investigationes
					processus adipiscing commodo ea. Id iis claritatem vero
					ea consequat.
				</p>
				<a href="#" class="finder_readmore">Read More</a>
			</div><!-- End finder_cs_article -->

			<div class="finder_cs_article">
				<h2> <a href="#">Article Number Four</a> </h2>
				<a href="#">
					<img src="images/1.jpg"
						alt="Artist's interpretation of article headline" />
				</a>
				<p>
					Iis nostrud claritas quis sed qui. Ut nunc facilisi
					claritatem quinta sit. Assum ii liber diam zzril nobis.
					Qui nibh delenit fiant te illum. Delenit claritas ut
					exerci eros typi. 
				</p>
				<p>
					Videntur vel euismod ut eleifend quis. Nobis aliquam
					nunc vero blandit illum. Lius placerat litterarum
					processus quam legere. Accumsan modo non at congue
					duis. Odio duis ut blandit feugait in. 
				</p>
				<a href="#" class="finder_readmore">Read More</a>
			</div><!-- End finder_cs_article -->

		</div><!-- End finder_cs_slider -->
	</div><!-- End finder_cs_wrapper -->
</div><!-- End finder_contentslider -->

<link rel="stylesheet" href="inc/loading.css"/>
<div class="finder_loader">
    <span></span>
    <span></span>
    <span></span>
</div>

<div style="display:none;">
<?php 
	include("map/map.php");
?>
</div>

</body>
</html>