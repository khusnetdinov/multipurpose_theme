/* -----------------------------------------------------------------

 	[Content Structure]

 	01. Helper Functions
 	02. Megamenu
 	03. Vertical / Full Screen Menu
 	03. Fixed Header
 	04. Slider configurations
 	05. Plugins configurations
 		#
 		Stellar, Flickr Feed, Zoom, Raty, Range Slider, Text Rotator,
 		Bootstrap config, Twitter feed, CountTo, MagnificPopup, Sharrre
 		#
 	06. Carousels configurations (owl-carousel)
	07. Website Enhancements and bug fixes
	08. Animations
	09. Portfolio configurations (isotope)
	10. Ajax contact form
	12. Preloader
	13. Window resize

	[Remove]
	01. #shareit
	02. .twitter-feed


------------------------------------------------------------------- */



(function($){
	"use strict";


/* *********************	Helper functions	********************* */


	/* Validate function */
	function validate(data, def) {
		return (data !== undefined) ? data : def;
	}

	var $win = $(window),

		// body
		$body = $('body'),

		// Window width (without scrollbar)
		$windowWidth = $win.width(),

		// Media Query fix (outerWidth -- scrollbar)
		// Media queries width include the scrollbar
		mqWidth = $win.outerWidth(true,true),

		// Detect Mobile Devices
		isMobileDevice = (( navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini|Mobi/i) || (mqWidth < 767) ) ? true : false );

		// detect IE browsers
		var ie = (function(){
		    var rv = 0,
		    	ua = window.navigator.userAgent,
		    	msie = ua.indexOf('MSIE '),
		    	trident = ua.indexOf('Trident/');

		    if (msie > 0) {
		        // IE 10 or older => return version number
		        rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		    } else if (trident > 0) {
		        // IE 11 (or newer) => return version number
		        var rvNum = ua.indexOf('rv:');
		        rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
		    }

		    return ((rv > 0) ? rv : 0);
		}());



/* *********************	Megamenu	********************* */


	var menu = $(".menu"),
		Megamenu = {
			desktopMenu: function() {

				menu.children("li").show(0);
				menu.children(".toggle-menu").hide(0);

				// Mobile touch for tablets > 768px
				if (isMobileDevice) {

					menu.on("click touchstart","a", function(e){

						if ($(this).attr('href') === '#') {
							e.preventDefault();
							e.stopPropagation();
						}

						var $this = $(this),
							$sub = $this.siblings(".submenu, .megamenu");

						$this.parent("li").siblings("li").find(".submenu, .megamenu").stop(true, true).fadeOut(300);

						if ($sub.css("display") === "none") {
							$sub.stop(true, true).fadeIn(300);
						} else {
							$sub.stop(true, true).fadeOut(300);
							$this.siblings(".submenu").find(".submenu").stop(true, true).fadeOut(300);
						}
					});

					$(document).on("click.menu touchstart.menu", function(e){

						if ($(e.target).closest(menu).length === 0) {
							menu.find(".submenu, .megamenu").fadeOut(300);
						}
					});

				// Desktop hover effect
				} else {

					menu.find('li').on({
						"mouseenter": function() {
							$(this).children(".submenu, .megamenu").stop(true, true).fadeIn(300);
						},
						"mouseleave": function() {
							$(this).children(".submenu, .megamenu").stop(true, true).fadeOut(300);
						}
					});
				}
			},
			mobileMenu: function() {

				var $children = menu.children("li"),
					$toggle = menu.children("li.toggle-menu"),
					$notToggle = $children.not("toggle-menu");


				$notToggle.hide(0);
				$toggle.show(0).on("click", function(){

					if ($children.is(":hidden")){
						$children.slideDown(300);
					} else {
						$notToggle.slideUp(300);
						$toggle.show(0);
					}
				});

				// Click (touch) effect
				menu.find("li").not(".toggle-menu").each(function(){

					var $this = $(this);

					if ($this.children(".submenu, .megamenu").length) {

						$this.children("a").on("click", function(e){

							if ($(this).attr('href') === '#') {
								e.preventDefault();
								e.stopPropagation();
							}

							var $sub = $(this).siblings(".submenu, .megamenu");

							if ($sub.hasClass("open")) {
								$sub.slideUp(300).removeClass("open");
							} else {
								$sub.slideDown(300).addClass("open");
							}
						});
					}
				});
			},
			unbindEvents: function() {
				menu.find("li, a").off();
				$(document).off("click.menu touchstart.menu");
				menu.find(".submenu, .megamenu").hide(0);
			}
		}; // END Megamenu object



	if ($windowWidth < 768) {
		Megamenu.mobileMenu();
	} else {
		Megamenu.desktopMenu();
	}




/* *********************	Vertical / Fullscreen Menu	********************* */

	// Vertical / Fullscreen Menu Trigger
	$('#menu-trigger').on("click",function() {

		if ($(this).hasClass('fullscreen-trigger')) {
			$(".fullscreen-menu-wrapper").toggleClass("on");

		} else if ($(this).hasClass("top-menu-trigger")) {
			$(".top-menu-wrapper").toggleClass("on");

		} else {
			$(".vertical-menu-wrapper").toggleClass("on");
			$(".vertical-menu-footer").toggleClass("on");
		}

		$(this).toggleClass("menu-close");
		return false;
	});




/* *********************	Fixed Header	********************* */

	function fixedHeader() {
      	$(".main-header").sticky({
      		topSpacing: 0,
      		className:"menu-fixed"
      	});
	}

	if ( (!$('.static-menu').length) && ($windowWidth > 991) && (!isMobileDevice) ) {
		fixedHeader();
	}



/* *********************	Slider config	********************* */

  if ($('.tp-banner-container').length) {
    if ($('.rs_boxed').length) {
        jQuery('.tp-banner').revolution({
        delay:9000,
        startwidth:1170,
        startheight:550,
        hideThumbs:200,
        fullWidth:"off",
        hideTimerBar:"on",
        spinner:"spinner4",
        navigationStyle:"preview4",
        navigationType:"none",
        onHoverStop:"off",
        shadow:"3"
      });
    }

    if ($('.rs_fullscreen').length) {
      jQuery('.tp-banner').revolution({
        delay:9000,
        startwidth:1170,
        startheight:550,
        hideThumbs:200,
        fullWidth:"off",
        fullScreen:"on",
        spinner:"spinner4",
        navigationStyle:"preview4",
        navigationType:"none",
        onHoverStop:"off",
        hideTimerBar:"on"
      });
    }

    if ($('.rs_fullwidth').length) {
      jQuery('.tp-banner').revolution({
        delay:9000,
        startwidth:1170,
        startheight:550,
        hideThumbs:200,
        fullWidth:"on",
        hideTimerBar:"on",
        spinner:"spinner4",
        navigationStyle:"preview4",
        navigationType:"none",
        onHoverStop:"off"
      });
    }

    $('.tp-banner-container').show();
  }



	if ($('.rs_fullscreen_video').length) {
		jQuery('.tp-banner').revolution({
			delay:9000,
			startwidth:1170,
			startheight:550,
			hideThumbs:10,
			fullWidth:"off",
			fullScreen:"on",
			spinner:"spinner4",
			navigationType:"none",
			hideTimerBar:"on",
			videoloop:"loop"
		});
	}

	if ($('.rs_fullwidth_video').length) {
		jQuery('.tp-banner').revolution({
			delay:9000,
			startwidth:1170,
			startheight:550,
			hideThumbs:200,
			fullWidth:"on",
			spinner:"spinner4",
			navigationType:"none",
			hideTimerBar:"on",
			videoloop:"loop"
		});
	}




/* *********************	Plugins config	********************* */
/* Text Rotator, Stellar, Flickr Feed, Zoom, Raty, Range Slider,
   CountTo, Magnific Popup, Sharrre */



    // Text Rotator
    if ($().textrotator && $(".rotate")) {
	    $(".rotate").textrotator({
			animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
			separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
			speed: 3000 // How many milliseconds until the next word show.
		});
	}


	// Stellar - Parallax backgrounds
	if ( ($(".stellar").length) && $(window).width() > 767 ) {

		$body.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			horizontalOffset: 0,
			responsive: true,
			scrollProperty: 'scroll',
			parallaxElements: false
		});
	}


	// FLickr Feed plugin
	if ( ($(".flickr-feed").length) && $().jflickrfeed ) {

		// Flickr Data
		var flickrData = {
			limit: 6,
	        qstrings: {
	        	// You have to put your flickr ID here
	            id: '52617155@N08'
	        },
	        itemTemplate: '<li><a href="{{link}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
		};

		// Flickr sidebar photos
	    $('#flickr-sidebar').jflickrfeed(flickrData);
	}

	// Zoom plugin configurations
	if (($().zoom) && ($(".zoom").length) && (isMobileDevice === false) ) {
		$(".zoom").zoom();
	}



	// Raty plugin configurations
	if (($().raty) && $(".rating-system").length ) {

		// Rate product
		$(".rating-system.rate-product").raty({
			starOn:"plugins/raty/img/star-on.png",
			starOff:"plugins/raty/img/star-off.png",
			starHalf:"plugins/raty/img/star-half.png",
			cancelOn:"plugins/raty/img/cancel-on.png",
			cancelOff:"plugins/raty/img/cancel-off.png",
			score:4.26,
			number:5
		});

		// Rate review - read only
		$(".rating-system.rate-review").raty({
			starOn:"plugins/raty/img/star-on.png",
			starOff:"plugins/raty/img/star-off.png",
			starHalf:"plugins/raty/img/star-half.png",
			cancelOn:"plugins/raty/img/cancel-on.png",
			cancelOff:".plugins/raty/img/cancel-off.png",
			score:5,
			number:5,
			readOnly:true
		});

	}


	// Range Slider configarations
	if (($().ionRangeSlider) && $(".range-slider").length) {
		$(".range-slider.range-price").ionRangeSlider({
		    min: 0,
		    max: 2000,
		    from:310,
		    to:1400,
		    type: 'double',
		    prefix: "$",
		    maxPostfix: "+",
		    prettify: false,
		    hasGrid: false,
		    onChange:function(obj) {
		    	$(".1s").text(obj.fromNumber);
		    	$(".2s").text(obj.toNumber);
		    }
		});
	}

	// Include CountTo
	if ($('.stats-timer').length) {
		(function(e){function t(e,t){return e.toFixed(t.decimals)}e.fn.countTo=function(t){t=t||{};return e(this).each(function(){function l(){a+=i;u++;c(a);if(typeof n.onUpdate=="function"){n.onUpdate.call(s,a)}if(u>=r){o.removeData("countTo");clearInterval(f.interval);a=n.to;if(typeof n.onComplete=="function"){n.onComplete.call(s,a)}}}function c(e){var t=n.formatter.call(s,e,n);o.text(t)}var n=e.extend({},e.fn.countTo.defaults,{from:e(this).data("from"),to:e(this).data("to"),speed:e(this).data("speed"),refreshInterval:e(this).data("refresh-interval"),decimals:e(this).data("decimals")},t);var r=Math.ceil(n.speed/n.refreshInterval),i=(n.to-n.from)/r;var s=this,o=e(this),u=0,a=n.from,f=o.data("countTo")||{};o.data("countTo",f);if(f.interval){clearInterval(f.interval)}f.interval=setInterval(l,n.refreshInterval);c(a)})};e.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:t,onUpdate:null,onComplete:null}})(jQuery);
	}

	// countTo plugin configarations
	if( ($().countTo) && ($('.stats-timer').length) ) {

		if (isMobileDevice) {
				$('.stats-content').find(".stats-timer").countTo();
		} else {
			// appear init and then countTo
			$(".stats-content").appear(function() {
				$(this).find(".stats-timer").countTo();
			});
		}

	} // END if



	// Magnific-popup configurations ( Gallery Template )
	if (($().magnificPopup) && ($(".init-popup").length) ) {

		// Popup Gallery
		$(".popup-gallery").magnificPopup({
			delegate:"a.init-popup",
			type:'image',
			tLoading: 'Loading image #%curr%...',
          	mainClass: 'mfp-img-mobile',
          	gallery: {
	            enabled: true,
	            navigateByImgClick: true,
	            preload: [0,1],
	            tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
	        },
	        image: {
	            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	            titleSrc: function(item) {
	            	return '<h5 class="title-mfp">' + item.el.attr("title") + '</h5>';
	            }
	        }
		});

		// Popup Image
		$(".image-popup").magnificPopup({
			type:"image",
			closeOnContentClick:true,
			mainClass:"mfp-img-mobile",
			image: {
				tError: '<a href="%url%">The image</a> could not be loaded.',
				titleSrc: function(item) {
	            	return '<h5 class="title-mfp">' + item.el.attr("title") + '</h5>';
	            },
	            verticalFit:true
			}
		});
	}


	// Bootstrap configarations
	// Tooltips
	if ( $().tooltip ) {
		$("[data-toggle='tooltip']").tooltip();
	}
	// Popovers
	if ( $().popover ) {
		$("[data-toggle='popover']").popover();
	}



