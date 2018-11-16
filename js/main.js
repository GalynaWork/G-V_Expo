    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            dots:true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: false,
                    dots:true,
                    loop: true,

                }
            }
        });



        $('.faq__dt_a').on('click', function () {
            if ($(this).find('.faq__link').hasClass('open')){
                $(this).find('.faq__link').removeClass('open').parents('dt').next('dd').hide();
            } else {
                $('.faq__link.open').removeClass('open').parents('dt').next('dd').slideUp();
                $(this).find('.faq__link').addClass('open').parents('dt').next('dd').show();
            }
        });

        $('.atificial-intelligence__popup_close').on('click', function () {
            $('.atificial-intelligence__popup').hide();
        });

//scroll
         $('#how_works').click(function (){

            $('html, body').animate({
              scrollTop: $(".how_it_works").offset().top
            }, 1000);
            $('.full_menu').removeClass('open');
          });
        $('.roadmap_click').click(function (){

            $('html, body').animate({
                scrollTop: $(".roadmap").offset().top
            }, 1000);
            $('.full_menu').removeClass('open');
        });
        $('.ourapp_click').click(function (){

            $('html, body').animate({
                scrollTop: $(".our_app").offset().top
            }, 1000);
            $('.full_menu').removeClass('open');
        });
        $('.team_click').click(function (){

            $('html, body').animate({
            scrollTop: $(".team").offset().top
        }, 1000);
            $('.full_menu').removeClass('open');
    });
        $('.faq_click').click(function (){

            $('html, body').animate({
                scrollTop: $(".faq").offset().top
            }, 1000);
            $('.full_menu').removeClass('open');
        });



        $('.scroll').click(function (){

            $('html, body').animate({
                scrollTop: $(".how_it_works").offset().top
            }, 1000)
        });
        $('.hamburger').on('click', function () {
            $('.full_menu').addClass('open');
        });
        $( '#close').on("click", function(){
            $('.full_menu').removeClass('open');
        });



});