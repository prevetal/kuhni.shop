WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function() {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			loopAdditionalSlides: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		})
	}

	let tagSlider = document.querySelector('.tags .swiper')

	if (tagSlider) {
		new Swiper('.tags .swiper', {
			/*loop: true,*/
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			slidesPerView: 'auto',
			/*loopAdditionalSlides: 1,*/
			/*pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},*/
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		})
	}


	// Category images slider
	const categoryImagesSliders = [],
		categoryImages = document.querySelectorAll('.category .images .swiper')

	categoryImages.forEach((el, i) => {
		el.classList.add('categories_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1
		}

		categoryImagesSliders.push(new Swiper('.categories_s' + i, options))
	})


	// Articles slider
	const articlesSliders = [],
		articles = document.querySelectorAll('.articles .swiper')

	articles.forEach((el, i) => {
		el.classList.add('articles_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 30,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.article'))

					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.article')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)

					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			},
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Kits thumbs slider
	const kitsThumbsSliders = [],
		kitsThumbs = document.querySelectorAll('.kits .images .swiper')

	kitsThumbs.forEach((el, i) => {
		el.classList.add('kits_thumbs_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 0,
			slidesPerView: 1
		}

		kitsThumbsSliders.push(new Swiper('.kits_thumbs_s' + i, options))
	})


	// Portfolio slider
	let portfolioSlider = document.querySelector('.portfolio_item .images .swiper')

	if (portfolioSlider) {
		new Swiper('.portfolio_item .images .swiper', {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20
				},
				1024: {
					spaceBetween: 24
				},
				1280: {
					spaceBetween: 30
				}
			},
		})
	}


	// Product info slider
	/*const productInfoSliders = [],
		productInfoSlider = document.querySelectorAll('.product_info .images .swiper')

	productInfoSlider.forEach((el, i) => {
		el.classList.add('product_info_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					spaceBetween: 20
				},
				1024: {
					spaceBetween: 24
				},
				1280: {
					spaceBetween: 30
				}
			}
		}

		productInfoSliders.push(new Swiper('.product_info_s' + i, options))
	})*/

	const productInfoSliders = [];
	const productThumbsSliders = []; // Массив для хранения всех слайдеров-превью

	const productInfoMainSliders = document.querySelectorAll('.product_info .images .swiper'); // Изменим класс, чтобы было понятно, что это основной слайдер
	const productInfoThumbSliders = document.querySelectorAll('.product_info .thumbs .swiper'); // Класс для слайдеров-превью

	productInfoMainSliders.forEach((mainEl, i) => {
	    // Добавляем уникальный класс основному слайдеру
	    mainEl.classList.add('product_info_main_s' + i);

	    // Добавляем уникальный класс соответствующему слайдеру-превью
	    // Предполагаем, что порядок productInfoThumbSliders соответствует productInfoMainSliders
	    const thumbEl = productInfoThumbSliders[i];
	    if (thumbEl) { // Проверяем, что элемент превью существует
	        thumbEl.classList.add('product_info_thumb_s' + i);

	        // 1. Создаем слайдер-превью для текущего блока
	        let productThumbs = new Swiper('.product_info_thumb_s' + i, {
	            /*loop: true,*/
	            speed: 500,
	            direction: 'vertical',
	            watchSlidesProgress: true,
	            slideActiveClass: 'active',
	            slideVisibleClass: 'visible',
	            lazy: true,
	            spaceBetween: 20,	            
	            slidesPerView: 'auto',
	        });
	        productThumbsSliders.push(productThumbs); // Добавляем в массив, если нужно будет ссылаться на них позже
	    }


	    // 2. Определяем опции для основного слайдера
	    let options = {
	        loop: true,
	        loopAdditionalSlides: 1,
	        speed: 500,
	        watchSlidesProgress: true,
	        slideActiveClass: 'active',
	        slideVisibleClass: 'visible',
	        navigation: {
	            nextEl: '.swiper-button-next', // Убедитесь, что кнопки навигации уникальны для каждого блока
	            prevEl: '.swiper-button-prev'
	        },
	        lazy: true,
	        slidesPerView: 'auto',
	        breakpoints: {
	            0: {
	                spaceBetween: 20
	            },
	            1024: {
	                spaceBetween: 24
	            },
	            1280: {
	                spaceBetween: 30
	            }
	        }
	    };

	    // Добавляем thumbs, связывая с только что созданным слайдером-превью
	    if (productThumbsSliders[i]) { // Проверяем, что слайдер-превью был создан
	        options.thumbs = {
	            swiper: productThumbsSliders[i]
	        };
	    }


	    // 3. Создаем основной слайдер
	    productInfoSliders.push(new Swiper('.product_info_main_s' + i, options));
	});



	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})


	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Close the popup when you click on the cross in the popup
	$('.mini_modal .close_btn').click(e => {
		e.preventDefault()

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level'),
				color = $(this).data("name");

			parent.find('.tabs .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')
			$(".js-color").text(color);
			$(this).addClass('active')
			let escapedActiveTab = activeTab.replace(/#/g, '\\#');
        	$("button[data-content='"+escapedActiveTab+"']").addClass('active'); 
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="https://kuhni.shop/wp-content/themes/raten/images/sprite.svg#ic_close_small"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('header').toggleClass('show')

		$('.mob_header .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Focus when clicking on the field name
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	// Select file
	/*const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label div span').innerText = el.value)
		})
	}*/


	// Tags
	$('.tags .spoler_btn').click(function(e) {
		e.preventDefault()

		const tags = $(this).closest('.tags')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? tags.find('> *').addClass('show')
			: tags.find('> *').removeClass('show')
	})


	// Portfolio item
	$('.portfolio_item .info .title.spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? $(this).next().slideDown(300)
			: $(this).next().slideUp(300)
	})


	// Filter
	$('.filters .btn.all_btn').click(function(e) {
		e.preventDefault()

		$('#filter').addClass('show')
		$('.overlay').fadeIn(300)
		$('body').toggleClass('lock')
	})


	$('.filters .mini_modal .reset_btn').click(function(e) {
		e.preventDefault()

		const section = $(this).closest('.mini_modal')

		section.find('input').prop('checked', false)
	})


	$('#filter .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? $(this).next().slideDown(300)
			: $(this).next().slideUp(300)
	})


	$('#filter .data .reset_btn').click(function(e) {
		e.preventDefault()

		const section = $(this).closest('.section')

		section.find('input').prop('checked', false)
	})

	$('.filters .reset_btn').click(function(e) {
		e.preventDefault()

		const section = $(this).closest('.filters')

		section.find('input').prop('checked', false)
		$(this).closest('.filters').submit();
	})


	$('#filter .close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('#filter').removeClass('show')
		$('.overlay').fadeOut(200)
		$('body').toggleClass('lock')
	})


	// Product_info
	$('.product_info .info .title.spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? $(this).next().slideDown(300)
			: $(this).next().slideUp(300)
	})


	// Products colors
	$('.product_colors .spoler_btn').click(function(e) {
		e.preventDefault()

		const row = $(this).closest('.product_colors').find('.row')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? row.find('> *').addClass('show')
			: row.find('> *').removeClass('show')
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Footer
	$('footer .menu .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? $(this).next().addClass('show')
			: $(this).next().removeClass('show')
	})


	// Mob. menu
	$('.mob_menu_btn').click(function(e) {
		e.preventDefault()

		$('body').addClass('lock')
		$('#mob_menu').addClass('show')
	})


	$('#mob_menu .close_btn').click(function(e) {
		e.preventDefault()

		$('body').removeClass('lock')
		$('#mob_menu').removeClass('show')
	})


	// Base kit
	$('.product_info .base_kit_btn').click(function(e) {
		e.preventDefault()

		$('body').addClass('lock')
		$('#base_kit').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('#base_kit .close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('body').removeClass('lock')
		$('#base_kit').removeClass('show')
		$('.overlay').fadeOut(200)
	})

	// Base kit
	$('.product_info .credit_btn').click(function(e) {
		e.preventDefault()

		$('body').addClass('lock')
		$('#credit_kit').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('#credit_kit .close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('body').removeClass('lock')
		$('#credit_kit').removeClass('show')
		$('.overlay').fadeOut(200)
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})