/* *********************	Carousel config	********************* */


	$win.load(function() {

		if (($().owlCarousel) && ($(".owl-carousel").length)) {

			$(".owl-portfolio").owlCarousel({
				singleItem:true,
				stopOnHover:true,
				navigation:false,
				autoPlay:5500
			});

			$("#owl-shop").owlCarousel({
				singleItem:true,
				stopOnHover:true,
				navigation:true,
				navigationText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
				pagination:false,
				autoPlay:false
			});

			$(".owl-columns5").owlCarousel({
				itemsCustom: [[0,1],[767,3],[991,4],[1199,5]],
				navigation:false,
				pagination:false,
				autoplay:false
			});

			$(".owl-columns4").owlCarousel({
				itemsCustom: [[0,1],[767,2],[991,3],[1199,4]],
				navigation:false,
				pagination:false,
				autoplay:false
			});

			$(".owl-columns3").owlCarousel({
				itemsCustom: [[0,1],[767,2],[991,3]],
				navigation:false,
				pagination:false,
				autoplay:false
			});

			$(".owl-columns2").owlCarousel({
				itemsCustom: [[0,1],[767,1],[991,2]],
				navigation:false,
				pagination:false,
				autoplay:false
			});

		} // END if

	});





/* *********************	Website enhancement & bug fixes	********************* */



	// Back to Top Button
	$body.append($('<div class="back-to-top"><i class="fa fa-angle-up"></i></div>'));

	$win.scroll(function(){
		if ($(this).scrollTop() > 1) {
			$('.back-to-top .fa').css({bottom:"0"});
		} else {
			$('.back-to-top .fa').css({bottom:"-70px"});
		}
	});

	$('.back-to-top .fa').click(function(){
		$('html, body').animate({scrollTop: '0'}, 500);
		return false;
	});



	// Pause or Play Video
	$("#video-button").on("click",function() {
		var $this = $(this),
			video = document.getElementById('video-fullwidth');

		if ($this.hasClass("pause")) {
			video.pause();
			$this.removeClass("pause").addClass("play");

		} else if ($this.hasClass("play")) {
			video.play();
			$this.removeClass("play").addClass("pause");
		}

		return false;
	});

	$("#video-fullwidth").css("height","100%");


	// Set a background overlay for revolution slider videos
	$win.load(function() {
		$(".html5vid").append($("<div class='bg-overlay op4' style='z-index:5'></div>"));
	});

	// Max Height
	function max_height() {
		$(".max_height").each(function() {
			var maxHeight = 0;
			$(this).find(".el_max_height").each(function() {
				if ($(this).height() > maxHeight) {
		            maxHeight = $(this).height();
		        }
			}).height(maxHeight);
		});
	}

	$win.load(function() {
		max_height();
	});




	// Fix column sibling height
	function fixHeight() {
		$(".data-height-fix").each(function() {
			var siblingHeight = $(this).find($(".get-height")).outerHeight();
			$(".set-height").css("height",siblingHeight);
		});
	}

	fixHeight();


	// Notifications
	$("#show_notification").on("click",function() {
		$(".alert-modal").addClass('alert-modal-on');
		return false;
	});

	// Toggles upside-down
	$(".panel-title").on("click","a",function() {
		$(this).find(".fa").toggleClass("upside-down");
	});


	// Body full height
	function setWindowHeight() {
		var windowHeight = $(window).height();
		$(".window-fullheight").css("height",windowHeight);
	}

	setWindowHeight();



	// remove from Cart
	$('.remove-product').click(function () {
        $(this).parent("td").parent("tr").hide();
        return false;
    });



	// Fix height attribute on iframes
	$('iframe').each(function() {
		var $this = $(this);
		$this.css('height', $this.attr('height') + 'px');

	});

	/* Responsive Videos - 16:9 / 4:3 format */
	function rsEmbed() {
		$('.rs-video').each(function() {
			var $this = $(this),
				embedWidth = $this.width(),
				embedHeight = ( $this.hasClass('video-4by3') ? (embedWidth * 0.75) : (embedWidth * 0.5625) );

			$this.css('height', embedHeight + 'px');
		});
	}

	rsEmbed();


	// Fix IE9 placeholder
	if (ie === 9) {
		$.getScript('../plugins/jquery.placeholder.js',function() {
			$('input, textarea').placeholder();
		});
	}




