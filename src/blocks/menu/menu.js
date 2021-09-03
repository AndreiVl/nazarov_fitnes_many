const menu = () => {
	$('.menu__link').on('click', function (e) {
		e.preventDefault();
		let linkId = $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(linkId).offset().top - 200 }, 1000);

		if ($(window).width() < 992) {
			$(".header__right").fadeOut(100);
			$(".header__right").removeClass("header__mobile");
			$(".header__btn").removeClass("header__btn--opened");
			$("body").removeClass("overflow-heidden ");
		}
	});
}

export default menu;