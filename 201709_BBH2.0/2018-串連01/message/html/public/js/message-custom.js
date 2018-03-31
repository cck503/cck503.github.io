jQuery(document).ready(function($) {
    $(".search-contact").on('focus blur', function() {
        $(".list-search").toggleClass('focused');
    })
    $(".list-group-item").on('click touch', function() {
        $(".chat-content").addClass("in");
    });
    $(".btn-back").on('click touch', function() {
        $(".chat-content").removeClass("in");
    });
    $(".dropback-zone").on('click touch', function() {
        $(".common-nav").removeClass("in");
    });
    
    $(".m-nav-trigger").on('click touch', function() {
        $(".common-nav").addClass("in");
    });
});
$(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function() {
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function() {
        var minRows = this.getAttribute('data-min-rows') | 0,
            rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
        this.rows = minRows + rows;
    });