/* *********************	Animations	********************* */

	// Animations
	if ( ($().appear) && (isMobileDevice === false) ) {

		$('.animated').appear(function () {
			var $this = $(this);

			$this.each(function () {

				var animation = $this.data('animation'),
					delay = ($this.data('delay') + 'ms'),
					speed= ($this.data('speed') + 'ms');

				$this.addClass('on').addClass(animation).css({
					'-moz-animation-delay':delay,
					'-webkit-animation-delay':delay,
					'animation-delay':delay,
					'-webkit-animation-duration':speed,
					'animation-duration':speed
				});

			});
		}, {accX: 50, accY: -150});

	} else {

		$('.animated').removeClass("animated");
	}


	// Progress bars animations
	$(".progress").each(function() {

		var $this = $(this);

		if (($().appear) && (isMobileDevice === false) && ($this.hasClass("no-anim") === false) ) {

			$this.appear(function () {

					var $bar = $this.find(".progress-bar");
					$bar.addClass("progress-bar-animate").css("width", $bar.attr("data-percentage") + "%");


			}, {accY: -150} );

		} else {

			var $bar = $this.find(".progress-bar");
			$bar.css("width", $bar.attr("data-percentage") + "%");
		}
	});




/* *********************	Portfolio config (Isotope)	********************* */


	if ( $().isotope && $('#portfolio-isotope').length) {

		var $portfolio = $('.portfolio'),
			$layout = ( $(".portfolio-fit-row").length ? "fitRows" : "masonry");

		if (ie) {

			var portfolioRow = $("#portfolio-isotope").find(".row");
			var $gutter = 30;

			if (portfolioRow.hasClass("col-p5")) {
				$gutter = 10;
			} else if (portfolioRow.hasClass("col-p10")) {
				$gutter = 20;
			} else if (portfolioRow.hasClass("col-p20")) {
				$gutter = 40;
			} else if (portfolioRow.hasClass("col-p30")) {
				$gutter = 60;
			} else if (portfolioRow.hasClass("col-p0")) {
				$gutter = 0;
			}

			if ($layout === "fitRows") {
				$gutter = 30;
			}


			var $item = $portfolio.find('.el'),
				itemWidth = $item.outerWidth(true) - $gutter;

			portfolioRow.css({"margin-left":0});

			(function() {

				function fixGrid() {
					$item.each(function() {
						$item.css({
							'width': itemWidth + 'px',
							'padding-left':0,
							'padding-right':0
						});
					});
				}
				fixGrid();

				$win.resize(function() {
					fixGrid();
				});

			})();

			$portfolio.isotope({
				itemSelector:'.el',
				filter: '*',
				layoutMode: "masonry",
				transitionDuration:'0.6s',
				masonry: {
					columnWidth:'.el',
					gutter:$gutter
				}
			});

		} else {

			$portfolio.imagesLoaded(function() {
				$portfolio.isotope({
					itemSelector:'.el',
					filter: '*',
					layoutMode: $layout,
					transitionDuration:'0.6s',
					masonry: {
						columnWidth:'.el'
					}
				});
			});
		}


		// Filter links
		$('.portfolio-filter > ul > li > a').on('click', function() {

			var $this = $(this),
				fv = $this.attr('data-filter');

			$portfolio.isotope({ filter: fv });

			$('.portfolio-filter > ul > li > a').removeClass('active');
			$this.addClass('active');

			return false;
		});

	} // END if




