$(document).ready(function() {
	//use ecoupon
	$("[name=ec_option]").change(function() {
		ec_option = $(this).val();
		eid = $("[name=eid]").val();
		
		//limit_price = $("[name=limit_price]").val();
		$.ajax({
			type: "POST",
			url: "/cart/ajax_use_ecoupon",
			data: {'eid': eid, 'num': ec_option},
			dataType: "json"
		})
		.done(function(data) {
			if (data.success) {
				$("#total_price").text(data.data.total_price);
				$('#discount_price').text(data.data.discount_price);
				$("#allprice").text(data.data.allprice);

				$("#num_qpoint").text(data.data.num_qpoint);
				$("#num_thousand_price").text(data.data.num_thousand_price);
				$("#num_share_price").text(data.data.num_share_price);

				//把qpoint的值選到0
				$.each($("[name=qp_num]"), function(index, element) {
					$(this).val(0);
				});
				$("[name=ec_all_option]").val(0);
				$("[name=share_ec_option]").val(0);
			} else {
				alert(data.msg);
			}
		})
		.fail(function(data) {
			alert("error");
		});
	});
	
	$("[name=ec_all_option]").change(function() {
		ec_option = $(this).val();
		eid = $("[name=all_eid]").val();
		//limit_price = $("[name=limit_price]").val();
		$.ajax({
			type: "POST",
			url: "/cart/ajax_use_ecoupon",
			data: {'eid': eid, 'num': ec_option},
			dataType: "json"
		})
				.done(function(data) {
			if (data.success) {
				$("#total_price").text(data.data.total_price);
				$('#discount_price').text(data.data.discount_price);
				$("#allprice").text(data.data.allprice);

				$("#num_qpoint").text(data.data.num_qpoint);
				$("#num_thousand_price").text(data.data.num_thousand_price);
				$("#num_share_price").text(data.data.num_share_price);

				//把qpoint的值選到0
				$.each($("[name=qp_num]"), function(index, element) {
					$(this).val(0);
				});
				$("[name=ec_option]").val(0);
				$("[name=share_ec_option]").val(0);
			} else {
				alert(data.msg);
			}
		})
				.fail(function(data) {
			alert("error");
		});
	});
	
	$("[name=share_ec_option]").change(function() {
		ec_option = $(this).val();
		eid = $("[name=share_eid]").val();
		$.ajax({
			type: "POST",
			url: "/cart/ajax_use_ecoupon",
			data: {'eid': eid, 'num': ec_option},
			dataType: "json"
		})
		.done(function(data) {
			if (data.success) {
				$("#total_price").text(data.data.total_price);
				$('#discount_price').text(data.data.discount_price);
				$("#allprice").text(data.data.allprice);

				$("#num_qpoint").text(data.data.num_qpoint);
				$("#num_thousand_price").text(data.data.num_thousand_price);
				$("#num_share_price").text(data.data.num_share_price);

				//把qpoint的值選到0
				$.each($("[name=qp_num]"), function(index, element) {
					$(this).val(0);
				});
				$("[name=ec_option]").val(0);
				$("[name=ec_all_option]").val(0);
			} else {
				alert(data.msg);
			}
		})
		.fail(function(data) {
			alert("error");
		});
	});

	//use qpoint
	$('[name=qp_num]').change(function() {
        if ($(this).prop('checked')){
		  num = $(this).val();
        }else {
          num = 0;
        }
        
		ckey = $(this).attr('rel');
		qpoint_select = $(this);
		$.ajax({
			type: "POST",
			url: "/cart/ajax_use_qpoint",
			data: {'num': num, 'ckey': ckey},
			dataType: "json"
		})
				.done(function(data) {
			if (data.success) {
				$("#total_price").text(data.data.total_price);
				$('#discount_price').text(data.data.discount_price);
				$("#allprice").text(data.data.allprice);

				$("#num_qpoint").text(data.data.num_qpoint);
				$("#num_thousand_price").text(data.data.num_thousand_price);
				$("#num_share_price").text(data.data.num_share_price);

				//把ecoupon的值選到0
				$("[name=share_ec_option]").val(0);
				$("[name=ec_option]").val(0);
			} else {
				alert(data.msg);
			}
		})
	   .fail(function(data) {
            console.log(data);
			alert("error");
		});
	});
	
	//use cycle
	$("[name=ec_cycle_option]").change(function() {
		eid = $(this).val();
		$.ajax({
			type: "POST",
			url: "/cart/ajax_use_cycle",
			data: {'eid': eid},
			dataType: "json"
		})
		.done(function(data) {
			if (data.success) {
				$("#total_price").text(data.data.total_price);
				$('#discount_price').text(data.data.discount_price);
				$("#allprice").text(data.data.allprice);

				$("#num_qpoint").text(data.data.num_qpoint);
				$("#num_thousand_price").text(data.data.num_thousand_price);
				$("#num_share_price").text(data.data.num_share_price);
			} else {
				alert(data.msg);
			}
		})
		.fail(function(data) {
			//console.log(data);
			alert("error");
		});
	});
	
	checkDiscountType();
	//discount
	$("[name=discount_type]").change(checkDiscountType);
});

function checkDiscountType() {
	type = $("[name=discount_type]:checked").val();

	if (type == 'q') {
		$("[name=ec_option]").prop("disabled", true);
		$("[name=qp_num]").prop("disabled", false);
		$("[name=ec_all_option]").prop("disabled", true);
		$("[name=share_ec_option]").prop("disabled", true);
	} else if (type == 'ec') {
		$("[name=qp_num]").prop("disabled", true);
		$("[name=ec_option]").prop("disabled", false);
		$("[name=ec_all_option]").prop("disabled", true);
		$("[name=share_ec_option]").prop("disabled", true);
	} else if (type == 'ec_all') {
		$("[name=qp_num]").prop("disabled", true);
		$("[name=ec_option]").prop("disabled", true);
		$("[name=ec_all_option]").prop("disabled", false);
		$("[name=share_ec_option]").prop("disabled", true);
	} else if (type == 'share_ec') {
		$("[name=qp_num]").prop("disabled", true);
		$("[name=ec_option]").prop("disabled", true);
		$("[name=ec_all_option]").prop("disabled", true);
		$("[name=share_ec_option]").prop("disabled", false);
	} else {
		$("[name=qp_num]").prop("disabled", true);
		$("[name=ec_option]").prop("disabled", true);
		$("[name=ec_all_option]").prop("disabled", true);
		$("[name=share_ec_option]").prop("disabled", true);
	}
}