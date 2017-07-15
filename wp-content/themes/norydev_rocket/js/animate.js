/**
 * JS Animations - Different animations in javascript
 * For Theme: NoryDev
 * By: NoryDev
 * Requires: Jquery
 */

jQuery(document).ready(function(){
	
	//Mobile touch screen
	$$('#menu-icon-a-id').tap(function() {
	    jQuery('#mobile-nav .mainmenunav').toggle();
	});

	//Top Button
	jQuery('body').append('<a href="#nav-wrap" class="top_link" title="Revenir en haut de page"></a>');
	
	//Smooth scroll
	jQuery('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
	
		var target = this.hash,
		jQuerytarget = jQuery(target);
	
		jQuery('html, body').stop().animate({
			'scrollTop': jQuerytarget.offset().top
		}, 900, 'swing', function () {
			window.location.hash = target;
		});	
	});
	
});


jQuery(window).scroll(function () {
	
	//make top button appear when necessary
	posScroll = jQuery(document).scrollTop();  
    if(posScroll >=800)   
        jQuery('.top_link').fadeIn(600);  
    else  
        jQuery('.top_link').fadeOut(600);
	
});