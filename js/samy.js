window.onscroll = function() {scrolling()};
var menu = document.getElementById('menu');
var limite = menu.offsetTop;
function	scrolling()
{
	

	if (window.pageYOffset >= limite) {
		menu.classList.add("sticky")
	}

	else
	{
		menu.classList.remove("sticky")
	}
}



