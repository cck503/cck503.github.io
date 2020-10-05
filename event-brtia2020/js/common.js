// Full screen Overlay Navigation
function openNav() {
    $('#mobileNav').css('height', '100%');
    $('.nav-icon').toggleClass('open');
}
function closeNav() {
    $('#mobileNav').css('height', '0%');
    $('.nav-icon').toggleClass('open');

}
$(document).ready(function () {
    // 畫面進入才執行動畫
    $('.aniview').AniView();
    // 取消連結外框線
    $("a").focus(function () {
        $(this).blur();
    });
    // 取消顯示ID
    $('a').smoothScroll();

    // 指定畫面滑動
    $('.top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $('.t1').click(function () {
        $('html,body').animate({
            scrollTop: $('#productList-1').offset().top
        }, 800);
    });
    $('.t2').click(function () {
        $('html,body').animate({
            scrollTop: $('#productList-2').offset().top
        }, 800);
    });
    $('.t3').click(function () {
        $('html,body').animate({
            scrollTop: $('#productList-3').offset().top
        }, 800);
    });
    $('.t4').click(function () {
        $('html,body').animate({
            scrollTop: $('#productList-4').offset().top
        }, 800);
    });
    $('.t5').click(function () {
        $('html,body').animate({
            scrollTop: $('#productList-5').offset().top
        }, 800);
    });
});

// 右邊浮動選單
$(window).load(function () {
    var $win = $(window),
        $ad = $('.sidebarBox').css('opacity', 0).show(),
        _width = $ad.width(),
        _height = $ad.height(),
        _diffY = 100,
        _diffX = 10, // 距離右及上方邊距
        _moveSpeed = 800; // 移動的速度

    $ad.css({
        top: _diffY,
        left: $win.width() - _width - _diffX,
        opacity: 1
    });
    $win.bind('scroll resize', function () {
        var $this = $(this);
        $ad.stop().animate({
            top: $this.scrollTop() + _diffY,
            left: $this.scrollLeft() + $this.width() - _width - _diffX
        }, _moveSpeed);
    }).scroll();
});