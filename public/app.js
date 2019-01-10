function something()
{
	var x = window.localStorage.getItem('bbb');//equal: x = hh['bbb']

	x = x * 1 + 1; //string to int and +1

	window.localStorage.setItem('bbb', x);//hh['bbb'] = x

	alert(x);
}

function add_to_cart(id)
{
	alert('You added pizza with id = ' + id);
}