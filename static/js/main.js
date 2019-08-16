; (function () {

	'use strict';

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 50);

			}

		}, { offset: '90%' });
	};



	var isotopeImageLoaded = function () {

		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			resizable: false,
			masonry: {
				columnWidth: '.grid-sizer',
			}
		});

		$grid.imagesLoaded().progress(function () {
			$grid.isotope('layout');
		});

	}

	$(function () {

		$('.grid').imagesLoaded().done(function () {

			contentWayPoint();


		});

		isotopeImageLoaded();
	});


}());