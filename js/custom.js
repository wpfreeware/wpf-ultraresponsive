/**	
	* Theme Name: WpF ultraResponsive
	* Theme Scripts
	* Author: WpFreeware
	* Author URI: http://wpfreeware.com/

	Custom JS
	
	1. DROPDOWN MENU	
	2. BOOTSTRAP TOOLTIP
	3. SCROLL UP BUTTON
	4. Pushdown content area if header image not exist	 	
	
**/

(function ($) {

	
/* ----------------------------------------------------------- */
/*  1. DROPDOWN MENU
/* ----------------------------------------------------------- */ 

	// for hover dropdown menu
	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
	});

	
/* ----------------------------------------------------------- */
/*  2. BOOTSTRAP TOOLTIP
/* ----------------------------------------------------------- */
	$('.soc_tooltip').tooltip('hide');




/* ----------------------------------------------------------- */
/*  3. SCROLL UP BUTTON
/* ----------------------------------------------------------- */  

  	  //Check to see if the window is top if not then display button

	  $(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollup').fadeIn();
	    } else {
	      $('.scrollup').fadeOut();
	    }
	  });
	   
	  //Click event to scroll to top
	
	  $('.scrollup').click(function(){
	    $('html, body').animate({scrollTop : 0},900);
	    return false;
	  });

/* ----------------------------------------------------------- */
/*  4. Pushdown content area if header image not exist
/* ----------------------------------------------------------- */ 


	if ( $('#imgBanner').length > 0 ){  // return's true if element is present
		
	   	$('#courseArchive').addClass('coursearchive_pushup');
	}
	else {
	 	$('#courseArchive').addClass('coursearchive_pushdown');
	}

}(jQuery));