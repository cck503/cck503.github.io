$('.hover-drop.dropdown').hover(function() {
    $(this).find('.pre-act').addClass("active");
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(100);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(100);
    $(this).find('.pre-act').removeClass("active");
});
jQuery(document).ready(function($) {
    $(".search-contact").on('focus blur', function() {
        $(".list-search").toggleClass('focused');
    })
});


//Bootstrap carousel swipe
$(".carousel").on("touchstart", function(event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > 5) {
            $(this).carousel('next');
        } else if (Math.floor(xClick - xMove) < -5) {
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function() {
        $(this).off("touchmove");
    });
});


$(document).ready(function() {
    $('.subcategories').click(function() {
        $(this).next(".leftnav-group").addClass("active");
        $(".qa-nav").addClass("active");
    });
    /**/
    $('.qa-nav .backward').click(function() {
        $('.qa-nav').removeClass('active');
        $('.leftnav-group').removeClass('active');
    });
});
