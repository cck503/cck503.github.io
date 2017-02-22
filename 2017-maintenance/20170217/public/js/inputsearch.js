$(document).ready(function(){  
	$('.search-field-wrapper').hide();
	$('.navbar-search').click(function() {
		$('.search-field-wrapper').show();
	});


	$('#cart_record_close').click(function(){
        $('#cart_record').remove();
        return false;
    });
});


