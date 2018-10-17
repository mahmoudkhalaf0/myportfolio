$(function () {

    "use strict";
    
    /* fixed menu */
    $('.fixed-menu .cont ul li').on('click', function() {

        $(this).addClass('active').siblings().removeClass('active');

        var topx = $(this).data('role');

        $('html, body').animate({

            scrollTop:$(topx).offset().top
 
        }, 1000);

    });

    /* toggle icon */
    $('.fixed-menu .icon i').on('click', function () {

        var menu =  $(this).parent('.icon').parent('.fixed-menu');

        menu.toggleClass('visible');

        if ( menu.hasClass('visible')) {

            menu.animate({left:0}, 1000);

            $('body').animate({paddingLeft:'200PX'}, 1000);

        } else {

            menu.animate({left:'-200px'}, 1000);

            $('body').animate({paddingLeft:'0'}, 1000);
        }
    });

    /* header resize */
    $('.header').height($(window).height());

    /* icon down */
    $('.header .info .down').on( 'click', function () {
        
       $('html, body').animate({

           scrollTop:$('.about').offset().top

       }, 1000);

    });

    /* buttons control */
    $('.control ul li button').click( function () {

       $(this).addClass('active').parent().siblings().find('button').removeClass('active');

       /*$('.control button').removeClass('active');
       $(this).addClass('active');*/
        
        var datavar = $(this).data('class');

        if ( datavar === 'all') {

            $('.work .row > div').show(400);

        } else {

            $('.work .row > div').hide(300);

            $(datavar).parent().show(300);
        }

    }); 

       /* show and hide the icon */
        $(window).scroll(function () {

            var scr = $(window).scrollTop();

            if (scr < 400) {

                $('.scroll').hide(200);

            } else {

                $('.scroll').show(200)
            }
        });

         /*scroll to top */
        $('.scroll i').click( function (e) {

            e.preventDefault()

            $('html, body').animate({

                scrollTop:0

            }, 2000)
        });

        /* nice scroll */
        $('body').niceScroll({ 

            cursorcolor:'#FF6D00',

            cursorborderradius:'0',

            cursorheight:"10px;"
            
        });
    
        /* load screen */
        $(window).on('load', function () {

            $('.spinner').fadeOut(2000, function () {

                $('.load').fadeOut(2000);
                
            });

        });
});