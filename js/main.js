(function ($) {
"use strict";

	// preloader
	$(window).on('load', function () {
		$('#preloader').delay(350).fadeOut('slow');
		$('body').delay(350).css({ 'overflow': 'visible' });
	})

	// side-bar
	$(".bar").on("click", function () {
		$(".btn-menu-main,.offcanvas-overly").addClass("btn-menu-main-right");
		return false;
	});
	$(".crose,.offcanvas-overly").on("click", function () {
		$(".btn-menu-main,.offcanvas-overly").removeClass("btn-menu-main-right");
	});

	// meanmenu
	jQuery('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	//data background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
	})

	//counterUp
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// slider active
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function(e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function() {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

    // services active
    $('.services-active').slick({
		dots: true,
		arrows: false,
		infinite: false,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}); 

	// brand-active
		$('.brand-active').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		dots:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:3
			},
			992:{
				items:4
			},
			1200:{
				items:5
			}
		}
	})
	
	// testimonial active
	$('.testimonial-item-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-right"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-left"></i></button>',
		fade: true,
		asNavFor: '.testimonial-nav'
	});
	$('.testimonial-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.testimonial-item-active',
		dots: false,
		arrows: false,
		centerMode: true,
		autoplay: false,
		focusOnSelect: true,
		centerPadding: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
		]
	});

  	// blog-post-active
	  $('.gallery-post-active').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			}
		}
	})

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
		enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// isotop
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
		}
		});

	// filter items on button click
		$('.portfolio-menu').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	// niceSelect
	$('select').niceSelect();
	
	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'slide', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

})(jQuery);