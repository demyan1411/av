$(document).ready(function() {

	"use strict";

	var mobile = navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i);
	if(mobile != null) {
	  $('html').css({'width': window.innerWidth + 'px', 'box-sizing': 'border-box'});
	}

	$('.js-main-content-slider').slick({
		dots: true,
		arrows: false,
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
		speed: 1000
	});

	$('.js-calculator-button').on('click', function(){
		$('.js-calculator-button').removeClass('active');
		$('.main-content__calculator-form').hide()

		$(this).addClass('active');

		var calcBlock = $(this).data('calculator');
		$('.js-' + calcBlock).show();
	});

	$('.about-mission__slider').slick({
		dots: true,
		arrows: false,
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

	resizeSlider();
	$(window).on('resize', function () {
		resizeSlider();
	})
}); // end ready

function resizeSlider() {
	if ($(window).width() < 1520 && $(window).width() > 980) {
		$('.js-main-block-slider').css('width', $(window).width() + 'px');
	}
}
