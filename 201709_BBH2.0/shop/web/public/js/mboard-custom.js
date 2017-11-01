jQuery(document).ready(function($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.tab-back2top');

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    //
    $('#user-Affix').affix({
        offset: {
            top: 136,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })
    $('#nav-Affix').affix({
        offset: {
            top: 136,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })
    $('#rapidTop-Affix').affix({
            offset: {
                top: 500,
                bottom: function() {
                    return (this.bottom = $('.footer').outerHeight(true))
                }
            }
        })
        /**/
    $('.drop-style .dropdown').hover(function() {
        $(this).find('.pre-act').addClass("active");
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
        $(this).find('.pre-act').removeClass("active");
    });
    $(".other-opinion").click(function() {
        $(".txt-span.fade").addClass("in");
    });
    $(".opinion").click(function() {
        $(".txt-span.fade.in").removeClass("in");
    });
    /*$(".new-feature").click(function() {
        $(this).find('.dot').addClass("stop");
    });*/
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('#sp-cloud-affix').affix({
        offset: {
            top: 136,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })

});


// Add no-touch class to body for mobile touch events and toggle hover class on elements that need it
if ("ontouchstart" in document.documentElement) {
    document.documentElement.className += " touch";
}

// Add and remove no-hover class to <li>'s for mobile hover events
jQuery('.touch .closeup-span').each(function() {
    var div = jQuery(this);

    div.hover(function() {
        div.removeClass('no-hover');
    });

    jQuery('*').not(div).bind('click', function() {
        div.addClass('no-hover');
    });

});

/*
var iScrollPos = 0;
$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        //Scrolling Down
    } else {
       //Scrolling Up
    }
    iScrollPos = iCurScrollPos;
});
*/