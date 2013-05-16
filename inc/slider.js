$(document).ready(function($) {
	$.fn.ContentSlider = function(options)
	{
		var defaults = {
			leftBtn : 'images/cs_leftImg.jpg',
			rightBtn : 'images/cs_rightImg.jpg',
			width : '900px',
			height : '400px',
			speed : 400,
			easing : 'easeOutQuad',
			textResize : false,
			IE_h2 : '26px',
			IE_p : '11px'
		};
		
		var defaultWidth = defaults.width;
		var o = $.extend(defaults, options);
		var w = parseInt(o.width);
		var n = this.children('.finder_cs_wrapper').children('.finder_cs_slider').children('.finder_cs_article').length;
		var x = -1*w*n+w; // Minimum left value
		var p = parseInt(o.width)/parseInt(defaultWidth);
		var thisInstance = this.attr('id');
		var inuse = false; // Prevents colliding animations

		function moveSlider(d, b)
		{
			var l = parseInt(b.siblings('.finder_cs_wrapper').children('.finder_cs_slider').css('left'));
			if(isNaN(l)) {
				var l = 0;
			}
			var m = (d=='left') ? l-w : l+w;
			if(m<=0&&m>=x) {
				b
				.siblings('.finder_cs_wrapper')
				.children('.finder_cs_slider')
				.animate({ 'left':m+'px' }, o.speed, o.easing, function() {
					inuse=false;
				});
			
				if(b.attr('class')=='finder_cs_leftBtn') {
					var thisBtn = $('#'+thisInstance+' .finder_cs_leftBtn');
					var otherBtn = $('#'+thisInstance+' .finder_cs_rightBtn');
				} else {
					var thisBtn = $('#'+thisInstance+' .finder_cs_rightBtn');
					var otherBtn = $('#'+thisInstance+' .finder_cs_leftBtn');
				}
				if(m==0||m==x) {
					thisBtn.animate({ 'opacity':'0' }, o.speed, o.easing, function() { thisBtn.hide(); });
				}
				if(otherBtn.css('opacity')=='0') {
					otherBtn.show().animate({ 'opacity':'1' }, { duration:o.speed, easing:o.easing });
				}
			}
		}

		function vCenterBtns(b)
		{
			// Safari and IE don't seem to like the CSS used to vertically center
			// the buttons, so we'll force it with this function
			var mid = parseInt(o.height)/2;
			b
			.find('.finder_cs_leftBtn img').css({ 'top':mid+'px', 'padding':0 }).end()
			.find('.finder_cs_rightBtn img').css({ 'top':mid+'px', 'padding':0 });
		}

		return this.each(function() {
			$(this)
			// Set the width and height of the div to the defined size
			.css({
				width:o.width,
				height:o.height
			})
			// Add the buttons to move left and right
			.prepend('<a class="finder_cs_leftBtn" href="javascript:void(0)"><div class="arrowleft"></div></a>')
			.append('<a class="finder_cs_rightBtn" href="javascript:void(0)"><div class="arrowright"></div></a>')
			// Dig down to the article div elements
			.find('.finder_cs_article')
			// Set the width and height of the div to the defined size
			.css({
				width:o.width,
				height:o.height
			})
			.end()
			// Animate the entrance of the buttons
			.find('.finder_cs_leftBtn')
			.css('opacity','0')
			.hide()
			.end()
			.find('.finder_cs_rightBtn')
			.hide()
			.animate({ 'width':'show' });
			
			// Resize the font to match the bounding box
			if(o.textResize===true) {
				var h2FontSize = $(this).find('h2').css('font-size');
				var pFontSize = $(this).find('p').css('font-size');
				$.each(jQuery.browser, function(i) {
					if($.browser.msie) {
						h2FontSize = o.IE_h2;
						pFontSize = o.IE_p;
					}
				});
				$(this).find('h2').css({ 'font-size' : parseFloat(h2FontSize)*p+'px', 'margin-left' : '66%' });
				$(this).find('p').css({ 'font-size' : parseFloat(pFontSize)*p+'px', 'margin-left' : '66%' });
				$(this).find('.readmore').css({ 'font-size' : parseFloat(pFontSize)*p+'px', 'margin-left' : '66%' });
			}
			
			// Store a copy of the button in a variable to pass to moveSlider()
			var leftBtn = $(this).children('.finder_cs_leftBtn');
			leftBtn.bind('click', function() {
				if(inuse===false) {
					inuse = true;
					moveSlider('right', leftBtn);
				}
				return false; // Keep the link from firing
			});
			
			// Store a copy of the button in a variable to pass to moveSlider()
			var rightBtn = $(this).children('.finder_cs_rightBtn');
			rightBtn.bind('click', function() {
				if(inuse===false) {
					inuse=true;
					moveSlider('left', rightBtn);
				}
				return false; // Keep the link from firing
			});
			
			vCenterBtns($(this)); // This is a CSS fix function.
		});
	}
});