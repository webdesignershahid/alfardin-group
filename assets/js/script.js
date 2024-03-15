(function ($) {
    "use strict";

    /* ============================================================ */
    /* PRELOADER
    /* ============================================================ */
    $(window).on('load', function() {
        $(".preloader").fadeOut();     
    });


    var alfardanGroup   = {

        mobile_expand_menu: function(){
            //=============  Mobile Menu Integration  =============\\
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('menu_active');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('menu_active');
                });

                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("menu_active");
                        $(selector).removeClass("menu_active");
                    }
                });
                // $(".menu_wrapper a").on('click', function() {
                //     $('.menu_wrapper, .menu-overlay').removeClass("sidemenu-open");
                // });
            
            };
            mobile_menu('.navbar-toggler, .close-menu', '.expand_menu, .header__megamenu');  
        },
        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var header = $("header");
            // Add a scroll event listener to the window object
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
            
                if (scrollPosition > 60) {
                    header.addClass('sticky');
                } else {
                    header.removeClass('sticky');
                }
            });
        },


        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {

            // Homepage Signup Side Slider
            let cabinetCarousel = new Swiper ('.evolutionSlider', {
                spaceBetween: 10,
                slidesPerView: 2,
                loop: !1,
                speed: 800,
                autoplay: !1,
                breakpoints: {
                    576: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 6,
                    },
                    1300: {
                        slidesPerView: 7,
                    },
                    1400: {
                        slidesPerView: 8,
                    },
                },
                navigation: {
                    nextEl: ".evolutionSlider .button-next",
                    prevEl: ".evolutionSlider .button-prev",
                },
            });
            // Partner Slider Slider
            let partnerCarousel = new Swiper ('.our-partners .swiper', {
                spaceBetween: 30,
                slidesPerView: 2,
                loop: 1,
                speed: 800,
                autoplay: 1,
                breakpoints: {
                    576: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                    1400: {
                        spaceBetween: 50,
                        slidesPerView: 7,
                    },
                },
            });
            // Blog Slider
            let blogCarousel = new Swiper ('.blog-slider', {
                spaceBetween: 30,
                slidesPerView: 1,
                centeredSlides: true,
                loop: 1,
                speed: 800,
                autoplay: !1,
                slideToClickedSlide: 1,
                breakpoints: {
                    576: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 1.8,
                    },
                    1200: {
                        slidesPerView: 2,
                    },
                    1400: {
                        slidesPerView: 2.2,
                    },
                },
                navigation: {
                    nextEl: ".blog-slider .button-next",
                    prevEl: ".blog-slider .button-prev",
                },
            });
            // Social Slider
            let socialCarousel = new Swiper ('.social-media-slider', {
                spaceBetween: 0,
                slidesPerView: 1,
                centeredSlides: true,
                loop: 1,
                speed: 800,
                autoplay: 1,
                breakpoints: {
                    576: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                },
            });
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append("<a href='#' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='fal fa-angle-double-up'></i></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $scrolltop.on('click', function () {
                $('html, body').animate({
                        scrollTop: 0,
                    },
                    50
                );
                return false;
            });
        },

        initialize: function() {0
			alfardanGroup.mobile_expand_menu();
			alfardanGroup.scroll_to_top();
			alfardanGroup.sticky_header();
			alfardanGroup.swiperCarousel();
		}
    };
    $(function() {
		alfardanGroup  .initialize();
	});



})(jQuery);