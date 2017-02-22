/*
	Enhanced Ecommerce - Web Tracking (analytics.js)
 */
var ga_ec = ga_ec || {};

if(typeof(ga_ec.action) != "undefined"){
	switch(ga_ec.action){
		case 'addImpression':
			if(typeof(ga_ec.product) != 'undefined'){
				ga('ec:addProduct', ga_ec.product);
				ga('ec:addImpression', ga_ec.product);
				ga('ec:setAction', 'detail');

				fbq('track', 'ViewContent');
			}
		break;
        case 'checkout':
			// 訂單成交
			if(typeof(ga_ec.product) != 'undefined'){
				for(var i in ga_ec.product){
					ga('ec:addProduct', ga_ec.product[i]);
				}
				ga('ec:setAction','checkout', {
					'step': 1
				});
                
                //ga('send', 'event', 'cart', 'checkout', 1);

                fbq('track', 'InitiateCheckout');
			}
		break;
        case 'checkout2':
			// 訂單成交
			if(typeof(ga_ec.product) != 'undefined'){
				for(var i in ga_ec.product){
					ga('ec:addProduct', ga_ec.product[i]);
				}
				ga('ec:setAction','checkout', {
					'step': 2
				});            
			}
		break;
		case 'purchase':
			// 訂單成交
			if(typeof(ga_ec.product) != 'undefined'){
				for(var i in ga_ec.product){
					ga('ec:addProduct', ga_ec.product[i]);
				}

				if(typeof(ga_ec.order) != 'undefined'){
					ga('ec:setAction', 'purchase', ga_ec.order);

					fbq('track', 'Purchase', {value:ga_ec.order.revenue, currency:'TWD'});
				}
			}
		break;
	}
}


$(document).ready(function () {
	// add to cart
	$("#add_cart").click(function () {
		if(typeof(ga_ec.product) != 'undefined'){
			ga('ec:addProduct', ga_ec.product);
			ga('ec:setAction', 'add');
            ga('send', 'event', 'detail view', 'add', ga_ec.product.id);

            fbq('track', 'AddToCart');
		}
	});
});