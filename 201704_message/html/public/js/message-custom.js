jQuery(document).ready(function($) {
    $(".search-contact").on('focus blur', function() {
        $(".list-search").toggleClass('focused');
    })
    $(".list-group-item").on('click touch', function () {
        $(".chat-content").addClass("in");
    });
    $(".btn-back").on('click touch', function () {
        $(".chat-content").removeClass("in");
    });
});