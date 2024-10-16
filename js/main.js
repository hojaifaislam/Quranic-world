(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();
        
        $('.fixed_col').isotope({
        // options
            itemSelector: '.review_col',
        });
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });
        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });
        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .menu_wrapp').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        //10. Client Slider Initialize
            $('.owl-carousel.slider1').owlCarousel({
                loop: true,
                margin:40,
                items: 3,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                nav: false,
                dots: false,
                navText:[
                '<i class="fal fa-long-arrow-left"></i>',
                '<i class="fal fa-long-arrow-right"></i>'],
                responsive: {
                    0: {
                        items: 2
                    },
                    390: {
                        items: 2
                    },
                    575:{
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 3
                    }
                }
            });
            $('.owl-carousel.slider2').owlCarousel({
                loop: true,
                margin: 5,
                items: 4,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                nav: false,
                dots: false,
                navText:[
                '<i class="fal fa-long-arrow-left"></i>',
                '<i class="fal fa-long-arrow-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    390: {
                        items: 2
                    },
                    575:{
                        items: 2
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 4
                    }
                }
            });
        $('.owl-carousel.slider3').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            dots: false,
            nav: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: [
                '<img src="img/arrow_left.svg" alt="">',
                '<img src="img/arrow_right.svg" alt="">'
            ],
            // smartSpeed:3000,
        });
        // nice select
        $('select').niceSelect();


        $('.proje_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },        
        });
        //11. Video Popup Initialize
        function videoPopupInit() {
            $('#play-video').magnificPopup({
                type: 'iframe',
                iframe: {
                    patterns: {
                        youtube: {
                          index: 'youtube.com/', 

                          id: 'v=',
                          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                        },
                    },

                  srcAction: 'iframe_src',
                }
            });
        }
        videoPopupInit();
    });

})(jQuery);


function loading() {
    document.querySelectorAll(".bar").forEach(function(current) {
      let startWidth = 0;
      const endWidth = current.dataset.size;
      
      /* 
      setInterval() time sholud be set as trasition time / 100. 
      In our case, 2 seconds / 100 = 20 milliseconds. 
      */
      const interval = setInterval(frame, 20);
  
      function frame() {
        if (startWidth >= endWidth) {
          clearInterval(interval);
        } else {
            startWidth++;
            current.style.width = `${endWidth}%`;
            current.firstElementChild.innerText = `${startWidth}%`;
          }
       }
    });
  }
  
  setTimeout(loading, 1000);