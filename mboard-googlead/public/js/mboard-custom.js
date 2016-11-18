
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.tab-back2top');

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
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
    /**/$('.drop-style .dropdown').hover(function() {
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
});