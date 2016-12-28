//tour-index
$(function() {
  var $mboardtour, duration, remaining, tour;
  $mboardtour = $("#selector-block");
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
      element: "#selector-block",
      placement: "right",
      title: "選擇發表分區",
      content: "可重新選擇話題要發表的分區"
    },
    {
      element: "#draft-option",
      placement: "left",
      title: "草稿儲存功能",
      content: "當您新增或回應話題時，若尚未需要送出，可點選儲存草稿功能<br><a href='#' target='_blank'>更多說明</a>"
    },
    {
      element: "#anonymous-option",
      placement: "right",
      title: "匿名功能",
      content: "為保護會員發文隱私，完成手機認證即可於特定區域使用匿名發言功能。<br><a href='#' target='_blank'>更多說明</a>"
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
