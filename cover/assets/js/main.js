/***************************************************
==================== JS INDEX ======================
****************************************************

01. PreLoader Js
02. mobile menu Js
03. header dropdown static Js
04. Common Js
05. Nice Select Js
06. Masonary Js
07. magnificPopup img view
08. magnificPopup video view
09. Counter Js
10. Counter Js
11. Smooth Scroll Js
12. Sticky Header Js
13. Open Handlers
14. Close Handlers
15. overlay not working js
16. search border style
17. scroll wrapper
18. webgl images hover animation
19. service panel animation
20. panel pin section
21. stack panel pin section
22. hero animation
23. pp-top-wrap
24. tp-funfact-panel
25. hover reveal for image
26. button bounce animation
27. carachter Animation
28. fade-class-active
29. text animation paragraph
30. text bounce animation
31. scale animation
32. portfolio panel
33. addClass removeClass
34. ScrollMagic Controller
35. scroll with moving text
36. text-scale-anim
37. tp-text-right-scroll
38. tp-text-invert
39. tp-text-invert-2
40. tp-text-invert-3
41. Fade Effect With Scroll
42. project anim
43. choose anim
44. work anim
45. award anim
46. studio-project animation
47. team animation
48. price tab
49. move animation
50. Active Class
51. zoom in
52. scale animation
53. tp-text-perspective
54. tp-text-revel-anim
55. eye animation width mouse move
56. st-award-wrapper
57. it-faq-accordion
58. tp-porfolio-10-title-wrap
58. tp-project-5-2-area anim
59. shaders slider
60. atropos slider
61. tp-gsap-bg
62. cta section animation
63. img animation slider
64. Function to hide the parent section
65. tp-split-text
66. Rendom text genarator in hover
67. lowercase character
68. Hero bg Animation
69. Section to title zoom and item uper
70. portfolio bg change
71. Image Reveal Animation
72. career animation
73. service animation
74. contact-category animation
75. portfolio-slicer animation
76. perspective-slider animation
77. showcase-portfolio-panel
78. scroll animation
79. project details anim js
80. progress anim
81. portfolio item pin js 
82. overlay animation
83. E-commerce plus minus js
84. Tab line change js
85. Custom Select Js
86. product banner js
87. Password Toggle Js
89. Language toggle js
90. popup subscribe js
91. brand img animation
92. social section img show

/***************************************************
==================== JS INDEX ======================
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	
	// 01. PreLoader Js//
	$(window).on('load', function () {
		$("#preloader").fadeOut(500);
	});
	$(window).on('load', function () {
		$("#loading").fadeOut(500);
	});
  

    // 02. mobile menu Js//
	let tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
	let tpSideMenu = $('.tp-offcanvas-menu nav');
	tpSideMenu.append(tpMenuWrap);
	if ($(tpSideMenu).find('.submenu, .mega-menu').length != 0) {
	   $(tpSideMenu).find('.submenu, .mega-menu').parent().append
	   ('<button class="tp-menu-close"><i class="fa-solid fa-plus"></i></button>');
	}
	let sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a, .tp-offcanvas-menu nav > ul li.has-dropdown > ul > li.menu-item-has-children > a');
	$(sideMenuList).on('click', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$(this).siblings('.submenu, .mega-menu').slideToggle();
	});

	// 03. header dropdown static Js//
	$(function() {
		$('.tp-header-dropdown nav ul li').each(function() {
			if ($(this).find('.mega-menu').length > 0) {
				$(this).addClass('p-static');
			}
		});
	});


	// 04. Common Js//
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});






	// 11. Smooth Scroll Js //
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			let target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 60
				}, 1500);
			}
		});
	}
	smoothSctoll();




	// 13. Open Handlers //
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-area, .tp-offcanvas-2-area, .body-overlay").addClass("opened");
	});
	
	$(".tp-search-open-btn").on("click", function () {
		$(".tp-search-area, .body-overlay").addClass("opened");
	});
	
	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});
  
	// 14. Close Handlers //
	$(".tp-offcanvas-close-btn, .tp-offcanvas-2-close-btn, .tp-search-close-btn, .cartmini-close-btn, .body-overlay").on("click", function () {
		$(".tp-offcanvas-area, .tp-offcanvas-2-area, .tp-search-area, .cartmini__area").removeClass("opened cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});

	// 15. overlay not working js //
	$('.tp-offcanvas-open-btn').on('click', function () {
		const hasOffcanvas2 = $('.tp-offcanvas-2-area').length;
		$('.body-overlay').toggleClass('opened', !hasOffcanvas2);
	});
	  

	// 17. scroll wrapper //
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
	if($('#smooth-wrapper').length && $('#smooth-content').length){
		ScrollSmoother.create({
			smooth: 1.35,
			effects: true,
			smoothTouch: .1,
			ignoreMobileResize: true
		})
	}

	// 18. webgl images hover animation //
	if ($('.tp--hover-item').length) {
		let hoverAnimation__do = function (t, n) {
			let a = new hoverEffect({
				parent: t.get(0),
				intensity: t.data("intensity") || void 0,
				speedIn: t.data("speedin") || void 0,
				speedOut: t.data("speedout") || void 0,
				easing: t.data("easing") || void 0,
				hover: t.data("hover") || void 0,
				image1: n.eq(0).attr("src"),
				image2: n.eq(0).attr("src"),
				displacementImage: t.data("displacement"),
				imagesRatio: n[0].height / n[0].width,
				hover: !1
			});
			t.closest(".tp--hover-item").on("mouseenter", function () {
				a.next()
			}).on("mouseleave", function () {
				a.previous()
			})
		}
		let hoverAnimation = function () {
			$(".tp--hover-img").each(function () {
				let n = $(this);
				let e = n.find("img");
				let i = e.eq(0);
				i[0].complete ? hoverAnimation__do(n, e) : i.on("load", function () {
					hoverAnimation__do(n, e)
				})
			})
		}
		hoverAnimation();
	}


	// 19 .service panel animation //
	let sv = gsap.matchMedia();
	sv.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let projectpanels = document.querySelectorAll('.tp-service-panel');
		let baseOffset = 150;
		let offsetIncrement = 120;

		projectpanels.forEach((section, index) => {
			let topOffset = baseOffset + (index * offsetIncrement);
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: `top ${topOffset}px`,
					end: "bottom 120%",
					endTrigger: '.tp-service-pin',
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});


	// 20. panel pin section //
	let pr = gsap.matchMedia();

	pr.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let panels = document.querySelectorAll('.tp-panel-pin');

		panels.forEach((section) => {

			// default value
			let defaultStart = "top 10%";
			let defaultEnd   = "bottom 99%";

			// if attribute exists → override
			let startVal = section.dataset.start || defaultStart;
			let endVal   = section.dataset.end   || defaultEnd;

			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: startVal,
					end: endVal,
					endTrigger: '.tp-panel-pin-area',
					pinSpacing: false,
					markers: false,
				}
			});

		});
	});

	// 21. stack panel pin section //
	let st = gsap.matchMedia();
	st.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let panels = document.querySelectorAll('.stack-panel-pin')
		panels.forEach((section, index) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 0%',
					end: "bottom 100%",
					endTrigger: '.stack-panel-pin-area',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});

	// 22. hero animation //
	let tl = gsap.timeline();
	let hr = gsap.matchMedia();
	hr.add("(min-width: 768px)", () => {
		let panels = document.querySelectorAll('.tp-hero-2-area')
		panels.forEach((section, index) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: '.tp-hero-2-wrapper',
					pin: '.tp-hero-2-area',
					scrub: 1,
					start: 'top 0',
					end: "bottom 0%",
					endTrigger: '.tp-hero-2-wrapper',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});

	// 23. pp-top-wrap //
	let t = gsap.timeline();
	let p = gsap.matchMedia();
	hr.add("(min-width: 992px)", () => {
		let panels = document.querySelectorAll('.pp-top-wrap')
		panels.forEach((section, index) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: '.pp-top-wrap',
					pin: '.pp-about-me-area',
					scrub: 1,
					start: 'top 0',
					end: "bottom 0%",
					endTrigger: '.pp-top-wrap',
					pinSpacing: false,
					markers: false,
				},
			})
		})
	});

	// 24. tp-funfact-panel //
	let pp = gsap.matchMedia();
	pp.add("(min-width: 1200px)", () => {
		if ($('.tp-funfact-panel-wrap').length) {
			let sections = gsap.utils.toArray(".tp-funfact-panel");
				gsap.to(sections, {
				xPercent: -100 * (sections.length - 1),
				ease: "none",
				scrollTrigger: {
					start: "top 70px",
					trigger: ".tp-funfact-panel-wrap",
					pin: true,
					scrub: 1,
					end: () => "+=" + document.querySelector(".tp-funfact-panel-wrap").offsetWidth
				}
			});
		}
	});


	// 24. video-hover //
	let vd = gsap.matchMedia();
	vd.add("(min-width: 1199px)", () => {
		if ($('.tp-video-area').length) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-video-area",
					scrub: 1,
					pin: true,
					start: "top 40px",
					end: "+=100%"
				}
			})
			.to(".tp-video-thumb-wrap", {
				scale: 3.2,
				ease: "none"
			})
		}
	});

	// 25. hover reveal for image //
	const hoverItem = document.querySelectorAll(".hover-reveal-item");
	function moveImage(e, hoverItem) {
		const item = hoverItem.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverItem.children[1]) {
			hoverItem.children[1].style.transform = `translate(${x}px, ${y}px)`;
		}
	}
	hoverItem.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveImage(e, item), 100);
		});
	});


	// 26. button bounce animation //
	if ($('.tp-bounce-trigger').length > 0) {
		gsap.set(".tp-bounce", { y: -80, opacity: 0 });
		let mybtn = gsap.utils.toArray(".tp-bounce");
		mybtn.forEach((btn) => {
			let $this = $(btn);
			let tp_delay_value = $this[0].getAttribute("data-delay") || 1;
			gsap.to(btn, {
				scrollTrigger: {
					trigger: $this.closest('.tp-bounce-trigger'),
					start: "top center",
					markers: false
				},
				duration: 1.5,
				delay: tp_delay_value,
				ease: "bounce.out",
				y: 0,
				opacity: 1,
			});
		});
	}

	// 27. carachter Animation //
	if ($('.tp-char-animation').length > 0) {
		let char_come = gsap.utils.toArray(".tp-char-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});
			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" })
			tl.from(itemSplitted.chars,
				{
					duration: 1,
					delay: 0.5,
					x: 100,
					autoAlpha: 0,
					stagger: 0.05
				});
		});
	}
if ($(".tp_fade_anim").length > 0) {
  gsap.utils.toArray(".tp_fade_anim").forEach((item) => {
    let offset = parseFloat(item.getAttribute("data-fade-offset")) || 40,
        duration = parseFloat(item.getAttribute("data-duration")) || 0.75,
        direction = item.getAttribute("data-fade-from") || "bottom",
        onScroll = item.getAttribute("data-on-scroll") || 1,
        delay = parseFloat(item.getAttribute("data-delay")) || 0.15,
        ease = item.getAttribute("data-ease") || "power2.out";

    let x = 0, y = 0;

    // 🔥 Handle multiple directions
    if (direction.includes("left")) x = -offset;
    if (direction.includes("right")) x = offset;
    if (direction.includes("top")) y = -offset;
    if (direction.includes("bottom")) y = offset;

    let animSettings = {
      opacity: 0,
      x: x,
      y: y,
      duration: duration,
      delay: delay,
      ease: ease,
    };

    if (onScroll == 1) {
      animSettings.scrollTrigger = {
        trigger: item,
        start: "top 85%",
      };
    }

    gsap.from(item, animSettings);
  });
}

	// 28. fade-class-active //
	if ($(".tp_fade_anim_r").length > 0) {
		gsap.utils.toArray(".tp_fade_anim_r").forEach((item) => {
			let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
				tp_duration_value = item.getAttribute("data-duration") || 0.75,
				tp_fade_direction = item.getAttribute("data-fade-from") || "right",
				tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
				tp_delay_value = item.getAttribute("data-delay") || 0.15,
				tp_ease_value = item.getAttribute("data-ease") || "power2.out",
				tp_anim_setting = {
					opacity: 0,
					ease: tp_ease_value,
					duration: tp_duration_value,
					delay: tp_delay_value,
					x: (tp_fade_direction == "left" ? -tp_fade_offset : (tp_fade_direction == "right" ? tp_fade_offset : 0)),
					y: (tp_fade_direction == "top" ? -tp_fade_offset : (tp_fade_direction == "bottom" ? tp_fade_offset : 0)),
			    };
			if (tp_onscroll_value == 1) {
				tp_anim_setting.scrollTrigger = {
					trigger: item,
					start: 'top 85%',
				};
			}
			gsap.from(item, tp_anim_setting);
		});
	}

	// 29. text animation paragraph //
	if ($('.tp_text_anim p').length > 0) {
		let splitTextLines = gsap.utils.toArray(".tp_text_anim p");
		splitTextLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					duration: 2,
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});
			const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
			gsap.set(splitTextLine, { perspective: 400 });
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, {
				duration: 1,
				delay: 0.2,
				opacity: 0,
				rotationX: -80,
				force3D: true,
				transformOrigin: "top center -50",
				stagger: 0.1
			});
		});
	}

	// 30. text bounce animation //
	if ($('.tp-text-bounce-trigger').length > 0) {
		gsap.set(".tp-text-bounce", { y: 100, opacity: 0 });
		let mybtn = gsap.utils.toArray(".tp-text-bounce");
		mybtn.forEach((btn) => {
			let $this = $(btn);
			let tp_delay_value = $this[0].getAttribute("data-delay") || 0.15;
			gsap.to(btn, {
				scrollTrigger: {
					trigger: $this.closest('.tp-text-bounce-trigger'),
					start: "top center",
					markers: false
				},
				duration: 1,
				delay: parseFloat(tp_delay_value),
				ease: "back.out(1.7)",
				y: 0,
				opacity: 1,
			});
		});
	}

	



})(jQuery);