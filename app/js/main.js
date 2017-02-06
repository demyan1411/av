$(document).ready(function() {

	"use strict";

	var mobile = navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i);
	if(mobile != null) {
	  $('html').css({'width': window.innerWidth + 'px', 'box-sizing': 'border-box'});
	}

	$('.js-open-popup').on('click', function (e) {
		e.preventDefault();
		$('.js-popup').show();
	});

	$('.js-popup').on('click', function (e) {
		e.preventDefault();

		var div = $(".popup__block");

		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.js-popup').hide();
		}
	});

	$('.js-main-content-slider').slick({
		dots: true,
		arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
	});

	$('.service_block__slider').slick({
		dots: true,
		arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
	});

	$('.js-main-block-slider').slick({
		dots: true,
		arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
		autoplay: true,
  	autoplaySpeed: 10000,
		speed: 1000,
		variableWidth: true
	});

	$('.js-post-slider').slick({
		dots: true,
		arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
	});

	$('.js-search-slider').slick({
		arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
		// centerMode: true,
	});

	$('.js-calculator-button').on('click', function(){
		$('.js-calculator-button').removeClass('active');
		$('.main-content__calculator-form').hide()

		$(this).addClass('active');

		var calcBlock = $(this).data('calculator');
		$('.js-' + calcBlock).show();
	});

	$('.slider_block__slider').slick({
		dots: true,
		arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
		speed: 500
	});

	$('.about-mission__slider').on('afterChange', function(slick, currentSlide) {
		$('.about-mission__block').removeClass('active');
		$('[data-slide="' + (currentSlide.currentSlide) + '"]').addClass('active');
	});

	var time = true;
	$('.about-mission__block').on('click', function () {
		var slideNumber = $(this).data('slide');
		var that = $(this);

		if (time) {
			$('.about-mission__block').removeClass('active');
			that.addClass('active');
			time = false;
		}

		setTimeout(function () {
			time = true
		}, 500);

		$('.about-mission__slider').slick('slickGoTo', slideNumber);
	});

	$('.about-efficiency__slider').slick({
		dots: false,
		arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1
	});

	$('.tech_info__slider').slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});

	resizeSlider();
	$(window).on('resize', function () {
		resizeSlider();
	});

	var allPanels = $('.accordion__content').hide();
	$('.js-accordion-button').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);

		if ($this.hasClass('active')) {
			$this.removeClass('active').next().slideUp();
			return;
		}

		allPanels.slideUp();
		$('.js-accordion-button').removeClass('active');
		$this.addClass('active').next().slideToggle();
	});

	$('.accordion__close').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.accordion__content').slideUp().prev().removeClass('active');
	});

	$('.js-filter-button').on('click', function (e) {
		e.preventDefault();
		$('.js-filter-select').toggleClass('active');
	});

	$('.js-filter-option').on('click', function (e) {
		e.preventDefault();
		var text = $(this).text();
		$('.js-filter-button').text(text);
		$('.js-filter-select').removeClass('active');

		filterServices();
	});

	$('body').on('click',function (e) {
		if (!$(e.target).closest('.js-filter')) {
			$('.js-filter-select').removeClass('active');
		}
	})

	// $('.services .main-content__info-text').css({
	// 	'height': 123 + 'px'
	// });
}); // end ready

function resizeSlider() {
	if ($(window).width() > 980) {
		$('.js-main-block-slider').css('width', $(window).width() + 'px');
		$('.main-block__slide').css('width', $(window).width() + 'px');
	}
}

function filterServices() {
	console.log('Ajax');
}
