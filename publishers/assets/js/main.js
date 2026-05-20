/* ============================================================
   SmartFinancial Publishers – main.js
   GSAP 3 + ScrollTrigger + ScrollToPlugin
   ============================================================ */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ------------------------------------------------------------
   Smooth scroll for anchor links
   ------------------------------------------------------------ */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var href = this.getAttribute('href');
    if (href.length < 2) return;
    var target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    gsap.to(window, {
      scrollTo: { y: target, offsetY: 72 },
      duration: 1.1,
      ease: 'power3.inOut'
    });
  });
});

/* ------------------------------------------------------------
   Navbar scroll class
   ------------------------------------------------------------ */
ScrollTrigger.create({
  start: 80,
  onEnter: function () { document.querySelector('.sf-navbar').classList.add('scrolled'); },
  onLeaveBack: function () { document.querySelector('.sf-navbar').classList.remove('scrolled'); }
});

/* ------------------------------------------------------------
   Page load: navbar + hero entrance
   ------------------------------------------------------------ */
var heroTl = gsap.timeline({ delay: 0.15 });

heroTl
  .from('.sf-navbar', { y: -56, opacity: 0, duration: 0.7, ease: 'power3.out' })
  // .from('.earnings-card', { y: 36, opacity: 0, duration: 0.75, ease: 'power3.out' }, '-=0.3')
  .from('.hero-title',    { y: 32, opacity: 0, duration: 0.7,  ease: 'power3.out' }, '-=0.5')
  .from('.hero-desc',     { y: 24, opacity: 0, duration: 0.65, ease: 'power3.out' }, '-=0.45')
  .from('.hero-ctas',     { y: 20, opacity: 0, duration: 0.6,  ease: 'power3.out' }, '-=0.4')
  // .from('.payment-badge', { y: 16, opacity: 0, duration: 0.5,  ease: 'power3.out' }, '-=0.35')
  .from('.hero-img',      { x: 56, opacity: 0, duration: 0.9,  ease: 'power3.out' }, '-=1.0');

/* ------------------------------------------------------------
   Earnings counter animation
   ------------------------------------------------------------ */
// var counterEl = document.getElementById('earningsCounter');
// var counterDone = false;

// ScrollTrigger.create({
//   trigger: '#earningsCard',
//   start: 'top 85%',
//   once: true,
//   onEnter: function () {
//     if (counterDone) return;
//     counterDone = true;
//     var obj = { val: 0 };
//     gsap.to(obj, {
//       val: 4034,
//       duration: 2,
//       ease: 'power2.out',
//       onUpdate: function () {
//         counterEl.textContent = '$' + Math.round(obj.val).toLocaleString();
//       }
//     });
//   }
// });

/* ------------------------------------------------------------
   Helper: batch reveal-up elements inside a section
   ------------------------------------------------------------ */
function revealSection(triggerEl, targets, stagger) {
  stagger = stagger || 0;
  gsap.to(targets, {
    y: 0,
    opacity: 1,
    duration: 0.75,
    ease: 'power3.out',
    stagger: stagger,
    scrollTrigger: {
      trigger: triggerEl,
      start: 'top 82%',
      once: true
    }
  });
}

/* ------------------------------------------------------------
   Earn More section
   ------------------------------------------------------------ */
revealSection('.earn-section', '.earn-section .section-title');
revealSection('.earn-section', '.earn-section .section-desc');
revealSection('.dashboard-wrap', '.dashboard-img');

gsap.to('.feature-grid .feature-item', {
  y: 0,
  opacity: 1,
  duration: 0.7,
  ease: 'power3.out',
  stagger: 0.12,
  scrollTrigger: { trigger: '.feature-grid', start: 'top 82%', once: true }
});

/* ------------------------------------------------------------
   Maximize Revenue
   ------------------------------------------------------------ */
revealSection('.maximize-section', '.maximize-section .section-title');
revealSection('.maximize-section', '.maximize-section .section-desc');

gsap.to('.maximize-section .maximize-card', {
  y: 0,
  opacity: 1,
  duration: 0.75,
  ease: 'power3.out',
  stagger: 0.15,
  scrollTrigger: { trigger: '.maximize-section .row', start: 'top 82%', once: true }
});

/* ------------------------------------------------------------
   Everything You Need
   ------------------------------------------------------------ */
revealSection('.needs-section', '.needs-section .section-title');

gsap.to('.needs-section .needs-card', {
  y: 0,
  opacity: 1,
  duration: 0.7,
  ease: 'power3.out',
  stagger: 0.1,
  scrollTrigger: { trigger: '.needs-section .row', start: 'top 82%', once: true }
});

/* ------------------------------------------------------------
   3 Steps
   ------------------------------------------------------------ */
revealSection('.steps-section', '.steps-section .section-title');
revealSection('.steps-section', '.steps-section .section-desc');

gsap.to('.steps-section .step-card', {
  y: 0,
  opacity: 1,
  duration: 0.75,
  ease: 'power3.out',
  stagger: 0.18,
  scrollTrigger: { trigger: '.steps-section .row', start: 'top 82%', once: true }
});
gsap.to('.steps-section.reveal-up', {
  y: 0,
  opacity: 1,
  duration: 0.7,
  ease: 'power3.out',
  stagger: 0.15,
  scrollTrigger: { trigger: '.steps-section', start: 'top 85%', once: true }
});

/* ------------------------------------------------------------
   Testimonial – slide in from sides
   ------------------------------------------------------------ */
gsap.from('.testimonial-img-col', {
  x: -64,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.testimonial-section', start: 'top 78%', once: true }
});
gsap.from('.testimonial-content-col', {
  x: 64,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.testimonial-section', start: 'top 78%', once: true }
});

/* ------------------------------------------------------------
   CTA Banner
   ------------------------------------------------------------ */
gsap.to('.cta-banner .reveal-up', {
  y: 0,
  opacity: 1,
  duration: 0.7,
  ease: 'power3.out',
  stagger: 0.15,
  scrollTrigger: { trigger: '.cta-banner', start: 'top 85%', once: true }
});

/* ------------------------------------------------------------
   Publisher Team – staggered photo reveal
   ------------------------------------------------------------ */
revealSection('.team-section', '.team-section .section-title');

gsap.to('.team-section .team-member', {
  y: 0,
  opacity: 1,
  duration: 0.65,
  ease: 'power3.out',
  stagger: 0.07,
  scrollTrigger: { trigger: '.team-section .row', start: 'top 82%', once: true }
});


/* ------------------------------------------------------------
   Parallax on hero image (subtle)
   ------------------------------------------------------------ */
// gsap.to('.hero-img', {
//   yPercent: -12,
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.hero-section',
//     start: 'top top',
//     end: 'bottom top',
//     scrub: 1.5
//   }
// });

/* ------------------------------------------------------------
   Refresh ScrollTrigger after fonts/images load
   ------------------------------------------------------------ */
window.addEventListener('load', function () {
  ScrollTrigger.refresh();
});
