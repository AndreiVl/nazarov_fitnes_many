import city from "../city/city";
import shopItem from "../shop-item/shop-item";
import cart from "../shop-sidebar/shop-sidebar";
import productPage from '../product-page/product-page';

const shop = () => {
	loadShopCatTitles();
	city();
	shopItem();
	cart();
	productPage();
};

function loadShopCatTitles() {
	let catTitles = {
		borshch_s_mitbolami: "Борщ с митболами из говядины белковыми",
		solyanka_s_mitbolami: "Солянка с&nbsp;митболами из&nbsp;говядины белковыми",
		suplapsha_s_mitbolami: "Суп-лапша с&nbsp;митболами из&nbsp;курицы белковыми",
		lagman_s_mitbolami: "Лагман с митболами из говядины белковыми",
		tom_yam_s_fishbolami: "Том Ям&nbsp;с&nbsp;фишболами",
		tom_kkha_s_mitbolami: "Том Кха с&nbsp;митболами",
		ma_po_tofu_s_farshem: "Ма&nbsp;По&nbsp;Тофу с&nbsp;фаршем",
		fo_s_mitbolami: "Суп Фо с митболами из говядины белковыми",
		miso_s_fishbolami: "Мисо-суп с&nbsp;фишболами из&nbsp;лосося белковыми",
	};

	localStorage.setItem("catTitles", JSON.stringify(catTitles));
}

export default shop;
