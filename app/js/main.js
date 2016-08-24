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
