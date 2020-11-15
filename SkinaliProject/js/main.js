
$(function() {
	////Hover эффекты на каталоге
	let pricesItem = $('.prices__item');
	let catalogitem = $('.catalog-item');

	pricesItem.hover(function(){
		$(this).addClass('prices__item--hovered');
	}, function(){
		pricesItem.removeClass('prices__item--hovered');
	});

	catalogitem.hover(function(){
		$(this).addClass('catalog-item--hover');
	}, function(){
		catalogitem.removeClass('catalog-item--hover');
	});

	// Фиксированное меню после прокрутки
	let header = $('.header-top__wrapper');
	let mainPage = $('.header');
	let mainPageH = mainPage.innerHeight();
	let scrollPos = $(window).scrollTop();
	
	$(window).on('scroll load resize', function() {
		let mainPageH = mainPage.innerHeight();
		scrollPos = $(this).scrollTop();
	
		if (scrollPos > mainPageH) {
		header.addClass('fixed');
		} else {
		header.removeClass('fixed');
		}
	});
	
	// Показать меню
	$('.header-top__nav-btn').on('click', function(){
		$('.nav-bar').toggleClass('nav-bar--active');
	});

	// Smooth scroll
	$('[data-scroll]').on('click', function(event){
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		
		$('html, body').animate({
		scrollTop: elementOffset - 80
		}, 1000);

		$('.nav-bar').removeClass('nav-bar--active');
		
	});

	//Показывать карту при прокрутке к ней,а не сразу при загрузке страницы
	let discount = $('.discount');
	let discountTop = discount.offset().top;
	$(window).bind('scroll', function() {
		let windowTop = $(this).scrollTop();
		if (windowTop > discountTop) {
			$('.contacts__map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2263.1567917598068!2d37.764250116128316!3d55.44249798047146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aa43ab93c7d4d%3A0x8b6f259e9c72dd05!2z0JrQsNGI0LjRgNGB0LrQvtC1INGILiwgMjMsINCU0L7QvNC-0LTQtdC00L7QstC-LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxNDIwMDE!5e0!3m2!1sru!2sru!4v1604968059281!5m2!1sru!2sru" width="600" height="450" frameborder="0" style="border:0;"allowfullscreen=""aria-hidden="false"tabindex="0"></iframe>')
			$(window).unbind('scroll');
		}
	});

});

$(window).on('load', (function() {
	// Плагин twentyTwenty
	$(".before-after").twentytwenty({
		before_label: 'Без скинали',
    	after_label: 'Со скинали',
	});

	// Слик слайдер
	$('.before-slider').slick({
		draggable: false,
		swipe: false,
		dots: true,
		dotsClass: 'before-slider__dots',
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
	});

	// Модальное окно
	$('.modal-open').click(function() {
		$('.modal').fadeIn();
		return false;
	});	
	
	$('.modal__close').click(function() {
		$(this).parents('.modal').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').fadeOut();
		}
});
	
	$('.modal').click(function(e) {
		if ($(e.target).closest('.modal__wrapper').length == 0) {
			$(this).fadeOut();					
		}
	});
}));