//tour-index
$(function() {
  var $messagetour, duration, remaining, tour;
  $messagetour = $("#option-drop");
  tour = new Tour({
    /*onStart: function() {
      return $messagetour.addClass("disabled", true);
    },
    onEnd: function() {
      return $messagetour.removeClass("disabled", true);
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
      element: "#chat-list-t",
      placement: "right",
      title: "聊天室功能",
      content: "聊天列表紀錄一年內往來會員聊天記錄<br><br><a href='http://forum.babyhome.com.tw/topic/4671775' target='_blank'>更多說明</a>"
    },
    {
      element: "#option-drop",
      placement: "bottom",
      title: "訊息名單管理",
      content: "點選可管理名單：加到通訊錄或列為黑名單，範例圖示如下：<br><br><img src='public/img/step-2.png'></img><br><br><a href='http://forum.babyhome.com.tw/topic/4671775' target='_blank'>更多說明</a>"
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
});
