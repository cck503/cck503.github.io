
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
    $(".new-feature").click(function() {
        $(this).find('.dot').addClass("stop");
    });
    $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
});


//tour
$(function() {
  var $mboardtour1, duration, remaining, tour;
  $mboardtour1 = $("#demo");
  tour = new Tour({
    onStart: function() {
      return $mboardtour1.addClass("disabled", true);
    },
    onEnd: function() {
      return $mboardtour1.removeClass("disabled", true);
    },
    backdrop: true,
    backdropContainer: 'body',
    backdropPadding: 20,
    debug: true
  });
  duration = 5000;
  remaining = duration;
  tour.addSteps([
    {
      element: "#demo",
      placement: "left",
      title: "新增話題",
      content: "點選即可快速新增話題<br><a href='L4-thread-post.html' target='_blank'>直接前往</a>"
    },
    {
      element: "#usage",
      placement: "bottom",
      title: "自訂最愛專區",
      content: "請點選設定即可自行設定個人化6個常用專區"
    }/**/
  ]);
  tour.init();
  tour.start();
  /*if (tour.ended()) {
    $('<div class="alert alert-info alert-dismissable"><button class="close" data-dismiss="alert" aria-hidden="true">&times;</button>You ended the demo tour. <a href="#" data-demo>Restart the demo tour.</a></div>').prependTo(".content").alert();
  }*/
  $(document).on("click", "[data-demo]", function(e) {
    e.preventDefault();
    if ($(this).hasClass("disabled")) {
      return;
    }
    tour.restart();
    return $(".alert").alert("close");
  });
  /*$("html").smoothScroll();
  return $(".gravatar").each(function() {
    var $this, email;
    $this = $(this);
    email = md5($this.data("email"));
    return $(this).attr("src", "http://www.gravatar.com/avatar/" + email + "?s=60");
  });*/
});
/*$(function() {
  var $mboardtour2, duration, remaining, tour2;
  $mboardtour2 = $("#usage");
  tour2 = new Tour({
    onStart: function() {
      return $mboardtour2.addClass("disabled", true);
    },
    onEnd: function() {
      return $mboardtour2.removeClass("disabled", true);
    },
    backdrop: true,
    backdropContainer: 'body',
    backdropPadding: 20,
    debug: true
  });
  duration = 5000;
  remaining = duration;
  tour2.addSteps([
    {
      element: "#usage",
      placement: "bottom",
      title: "自訂最愛專區",
      content: "請點選設定即可自行設定個人化6個常用專區"
    }
  ]);
  tour2.init();
  tour2.start();
  
  $(document).on("click", "[data-usage]", function(e) {
    e.preventDefault();
    if ($(this).hasClass("disabled")) {
      return;
    }
    tour2.restart();
    return $(".alert").alert("close");
  });
});*/