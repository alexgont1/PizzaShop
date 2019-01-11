function something()
{
	var x = window.localStorage.getItem('bbb');//equal: x = hh['bbb']

	x = x * 1 + 1; //string to int and +1

	window.localStorage.setItem('bbb', x);//hh['bbb'] = x

	alert(x);
}

function add_to_cart(id)
{
	//we have only 1 local storage, so to see different
	//variables it's better to add some description to hash,
	//here it's 'product_' before id
	var key = 'product_' + id
	var x = window.localStorage.getItem(key);
	x = x * 1 + 1; // 1 button [Add to cart] click
	window.localStorage.setItem(key, x);//new hash value
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
	alert("Pizzas in your cart: " + total);
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