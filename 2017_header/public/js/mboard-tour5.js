//tour-index
$(function() {
  var $mboardtour, duration, remaining, tour;
  $mboardtour = $("#setup-custom");
  tour = new Tour({
    /*onStart: function() {
      return $mboardtour.addClass("disabled", true);
    },
    onEnd: function() {
      return $mboardtour.removeClass("disabled", true);
    },*/
    backdrop: true,
    backdropContainer: 'body',
    backdropPadding: 20,
    debug: true
  });
  duration = 5000;
  remaining = duration;
  tour.addSteps([
    {
      element: "#setup-custom",
      placement: "bottom",
      title: "自訂最愛專區",
      content: "點選編輯，即可重新選擇最愛專區"
    }
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
