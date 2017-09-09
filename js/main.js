/*
 * Template Name: Unique - Responsive vCard Template
 * Author: lmpixels
 * Author URL: http://themeforest.net/user/lmpixels
 * Version: 1.0
 */

// Carregando o json de linguagem
var jsonLanguageLoader = $.getJSON('language/lang.json');
var jsonLanguageLoaded = null;

var actualLanguage = null;

var birthday = new Date("1994/1/23");
var actualDate = new Date();
var difference = actualDate - birthday; // This is the difference in milliseconds
var age = Math.floor(difference / 31557600000); // Divide by 1000*60*60*24*365.25

function trocarTextosDosElementosParaLinguagem(linguagem) {
	if (jsonLanguageLoaded != null) {
		modificarTextoConfiguracao("configurations", jsonLanguageLoaded.terms[linguagem].blocks.configuration.configurations);
		modificarTextoConfiguracao("language", jsonLanguageLoaded.terms[linguagem].blocks.configuration.language);

		modificarTextoIndiceCarrosselDeTextos('back_end_developer', jsonLanguageLoaded.terms[linguagem].blocks.text_carousel.back_end_developer);
		modificarTextoIndiceCarrosselDeTextos('database_developer', jsonLanguageLoaded.terms[linguagem].blocks.text_carousel.database_developer);
		modificarTextoIndiceCarrosselDeTextos('linux_based_os_fan', jsonLanguageLoaded.terms[linguagem].blocks.text_carousel.linux_based_os_fan);
		modificarTextoIndiceCarrosselDeTextos('agile_methodologies_enthusiastic', jsonLanguageLoaded.terms[linguagem].blocks.text_carousel.agile_methodologies_enthusiastic);

		modificarTextosMenu("home", jsonLanguageLoaded.terms[linguagem].blocks.menu.home);
		modificarTextosMenu("about", jsonLanguageLoaded.terms[linguagem].blocks.menu.about);
		modificarTextosMenu("resume", jsonLanguageLoaded.terms[linguagem].blocks.menu.resume);
		modificarTextosMenu("portfolio", jsonLanguageLoaded.terms[linguagem].blocks.menu.portfolio);
		modificarTextosMenu("contact", jsonLanguageLoaded.terms[linguagem].blocks.menu.contact);

		modificarTextosSobre("about_title", jsonLanguageLoaded.terms[linguagem].blocks.about.title);
		modificarTextosSobre("about_description", jsonLanguageLoaded.terms[linguagem].blocks.about.description);
		modificarTextosSobre("about_subpage_title", jsonLanguageLoaded.terms[linguagem].blocks.about.subpage.title);
		modificarTextosSobre("about_subpage_text_1", jsonLanguageLoaded.terms[linguagem].blocks.about.subpage.text_1);
		modificarTextosSobre("about_subpage_text_2", jsonLanguageLoaded.terms[linguagem].blocks.about.subpage.text_2);
		modificarTextosSobre("age", jsonLanguageLoaded.terms[linguagem].blocks.about.info.age);
		modificarTextosSobre("age_value", age);
		modificarTextosSobre("age_value_text", jsonLanguageLoaded.terms[linguagem].blocks.about.info.age_value_text);
		modificarTextosSobre("nationality", jsonLanguageLoaded.terms[linguagem].blocks.about.info.nationality);
		modificarTextosSobre("nationality_value", jsonLanguageLoaded.terms[linguagem].blocks.about.info.nationality_value);
		modificarTextosSobre("address", jsonLanguageLoaded.terms[linguagem].blocks.about.info.address);
		modificarTextosSobre("address_value", jsonLanguageLoaded.terms[linguagem].blocks.about.info.address_value);
		modificarTextosSobre("email", jsonLanguageLoaded.terms[linguagem].blocks.about.info.email);
		modificarTextosSobre("email_value", jsonLanguageLoaded.terms[linguagem].blocks.about.info.email_value);
		$("#email_value").attr('href', "mailto:" + jsonLanguageLoaded.terms[linguagem].blocks.about.info.email_value);
		modificarTextosSobre("phone", jsonLanguageLoaded.terms[linguagem].blocks.about.info.phone);
		modificarTextosSobre("phone_value", jsonLanguageLoaded.terms[linguagem].blocks.about.info.phone_value_formated);
		$("#phone_value").attr('href', "tel:" + jsonLanguageLoaded.terms[linguagem].blocks.about.info.phone_value);
		modificarTextosSobre("skype", jsonLanguageLoaded.terms[linguagem].blocks.about.info.skype);
		modificarTextosSobre("skype_value", jsonLanguageLoaded.terms[linguagem].blocks.about.info.skype_value);
		$("#skype_value").attr('href', 'skype:' + jsonLanguageLoaded.terms[linguagem].blocks.about.info.skype_value + '?chat');
		modificarTextosSobre("freelance", jsonLanguageLoaded.terms[linguagem].blocks.about.info.freelance);
		modificarTextosSobre("freelance_value", jsonLanguageLoaded.terms[linguagem].blocks.about.info.freelance_value);
	} else {
		informarErroDeCarregamentoDeJsonDeLinguagem()
	}
}

