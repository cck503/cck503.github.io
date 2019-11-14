$('.input-element input').focusin(function(){
	  $(this).parent().parent().addClass('active');
	});

	$('.input-element input').blur(function(){
	  if(!$(this).val().length > 0) {  
		$(this).parent().parent().removeClass('active');
	  }
	});
$('.input-element label').click(function(){
	  $(this).parent().addClass('active');
	  $(this).parent().find("input").focus();
	});
