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
      element: "#tour-1",
      placement: "left",
      title: "資料區間選擇",
      content: "快速回應、分享、訂閱<br><a href='L4-thread-post.html' target='_blank'>更多說明</a>"
    },
    {
      element: "#tour-2",
      placement: "right",
      title: "關注其他會員",
      content: "點選大頭貼下方的關注功能，即可追蹤該會員動態<br><a href='L4-thread-post.html' target='_blank'>更多說明</a>"
    },
    {
      element: "#tour-3",
      placement: "bottom",
      title: "只看板主",
      content: "點選icon，即可只觀看版主的回應<br><a href='L4-thread-post.html' target='_blank'>更多說明</a>"
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
