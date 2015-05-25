$(document).ready(function() {
		
			$('a.nav').click(function () {
		
				$('a.nav').removeClass('selected');
				$(this).addClass('selected');
				
				current = $(this);
				
				$('#mask').scrollTo($(this).attr('href'), 800);		
				
				return false;
			});
		
			$(window).resize(function () {
				resizePanel();
			});
			
		});
		
		function resizePanel() {
		
			width = $(window).width();
			height = $(window).height();
		
			mask_width = width * $('.cover').length;
				
			//$('#debug').html(width  + ' ' + height + ' ' + mask_width);
				
			$('#mask, .item').css({width: width, height: height});
			//$('#mask').css({width: mask_width, height: height});
			$('#mask').scrollTo($('a.selected').attr('href'), 0);
				
		}
		