function modificarTextoConfiguracao(id, texto) {
	$("#" + id).fadeOut('400', function() {
		$("#" + id).text(texto).fadeIn();
	});
}

function modificarTextoIndiceCarrosselDeTextos(id, texto) {
	if ($("#" + id + ".home-page-description").length == 0) {
		$('.owl-carousel').owlCarousel('add',
				'<div class="item"><p class="home-page-description" id="' + id + '">' + texto + '</p></div>')
			.owlCarousel('refresh');

	} else {
		$("#" + id + ".home-page-description").fadeOut('400', function() {
			$("#" + id + ".home-page-description").text(texto).fadeIn();
		});
	}
}

function modificarTextosMenu(id, texto) {
	$("#" + id + " span").fadeOut('400', function() {
		$("#" + id + " span").text(texto).fadeIn();
	});
}

function modificarTextosSobre(id, texto) {
	if (!$("#" + id).is('a'))
		$("#" + id).fadeOut('400', function() {
			$("#" + id).text(texto).fadeIn();
		});
	else {
		$("#" + id).parent().fadeOut('400', function() {
			$("#" + id).text(texto)
			$("#" + id).parent().fadeIn();
		});
	}
}

function informarErroDeCarregamentoDeJsonDeLinguagem() {
	console.log("O arquivo de configuração de linguagem não pôde ser carregado.\nFalha de configuração geral.\nFavor entrar em contato com hullick02@gmail.com");
}

