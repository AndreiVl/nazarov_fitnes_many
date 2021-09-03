import form from "./form/form";
import header from "./header/header";
import input from "./input/input";
import menu from "./menu/menu";
import modal from "./modal/modal";
import shop from "./shop/shop";
import order from "./order/order";
import tabs from './tabs/tabs';

window.addEventListener("DOMContentLoaded", () => {
	$("#clearData").on("click", function () {
		location.reload();
		localStorage.clear();
	});
	header();
	if ($('.menu--main').length) {
		menu();
	}
	if ($('.form').length) {
		form();
	}
	if ($('.input--phone ').length) {
		input();
	}
	if ($('.modal-link').length) {
		modal();
	}
	shop();
	order();
	if ($('.tabs').length) {
		tabs();
	}
});
