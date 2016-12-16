//tour-index
$(function() {
  var $mboardtour, duration, remaining, tour;
  $mboardtour = $("#profile-option");
  tour = new Tour({
    onStart: function() {
      return $mboardtour.addClass("disabled", true);
    },
    onEnd: function() {
      return $mboardtour.removeClass("disabled", true);
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
      element: "#profile-option",
      placement: "bottom",
      title: "會員設定",
      content: "會員中心、隱私設定<br><a href='L4-thread-post.html' target='_blank'>更多說明</a>"
    },
    {
      element: "#tour-2",
      placement: "left",
      title: "新增話題",
      content: "點選即可快速新增話題<br><a href='L4-thread-post.html' target='_blank'>直接前往</a>"
    },
    {
      element: "#tour-3",
      placement: "bottom",
      title: "自訂最愛專區",
      content: "請點選設定即可自行設定個人化6個常用專區<br><a href='#' target='_blank'>更多說明</a>"
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
