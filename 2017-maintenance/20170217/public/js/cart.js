/* 

 * To change this template, choose Tools | Templates

 * and open the template in the editor.

 */

$(document).ready(function () {

    $("[name=num]").change(function () {

        var aid = $(this).attr('aid');

        var ckey = $(this).attr('ckey');

        var num = $(this).val();
                                   


        //console.log(ckey, num);

        bbh_tracking.url = location.href;

        bbh_tracking.reffer = document.referrer;

        bbh_tracking.bbh_tracking_anchor_type = 'cart_edit';

        bbh_tracking.ec_pid = ckey;

        bbh_tracking.ec_order_number = num;

        bbh_tracking.send();



        $.ajax({

            type: "POST",

            url: '/cart/ajax_cart_edit',

            data: {'aid': aid, 'ckey': ckey, 'num': num},

            dataType: 'json',

            async: true,

            beforeSend: function (xhr) {

                //$('input, select, textarea, button').attr('disabled', 'disabled');

                //$('#venue_list').html('<div class="loading"><img src="/public/img/ajax-loader.gif" alt="Loading"></div>');

            },

            success: function (data) {

                //$('input, select, textarea, button').removeAttr('disabled');

                console.log(data);

                if (data.success == true) {

                    $('#price_' + ckey).text(data.data.sum_price);

                    $('#allprice').text(data.data.allprice);

                    $('#discount_price').text(data.data.discount_price);

                    $('#total_price').text(data.data.total_price);
                    location.reload();

                } else {

                    alert(data.msg);

                    location.reload();

                }

            },

            error: function (data) {

                console.log(data);

            }

        });

    });



    $(".trash_can").click(function () {

        var aid = $(this).attr('aid');

        var ckey = $(this).attr('ckey');

        if (confirm("您確定要從購物車移除此商品?")) {
            /*
            bbh_tracking.url = location.href;
            bbh_tracking.reffer = document.referrer;
            bbh_tracking.bbh_tracking_anchor_type = 'cart_del';
            bbh_tracking.ec_pid = ckey;
            bbh_tracking.send();
            */
            
            $.ajax({

                type: "POST",

                url: '/cart/ajax_cart_del',

                data: {'aid': aid, 'ckey': ckey},

                dataType: 'json',

                async: true,

                beforeSend: function (xhr) {

                    //$('input, select, textarea, button').attr('disabled', 'disabled');

                    //$('#venue_list').html('<div class="loading"><img src="/public/img/ajax-loader.gif" alt="Loading"></div>');

                },

                success: function (data) {

                    //$('input, select, textarea, button').removeAttr('disabled');

                    console.log(data);

                    if (data.success == true) {

                        //location.reload();

                        $('#tr_' + ckey).remove();

                        $('#top_cart_num').text(data.data.cart_num);

                        $('#cart_num').text('( ' + data.data.cart_num + ' )');

                        $('#allprice').text(data.data.allprice);

                        $('#discount_price').text(data.data.discount_price);

                        $('#total_price').text(data.data.total_price);
                        
                        // ga ec remove cart
                        if(typeof(data.product) != "undefined"){
                            ga('ec:addProduct', data.product);
                            ga('ec:setAction', 'remove');
                        }

                    } else {

                        alert(data.msg);

                        location.reload();

                    }

                },

                error: function (data) {

                    console.log(data);

                }

            });

        }

        return false;

    });



    $("#qpoint").click(function () {

        var ckey = $('#q_ckey').val();

        var num = $('#q_num').val();

        //console.log(ckey);

        $.ajax({

            type: "POST",

            url: '/cart/ajax_use_qpoint',

            data: {'ckey': ckey, 'num': num},

            dataType: 'json',

            async: true,

            beforeSend: function (xhr) {

                //$('input, select, textarea, button').attr('disabled', 'disabled');

                //$('#venue_list').html('<div class="loading"><img src="/public/img/ajax-loader.gif" alt="Loading"></div>');

            },

            success: function (data) {

                //$('input, select, textarea, button').removeAttr('disabled');

                //console.log(data);

                if (data.success == true) {

                    //location.reload();



                }

            },

            error: function (data) {

                //console.log(data);

            }

        });

    });



    $("#ecoupon").click(function () {

        var num = $('#ec_num').val();

        var eid = $('#eid').val();

        //console.log(ckey);

        $.ajax({

            type: "POST",

            url: '/cart/ajax_use_ecoupon',

            data: {'num': num, 'eid': eid},

            dataType: 'json',

            async: true,

            beforeSend: function (xhr) {

                //$('input, select, textarea, button').attr('disabled', 'disabled');

                //$('#venue_list').html('<div class="loading"><img src="/public/img/ajax-loader.gif" alt="Loading"></div>');

            },

            success: function (data) {

                //$('input, select, textarea, button').removeAttr('disabled');

                //console.log(data);

                if (data.success == true) {

                    //location.reload();



                }

            },

            error: function (data) {

                //console.log(data);

            }

        });

    });



});



