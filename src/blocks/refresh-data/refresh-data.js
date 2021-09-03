import cart from '../shop-sidebar/shop-sidebar';
import order from '../order/order';

const refreshData = (state) => {
	let currentCity = localStorage.getItem('cityName');
	let catalogData = localStorage.getItem('catalogData');

	citySelectRefresh(currentCity);
	catalogRefresh(catalogData);
	catalogProductRefresh(catalogData);
	cartRefresh();
	orderRefresh();
	// renderPrice();
}

function citySelectRefresh(city) {
	$('.city-select option[value=' + city + ']').prop('selected', true);
	$('.city-select option[value=select_city]').remove();
}


// function renderPrice() {
// 	let catalogData = JSON.parse(localStorage.getItem('cartData')) || {};
// 	console.log(catalogData);

// 	let catalog = JSON.parse(localStorage.getItem('catalogData'));
// 	console.log(catalog);

// 	let productIDTwo = $('.product-page__action-buy').attr('data-id');
// 	let price = $('.product-page__price');
// 	price.html('');

// 	for (let key in catalogData) {
// 		if (catalogData[key].id == productIDTwo) {
// 			let span = document.createElement('span');
// 			span.className = 'product-page__price-number';
// 			span.innerHTML = `
// 					${catalogData[key].price}.00 ₽
// 				`;
// 			price.append(span);
// 		}

// 	}
// }

function catalogProductRefresh(catalogData) {
	let catalog = JSON.parse(catalogData);
	let cart = JSON.parse(localStorage.getItem('cartData')) || {};

	if ($('.module-order-price span').length) {
		for (let key in catalog) {
			$('.module-order-price[data-id=' + key + ']').find(' span').html(catalog[key]);
		}
	}

	if (!$.isEmptyObject(cart)) {
		for (let key in cart) {
			cart[key].price = catalog[key];
		}
	}

	localStorage.setItem('cartData', JSON.stringify(cart));
}


function catalogRefresh(catalogData) {
	let catalog = JSON.parse(catalogData);
	let cart = JSON.parse(localStorage.getItem('cartData')) || {};


	if ($('.shop-item__price span').length) {
		for (let key in catalog) {
			$('#' + key).find('.shop-item__price span').html(catalog[key]);
		}
	}

	if (!$.isEmptyObject(cart)) {
		for (let key in cart) {
			cart[key].price = catalog[key];
		}
	}

	localStorage.setItem('cartData', JSON.stringify(cart));
}

function orderRefresh(catalogData) {
	order();
}

function cartRefresh() {
	cart();
}

function cartCityRefresh(catalogData) {

}

export default refreshData;