/* *********************	Ajax Contact Form	 ********************* */


	if ($('.ajax-contact-form').length ) {

		var form = {

			init: false,

			initialize: function() {

				// if form is already initialized, skip
				if (this.init) {
					return;
				}
				this.init = true;


				var $form = $(".ajax-contact-form");

				$form.validate({
					submitHandler: function(form) {

						// Loading Button
						var btn = $(this.submitButton);
						btn.button("loading");

						// Ajax Submit
						$.ajax({
							type: "POST",
							url: $form.attr("action"),
							data: {
								"val_fname": $form.find("#val_fname").val(),
								"val_lname": $form.find("#val_lname").val(),
								"g-recaptcha-response": $form.find('#g-recaptcha-response').val(),
								"val_email": $form.find("#val_email").val(),
								"val_subject":$form.find("#val_subject").val(),
								"val_message": $form.find("#val_message").val()
							},
							dataType: "json",
							success: function(data) {

								var $success = $form.find("#contact-success"),
									$error = $form.find("#contact-error");

								if (data.response == "success") {

									$success.removeClass("hidden");
									$error.addClass("hidden");

									// Reset Form
									$form.find(".form-control")
										.val("")
										.blur()
										.parent()
										.removeClass("has-success")
										.removeClass("has-error")
										.find("label.error")
										.remove();


								} else {

									$error.removeClass("hidden");
									$success.addClass("hidden");
								}
							},
							complete: function () {
								btn.button("reset");
							}
						});
					},
					rules: {
						val_fname: {
							required: false
						},
						val_lname: {
							required: false
						},
						val_email: {
							required: true,
							email: true
						},
						val_subject: {
							required: true
						},
						val_message: {
							required: true
						}
					},
					messages: {
						val_email: {
							required:"<span class='form-message-error'>Please enter your email address!</span>",
							email:"<span class='form-message-error'>Please enter a valid email address!</span>"
						},
						val_subject: {
							required:"<span class='form-message-error'>This field is required!</span>"
						},
						val_message: {
							required: "<span class='form-message-error'>This field is required!</span>"
						}
					},
					highlight: function (element) {
						$(element)
							.parent()
							.removeClass("has-success")
							.addClass("has-error");
					},
					success: function (element) {
						$(element)
							.parent()
							.removeClass("has-error")
							.addClass("has-success")
							.find("label.error")
							.remove();
					}
				});


			} // END initialize

		}; // END form object

		form.initialize();

	}




