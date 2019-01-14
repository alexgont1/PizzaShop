function something()
{

	var x = window.localStorage.getItem('bbb');//equal: x = hh['bbb']

	x = x * 1 + 1; //string to int and +1

	window.localStorage.setItem('bbb', x);//hh['bbb'] = x

	alert(x);
}

function add_to_cart(id)
{	
	var key = 'product_' + id

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1; // 1 button [Add to cart] click
	window.localStorage.setItem(key, x);//new hash value

	update_orders_input();
	update_orders_button();
}

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function update_orders_button()
{
	var text = 'Cart (' + order_items_amount() + ')';
	$('#orders_button').val(text);
} 

function order_items_amount()
{
	var total = 0;
	for (var i = 0; i < localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);

		if(key.indexOf('product_') == 0)
		{
			total = total + value * 1;
		}    	
	}
	// alert("Pizzas in your cart: " + total);
	return total;
}

function cart_get_orders()
{
	var orders = '';

	for (var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);

		if(key.indexOf('product_') == 0)
		{
			orders = orders + key + '=' + value + ',';
		}
	}

	return orders;
}

function cancel_order()
{
	window.localStorage.clear();
	
	update_orders_input();
	update_orders_button();

	$('#cart').text('Your cart is empty now.')

	return false;
}