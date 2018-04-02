(function () {

	window.update = function update() {
		var length = [].slice.call(document.getElementsByClassName('cart-item')).length || 0;
		document.getElementById('items-count').innerHTML = length;
	}

	window.cart = document.getElementById('cart');

	[].slice.call(document.getElementsByClassName('add')).forEach(function (btn) {
		btn.addEventListener('click', function () {
			cart.innerHTML += '<div class="border row cart-item"><img src="product.png" class="col" /><p class="col" style="flex:0 65%">Product xyz (' + btn.dataset.price + ')</p><span class="col tag" onclick="this.parentNode.style.display=\'none\';this.parentNode.classList.remove(\'cart-item\');update();">&times</span></div>';
			update();
		});
	});

	document.getElementById('open-cart').onclick = function () {
		if (cart.classList.contains('hide')) {
			cart.classList.remove('hide');
		} else {
			cart.classList.add('hide');
		}
	}

}());