/* *********************	Preloader	********************* */


	//$win.load(function(){
   // var fadeTime = 100;
   // var $preloader =  $("#preloader");
  //
	//	if ($preloader.length) {
  //
	//		$('#status').fadeOut();
   //   $preloader.delay(fadeTime).fadeOut('slow');
	//		$body.delay(fadeTime).css({'overflow':'visible'});
  //
	//	} // END if
  //
  //
	//}); // END Window Load




/* *********************	Window Resize	********************* */


	var globalResizeTimer = null;
	$(window).on("resize",function() {
	    if(globalResizeTimer !== null) {
	    	 window.clearTimeout(globalResizeTimer);
	    }
	    globalResizeTimer = window.setTimeout(function() {


			var mqWidth = $win.outerWidth(true,true),

				newWidth = $win.width(),

				isMobileDevice = (( navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Opera Mini|Mobi/i) || (mqWidth < 767) ) ? true : false );


			if ($windowWidth <= 767 && newWidth > 767) {
				Megamenu.unbindEvents();
				Megamenu.desktopMenu();
			}

			if ($windowWidth > 767 && newWidth <= 767) {
				Megamenu.unbindEvents();
				Megamenu.mobileMenu();
			}

			$windowWidth = newWidth;

			// Responsive videos
			rsEmbed();

			// Set Window Height
			setWindowHeight();

			// Set the same height to siblings (just 2)
			fixHeight();

			// Set the maximum height of multiple siblings
			max_height();


			if (mqWidth < 991) {
				$(".main-header").unstick();
				$(".sticky-wrapper").css("height","auto");
			} else {
				fixedHeader();
				$(".sticky-wrapper").css("height","76px");
			}

	    }, 400);
	});


})(jQuery);
/* END Document ready */