(function($) {
	"use strict";

	// Portfolio subpage filters
	function portfolio_init() {
		var portfolio_grid = $('#portfolio_grid'),
			portfolio_filter = $('#portfolio_filters');

		if (portfolio_grid) {

			portfolio_grid.shuffle({
				speed: 450,
				itemSelector: 'figure'
			});

			$('.site-main-menu').on("click", "a", function(e) {
				portfolio_grid.shuffle('update');
			});


			portfolio_filter.on("click", ".filter", function(e) {
				portfolio_grid.shuffle('update');
				e.preventDefault();
				$('#portfolio_filters .filter').parent().removeClass('active');
				$(this).parent().addClass('active');
				portfolio_grid.shuffle('shuffle', $(this).attr('data-group'));
			});

		}
	}
	// /Portfolio subpage filters

	// Contact form validator
	$(function() {

		$('#contact-form').validator();

		$('#contact-form').on('submit', function(e) {
			if (!e.isDefaultPrevented()) {
				var url = "contact_form/contact_form.php";

				$.ajax({
					type: "POST",
					url: url,
					data: $(this).serialize(),
					success: function(data) {
						var messageAlert = 'alert-' + data.type;
						var messageText = data.message;

						var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
						if (messageAlert && messageText) {
							$('#contact-form').find('.messages').html(alertBox);
							$('#contact-form')[0].reset();
						}
					}
				});
				return false;
			}
		});
	});
	// /Contact form validator

	// Hide Mobile menu
	function mobileMenuHide() {
		var windowWidth = $(window).width();
		if (windowWidth < 1024) {
			$('#site_header').addClass('mobile-menu-hide');
		}
	}
	// /Hide Mobile menu

	// Custom scroll
	function customScroll() {
		var windowWidth = $(window).width();
		if (windowWidth > 991) {
			// Custom Subpage Scroll
			$(".pt-page").mCustomScrollbar({
				scrollInertia: 8
			});

			// Custom Header Scroll
			$("#site_header").mCustomScrollbar({
				scrollInertia: 8
			});
		} else {
			$(".pt-page").mCustomScrollbar('destroy');

			$("#site_header").mCustomScrollbar('destroy');
		}
	}
	// /Custom scroll

	//On Window load & Resize
	$(window)
		.on('load', function() { //Load

			// Quando o arquivo de linguagens for carregado, haverá o fadeout do preloader            
			jsonLanguageLoader.done((json) => {
				jsonLanguageLoaded = json;

				trocarTextosDosElementosParaLinguagem(jsonLanguageLoaded.config.default_language);

				// Animation on Page Loading
				$(".preloader").fadeOut("slow");

				// initializing page transition.
				var ptPage = $('.subpages');
				if (ptPage[0]) {
					PageTransitions.init({
						menu: 'ul.site-main-menu',
					});
				}

				customScroll();
			})

			jsonLanguageLoader.fail(() => {
				informarErroDeCarregamentoDeJsonDeLinguagem();
			})

		})
		.on('resize', function() { //Resize
			mobileMenuHide();

			customScroll();
		});


	// On Document Load
	$(document).on('ready', function() {
		// Template Demo Panel
		demoPanel;

		// Initialize Portfolio grid
		var $portfolio_container = $("#portfolio-grid");

		$portfolio_container.imagesLoaded(function() {
			setTimeout(function() {
				portfolio_init(this);
			}, 500);
		});

		// Portfolio hover effect init
		$(' #portfolio_grid > figure > a ').each(function() { $(this).hoverdir(); });

		// Mobile menu
		$('.menu-toggle').on("click", function() {
			$('#site_header').toggleClass('mobile-menu-hide');
		});

		// Mobile menu hide on main menu item click
		$('.site-main-menu').on("click", "a", function(e) {
			mobileMenuHide();
		});

		// Testimonials Slider
		$(".testimonials.owl-carousel").owlCarousel({
			nav: true, // Show next/prev buttons.
			items: 3, // The number of items you want to see on the screen.
			loop: false, // Infinity loop. Duplicate last and first items to get loop illusion.
			navText: false,
			margin: 10,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
				},
				// breakpoint from 480 up
				480: {
					items: 1,
				},
				// breakpoint from 768 up
				768: {
					items: 2,
				},
				1200: {
					items: 3,
				}
			}
		});

		// Text rotation
		$('.text-rotation').owlCarousel({
			loop: true,
			dots: false,
			nav: false,
			margin: 10,
			items: 1,
			autoplay: true,
			autoplayHoverPause: false,
			autoplayTimeout: 3800,
			animateOut: 'zoomOut',
			animateIn: 'zoomIn'
		});

		// Lightbox init
		$('.lightbox').magnificPopup({
			type: 'image',
			removalDelay: 300,

			// Class that is added to popup wrapper and background
			// make it unique to apply your CSS animations just to this exact popup
			mainClass: 'mfp-fade',
			image: {
				// options for image content type
				titleSrc: 'title',
				gallery: {
					enabled: true
				},
			},

			iframe: {
				markup: '<div class="mfp-iframe-scaler">' +
					'<div class="mfp-close"></div>' +
					'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
					'<div class="mfp-title mfp-bottom-iframe-title"></div>' +
					'</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

				patterns: {
					youtube: {
						index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

						id: 'v=', // String that splits URL in a two parts, second part should be %id%
						// Or null - full URL will be returned
						// Or a function that should return %id%, for example:
						// id: function(url) { return 'parsed id'; }

						src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
					},
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: '//player.vimeo.com/video/%id%?autoplay=1'
					},
					gmaps: {
						index: '//maps.google.',
						src: '%id%&output=embed'
					}
				},

				srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
			},

			callbacks: {
				markupParse: function(template, values, item) {
					values.title = item.el.attr('title');
				}
			},
		});

		$('.ajax-page-load-link').magnificPopup({
			type: 'ajax',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true
			},
		});

		$('.tilt-effect').tilt({

		});

	});

})(jQuery);