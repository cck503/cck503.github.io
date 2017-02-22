/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {

	$("#subscribe").click(function() {
		subscribe(1);
	});

	$('#cancel_subscribe').click(function() {
		subscribe(2);
	});

});

function subscribe(type) {
	$.ajax({
		type: "POST",
		url: '/ajax/ajax_edm_subscrib',
		data: {'type': type},
		dataType: 'json',
		async: true,
		beforeSend: function(xhr) {
			//$('input, select, textarea, button').attr('disabled', 'disabled');
			//$('#venue_list').html('<div class="loading"><img src="/public/img/ajax-loader.gif" alt="Loading"></div>');
		},
		success: function(data) {
			//$('input, select, textarea, button').removeAttr('disabled');
			alert(data.msg);
			location.reload();
		},
		error: function(data) {
			//console.log(data);
		}
	});
}
