// document.addEventListener("DOMContentLoaded", () => {
// 	const sectionSwiper = new Swiper(".section__swiper", {
// 		speed: 1000,
// 		spaceBetween: 0,
// 	});
// });

// Слайдер
const swiper = new Swiper('.section__swiper', {
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.section-slider .swiper-pagination',
	},

	navigation: {
		nextEl: '.section-slider .swiper-button-next',
		prevEl: '.section-slider .swiper-button-prev',
	},
})

const swiperSayRow = new Swiper('.swiper-say-row', {
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.what-clients-say .swiper-pagination',
		clickable: true,
	},
})

// Заказать услугу
$('.services-button').magnificPopup({
	type: 'inline',
	showCloseBtn: false,
	callbacks: {
		beforeOpen: function () {
			this.st.mainClass = this.st.el.attr('data-effect')
		},
	},
})

$('.modal-form__close').on('click', function () {
	$.magnificPopup.close()
})

// Галерея фотографий с zoom
$('.s-gallery__wrap').magnificPopup({
	delegate: 'a',
	type: 'image',
	showCloseBtn: false,
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0, 1], 
	},
	zoom: {
		enabled: true,
		duration: 300,
		opener: function (element) {
			return element.find('img')
		},
	},
})

// Показывать и скрывать фотографии
$('.s-gallery__button a').on('click', function (e) {
	e.preventDefault()
	var galleryItem = $('.gallery-item')

	if ($(this).hasClass('is-active')) {
		$(this).removeClass('is-active')
		$(this).text('Показать еще')
		galleryItem.each(function () {
			if ($(this).hasClass('is-active')) {
				$(this).removeClass('is-active')
				$(this).slideUp()
			}
		})
	} else {
		$(this).addClass('is-active')
		$(this).text('Скрыть')
		galleryItem.each(function () {
			if (!$(this).is(':visible')) {
				$(this).addClass('is-active')
				$(this).slideDown()
			}
		})
	}
})





