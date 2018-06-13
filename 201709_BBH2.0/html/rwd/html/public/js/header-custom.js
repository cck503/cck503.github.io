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

//search
$(document).ready(function() { 
    $(".search-glass").click(function(){
        $(this).toggleClass('toggle');
    });
    $(".search-span .form-control").on('focus blur', function() {
        $(".search-span").toggleClass('focused');
    }) 
});