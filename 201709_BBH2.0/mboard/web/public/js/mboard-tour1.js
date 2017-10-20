//tour-index
$(function() {
  var $mboardtour, duration, remaining, tour;
  $mboardtour = $("#profile-option");
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
      element: "#profile-option",
      placement: "bottom",
      title: "會員資訊",
      content: "可即時查找草稿、(發表/回應/訂閱)話題及會員中心內容，並可快速設定隱私功能。"
    },
    {
      element: "#new-topic",
      placement: "left",
      title: "新增話題",
      content: "點選即可快速新增話題<br><a href='L4-thread-post.html' target='_blank'>直接前往</a>"
    },
    {
      element: "#setup-favorite",
      placement: "bottom",
      title: "自訂最愛專區",
      content: "點選設定即可自行選擇個人化6個常用專區，需變更最愛專區，請至編輯功能(參閱更多說明)修改<br><a href='http://forum.babyhome.com.tw/topic/4671775' target='_blank'>更多說明</a>"
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
