jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    //	1. Product Carousel
    //	2. Go to Top
    //	3. pretty Photo
    //	3. Dropdown Menu
    //	4. Equal Height
    // -------------------------------------------------------------


    // -------------------------------------------------------------
    //  Carousel
    // -------------------------------------------------------------

	
    (function () {

        $('.product-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            navText: ["",""],

            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                480:{
                    items:2,
                    nav:false
                },
                768:{
                    items:3
                }
            }
        });

        $('.latest-news').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            dots:false,
            navText: ["",""],

            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:3
                }
            }
        });

        $('.client-testimonial').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots:false,
            navText: ["",""],

            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1
                }
            }
        });

        $('.logo-slider').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            dots:false,
            navText: ["",""],

            responsive:{
                0:{
                    items:3
                },
                600:{
                    items:5
                },

                768:{
                    items:6
                },

                1000:{
                    items:7
                }
            }
        });
	
    }());	
	


    // -------------------------------------------------------------
    // Go to Top
    // -------------------------------------------------------------

    (function () {

		$.scrollUp({
			  scrollText        : '', 
			  topDistance       : '300',
			  animation         : 'fade',
			  animationInSpeed  : 200,
			  animationOutSpeed : 200,
		});	
    }());


	// -------------------------------------------------------------
    // PrettyPhoto
    // -------------------------------------------------------------

    (function () {
	
		jQuery(document).ready(function(){
			jQuery('a[data-gal]').each(function() {
				jQuery(this).attr('rel', jQuery(this).data('gal'));
			});  	
			jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:3000, social_tools:false});
		}); 

    }());


    // =============================================
    //  Dropdown menu
    // =============================================


    (function () {


        var timer;

        $('li.dropdown').on('mouseenter', function (event) {


            event.stopImmediatePropagation();
            event.stopPropagation();

            $(this).removeClass('open menu-animating').addClass('menu-animating');
            var that = this;


            if (timer) {
                clearTimeout(timer);
                timer = null;
            }


            timer = setTimeout(function () {

                $(that).removeClass('menu-animating');
                $(that).addClass('open');

            }, 300);   // 300ms as animation end time


        });

        // on mouse leave

        $('li.dropdown').on('mouseleave', function (event) {

            var that = this;

            $(this).removeClass('open menu-animating').addClass('menu-animating');


            if (timer) {
                clearTimeout(timer);
                timer = null;
            }

            timer = setTimeout(function () {

                $(that).removeClass('menu-animating');
                $(that).removeClass('open');

            }, 300);  // 300ms as animation end time

        });

    }());


    // =============================================
    //  Equal Div Height
    // =============================================


    (function () {

        $('.equal-column').matchHeight();

    }());


});













	





