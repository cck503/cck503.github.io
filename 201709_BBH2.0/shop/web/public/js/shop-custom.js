jQuery(document).ready(function($) {
    
    $('.drop-style .dropdown').hover(function() {
        $(this).find('.pre-act').addClass("active");
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
        $(this).find('.pre-act').removeClass("active");
    });

});
