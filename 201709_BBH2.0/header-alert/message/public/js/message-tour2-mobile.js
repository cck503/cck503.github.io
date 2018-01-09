//tour2-index
$(function() {
  var $messagetour2, duration, remaining, tour2;
  $messagetour2 = $("#option-drop");
  duration = 5000;
  remaining = duration;
  tour2 = new Tour2({
    onStart: function() {
      return $messagetour2.addClass("disabled", true);
    },
    onEnd: function() {
      return $messagetour2.removeClass("disabled", true);
    },
    backdrop: true,
    backdropContainer: 'body',
    backdropPadding: 20,
    debug: true
  });
  
  tour2.addSteps([
    {
      element: "#option-drop",
      placement: "bottom",
      title: "會員資訊",
      content: "點選可管理名單：加到通訊錄或列為黑名單，範例圖示如下：<br><br><img src='public/img/step-4.png'></img><br><br><a href='http://forum.babyhome.com.tw/topic/4671775' target='_blank'>更多說明</a>"
    }
  ]);
  tour2.init();
  //tour2.start();
  /*if (tour2.ended()) {
    $('<div class="alert alert-info alert-dismissable"><button class="close" data-dismiss="alert" aria-hidden="true">&times;</button>You ended the demo tour2. <a href="#" data-demo2>Restart the demo tour2.</a></div>').prependTo(".content").alert();
  }*/
  $(document).on("click", "[data-demo2]", function(e) {
    e.preventDefault();
    if ($(this).hasClass("disabled")) {
      return;
    }
    tour2.restart();
    return $(".alert").alert("close");
  });
});
