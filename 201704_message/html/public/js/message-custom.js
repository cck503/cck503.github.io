jQuery(document).ready(function($) {

    $(".search-contact").on('focus blur', function() {
        $(".list-search").toggleClass('focused');
    })

});
