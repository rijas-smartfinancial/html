import {Component, OnInit, PLATFORM_ID, Renderer2, ElementRef, AfterViewInit, OnDestroy, ViewChild, NgZone, Inject, ViewChildren, QueryList} from '@angular/core';

// declare var $;
// tslint:disable-next-line:ban-types
declare let whr: Function;
// tslint:disable-next-line:ban-types
declare let whr_embed: Function;

export interface Award {
  id: string;
  alt: string;
  src: string;
}
export interface TeamPhoto {
  src: string;
  alt: string;
}
export interface LifeImage {
  src: string;
  alt: string;
}
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})

export class CareersComponent implements OnInit,  AfterViewInit, OnDestroy {

  secondary_nav = [
    {text: 'Join Us', id: 'join-us'},
    {text: 'Why Work With Us?', id: 'why-work-with-us'},
    {text: 'Testimonials', id: 'testimonials'},
    {text: 'Perks', id: 'perks'},
    {text: 'Our Offices', id: 'our-offices'},
    {text: 'Job Opportunities', id: 'job-opportunities'}
  ];
  active_section = '';
  active_section_text = '';
  secondary_nav_expanded = false;
  secondary_nav_affixed = false;

  columbusJobs = [];
  costaMesaJobs = [];
  allJobs = {};
  otherJobs = [];

  
  testimonials = [
    {
      title: '\"The amazing work-life balance.',
      text: 'The team culture is awesome and the personal development growth is priceless. I get to work with inspiring colleagues and managers who help us achieve our goals. I also enjoy working with my clients in achieving their big goals, because their success is my success.\"',
      image: 'encarnacion-img.png',
      writer: 'Francesca Encarnacion',
      designation: 'Account Manager'
    },
    {
      title: '\"Everyone makes you feel like family!',
      text: 'We are constantly encouraged and rewarded for our hard work. Training is consistently provided so we can continue to improve ourselves.\"',
      image: 'henney2.jpg',
      writer: 'Ashlie Henney',
      designation: 'Contact Center'
    },
    {
      title: '\"The collaboration, passion and integrity of our team.',
      text: 'We are all dedicated to helping our agents achieve success with their marketing campaigns.\"',
      image: 'leesment-img.png',
      writer: 'Karl Erik Leesment',
      designation: 'Account Manager'
    },
    {
      title: '\"SmartFinancial rewards hard work and dedication.',
      text: 'I have received all the tools I need to be successful along with multiple opportunities to grow and excel in my career in just a short amount of time.\"',
      image: 'navarrete-img.png',
      writer: 'Erika Navarrete',
      designation: 'Account Executive Team Lead'
    },
    {
      title: '\"Fun and rewarding!',
      text: 'SmartFinancial has been the best company I have worked for, and I’ve had the most fun ever the last three years working here. I am granted the autonomy to do what I need to succeed in my position. I feel like I’m part of a family, all the way from our top leadership to the peers I work with everyday.\"',
      image: 'henney1.jpg',
      writer: 'Josh Henney',
      designation: 'Inside Sales Rep'
    },
    {
      title: '\"Helping clients reach their goals.',
      text: 'I\'m proud to represent SmartFinancial and our opportunity that provides agents an easier way to grow their agency, hit targets and earn recognition. Agents partnering with SmartFinancial can anticipate an easy-to-use platform that delivers solid growth opportunities, supported by their very own amazing account manager who\'s main focus is "smiling together & growing together.\"',
      image: 'tackett.jpg',
      writer: 'Michelle Tackett',
      designation: 'Inside Sales Rep'
    }
  ];

  lazy_default = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVQImWP8+vnzfwY0wIQuwMDAwAAAmJID3q86FtgAAAAASUVORK5CYII=';

  lifeImages: LifeImage[] = [
    { src: 'beachparty25_2.png',        alt: 'SmartFinancial Beach Party' },
    { src: 'beachparty25.png',          alt: 'SmartFinancial Beach Party' },
    { src: 'holidayparty24_0040.png',   alt: 'SmartFinancial Holiday Party' },
    { src: 'lasf-1.png',                alt: 'Life at SmartFinancial' },
    { src: 'lasf-2.png',                alt: 'Life at SmartFinancial' },
    { src: 'lasf-3.png',                alt: 'Life at SmartFinancial' },
    { src: 'lasf-4.png',                alt: 'Life at SmartFinancial' },
    { src: 'lasf-5.png',                alt: 'Life at SmartFinancial' },
    { src: 'lasf-6.png',                alt: 'Life at SmartFinancial' },
    { src: 'lasf-7.png',                alt: 'Life at SmartFinancial' },
    { src: 'lasf-8.png',                alt: 'Life at SmartFinancial' },
    { src: 'lasf-9.png',                alt: 'Life at SmartFinancial' },
    { src: 'lasf-10.png',               alt: 'Life at SmartFinancial' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private readonly elementRef: ElementRef,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
   // this.seoService.setTitle('Careers | SmartFinancial', 'careers');
   // this.seoService.setDescription('We are building a more efficient insurance marketplace. If you enjoy solving big problems and achieving ambitious goals, we want you on our team.');
    // if (isPlatformBrowser(this.platformId)) {
    //   this.window.scrollTo(0, 0);
    //   this.helperService.updateNav({type: 1, required: false});
    //   this.loadJobOpenings();
    //   this.generateSidebar();
    //   this.loadTestimonialSlider();
    //   this.loadImageSlider();
    // }
  }

  public loadJobOpenings() {
    const script = this.renderer.createElement('script');
    script.src = 'https://www.workable.com/assets/embed.js';
    script.onload = () => {
      // tslint:disable-next-line:only-arrow-functions
      whr(document).ready(function(){
        whr_embed(628944, {detail: 'titles', base: 'departments', zoom: 'country'});
      });
    };
    this.renderer.appendChild(this.elementRef.nativeElement, script);
  }

  public noVacancy() {
    return JSON.stringify(this.allJobs) === '{}';
  }


  // public generateSidebar() {
  //   this.active_section = this.secondary_nav[0].id;
  //   this.active_section_text = this.secondary_nav[0].text;
  // }

  // public gotoSection(section) {
  //   let topMargin = 124;
  //   if (this.secondary_nav_expanded) {
  //     topMargin = 320;
  //   }
  //   $('html, body').animate({
  //     scrollTop: $('#' + section.id).offset().top - topMargin
  //   }, 1000);
  //   setTimeout(() => {
  //     this.active_section = section.id;
  //     this.active_section_text = section.text;
  //   }, 1200);
  // }

  public toggleNavBar() {
    this.secondary_nav_expanded = this.secondary_nav_expanded !== true;
  }

  @ViewChild('badgeEl') badgeEl!: ElementRef<HTMLElement>;
  @ViewChild('iframeEl') iframeEl!: ElementRef<HTMLIFrameElement>;
 // ── Award Slider ─────────────────────────────────────────────────

  @ViewChild('awardsSwiper') swiperRef!: ElementRef;
  @ViewChild('testimonialsSwiper') testimonialsSwiperRef!: ElementRef;
  @ViewChild('lifeMainSwiper') lifeSwiperRef!: ElementRef;
  @ViewChild('lifeThumbsSwiper') lifeThumbsSwiperRef!: ElementRef;

  readonly pressawards: Award[] = [
    { id: 'webawards',   src: 'assets/images/awardsnew/webawards.png',                        alt: 'Web Awards' },
    { id: 'socal',       src: 'assets/images/awardsnew/Best-Places-to-Work-SoCal-2026.png',   alt: 'Best Places to Work SoCal 2026' },
    { id: 'deloitte',    src: 'assets/images/awardsnew/deloitte.png',                         alt: 'Deloitte' },
    { id: 'ey',          src: 'assets/images/awardsnew/EOY-2022_Regional-Winner.png',         alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',   src: 'assets/images/awardsnew/OCBJ-Best-Places-to-Work-Logo_2022.png', alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',        src: 'assets/images/awardsnew/great-place-to-work.png',              alt: 'Great Place to Work Certified' },
    { id: 'oc-register', src: 'assets/images/awardsnew/OCR-L-TWP-LOGO-2020.png',             alt: 'Top Work Places OC Register 2020' },
    { id: 'horizon',     src: 'assets/images/awardsnew/horizon-interactive-awards-logo.png',  alt: 'Horizon Interactive Awards' },
    { id: 'webawards',   src: 'assets/images/awardsnew/webawards.png',                        alt: 'Web Awards' },
    { id: 'socal',       src: 'assets/images/awardsnew/Best-Places-to-Work-SoCal-2026.png',   alt: 'Best Places to Work SoCal 2026' },
    { id: 'deloitte',    src: 'assets/images/awardsnew/deloitte.png',                         alt: 'Deloitte' },
    { id: 'ey',          src: 'assets/images/awardsnew/EOY-2022_Regional-Winner.png',         alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',   src: 'assets/images/awardsnew/OCBJ-Best-Places-to-Work-Logo_2022.png', alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',        src: 'assets/images/awardsnew/great-place-to-work.png',              alt: 'Great Place to Work Certified' },
    { id: 'oc-register', src: 'assets/images/awardsnew/OCR-L-TWP-LOGO-2020.png',             alt: 'Top Work Places OC Register 2020' },
    { id: 'horizon',     src: 'assets/images/awardsnew/horizon-interactive-awards-logo.png',  alt: 'Horizon Interactive Awards' },
    { id: 'webawards',   src: 'assets/images/awardsnew/webawards.png',                        alt: 'Web Awards' },
    { id: 'socal',       src: 'assets/images/awardsnew/Best-Places-to-Work-SoCal-2026.png',   alt: 'Best Places to Work SoCal 2026' },
    { id: 'deloitte',    src: 'assets/images/awardsnew/deloitte.png',                         alt: 'Deloitte' },
    { id: 'ey',          src: 'assets/images/awardsnew/EOY-2022_Regional-Winner.png',         alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',   src: 'assets/images/awardsnew/OCBJ-Best-Places-to-Work-Logo_2022.png', alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',        src: 'assets/images/awardsnew/great-place-to-work.png',              alt: 'Great Place to Work Certified' },
    { id: 'oc-register', src: 'assets/images/awardsnew/OCR-L-TWP-LOGO-2020.png',             alt: 'Top Work Places OC Register 2020' },
    { id: 'horizon',     src: 'assets/images/awardsnew/horizon-interactive-awards-logo.png',  alt: 'Horizon Interactive Awards' },
   
  ];
  isPaused       = false;
  contentVisible = false;
  badgeVisible   = false;

  private targetX       = 0;
  private targetY       = 0;
  private rafId: number | null = null;
  private readyHandled  = false;
  private msgHandler    = this.onVimeoMessage.bind(this);



  ngAfterViewInit(): void {
    window.addEventListener('message', this.msgHandler);
    // Run the lerp loop outside Angular so rAF never triggers change detection
    this.ngZone.runOutsideAngular(() => this.startLerp());

    const swiperEl = this.swiperRef.nativeElement;
    Object.assign(swiperEl, {
      slidesPerView: 'auto',
      spaceBetween: 80,
      loop: true,
      loopAdditionalSlides: 8,
      speed: 6000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });
    swiperEl.initialize();

    const testimonialEl = this.testimonialsSwiperRef.nativeElement;
    Object.assign(testimonialEl, {
      slidesPerView: 3.5,
      spaceBetween: 28,
      loop: false,
      navigation: false,
      centeredSlides: true,
      pagination: false,
      grabCursor: true,
      autoplay: {
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        0:   { slidesPerView: 1, spaceBetween: 16 },
        992: { slidesPerView: 3.5, spaceBetween: 28 },
      },
    });
    testimonialEl.initialize();

    const lifeThumbsEl = this.lifeThumbsSwiperRef.nativeElement;
    Object.assign(lifeThumbsEl, {
      slidesPerView: 'auto',
      spaceBetween: 8,
      watchSlidesProgress: true,
      freeMode: true,
      loop: false,
    });
    lifeThumbsEl.initialize();

    const lifeMainEl = this.lifeSwiperRef.nativeElement;
    Object.assign(lifeMainEl, {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      thumbs: { swiper: lifeThumbsEl.swiper },
      breakpoints: {
        768:  { slidesPerView: 1, spaceBetween: 20 },
        1200: { slidesPerView:3, spaceBetween: 24 },
      },
    });
    lifeMainEl.initialize();

    this.observeEl(this.textBlockEl.nativeElement, 0);
    this.photoEls.forEach((ref, i) =>
      this.observeEl(ref.nativeElement, 200 + i * 160)
    );
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.msgHandler);
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
     this.observers.forEach(o => o.disconnect());
  }

  // ── Mouse tracking ──────────────────────────────────────────────────────────

  onMouseMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.targetX = event.clientX - rect.left;
    this.targetY = event.clientY - rect.top;

    if (!this.badgeVisible) {
      this.ngZone.run(() => (this.badgeVisible = true));
    }
  }

  onMouseLeave(): void {
    this.ngZone.run(() => (this.badgeVisible = false));
  }

  // ── Pause / play ────────────────────────────────────────────────────────────

  togglePause(): void {
    const win = this.iframeEl?.nativeElement?.contentWindow;
    if (!win) return;
    const method = this.isPaused ? 'play' : 'pause';
    win.postMessage(JSON.stringify({ method }), 'https://player.vimeo.com');
    this.isPaused = !this.isPaused;
  }

  // ── Lerp loop (runs entirely outside Angular zone) ─────────────────────────

  private startLerp(): void {
    const badge = this.badgeEl.nativeElement;
    let x = 0, y = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      x = lerp(x, this.targetX, 0.08);
      y = lerp(y, this.targetY, 0.08);
      badge.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      this.rafId = requestAnimationFrame(tick);
    };

    this.rafId = requestAnimationFrame(tick);
  }

  // ── Vimeo postMessage API ───────────────────────────────────────────────────

  private onVimeoMessage(event: MessageEvent): void {
    if (event.origin !== 'https://player.vimeo.com') return;
    try {
      const raw  = typeof event.data === 'string' ? event.data : '{}';
      const data = JSON.parse(raw);
      const win  = this.iframeEl?.nativeElement?.contentWindow;

      if (data.event === 'ready' && !this.readyHandled) {
        this.readyHandled = true;
        // Seek to the 00:50 timestamp (beach party scene)
        win?.postMessage(
          JSON.stringify({ method: 'setCurrentTime', value: 50 }),
          'https://player.vimeo.com'
        );
        // Subscribe to play event so we know when video is actually rendering
        win?.postMessage(
          JSON.stringify({ method: 'addEventListener', value: 'play' }),
          'https://player.vimeo.com'
        );
      }

      // Trigger text animation the first time the video plays
      if (data.event === 'play' && !this.contentVisible) {
        this.ngZone.run(() => (this.contentVisible = true));
      }
    } catch { /* malformed message — ignore */ }
  }
  
 

  @ViewChild('textBlock') textBlockEl!: ElementRef<HTMLElement>;
  @ViewChildren('photoEl') photoEls!: QueryList<ElementRef<HTMLElement>>;

  readonly photos: TeamPhoto[] = [
    { src: 'assets/images/careers/beachparty25_2.png', alt: 'SmartFinancial team outing' },
    { src: 'assets/images/careers/beachparty25.png', alt: 'SmartFinancial team group photo' },
    { src: 'assets/images/careers/holidayparty24_0040.png', alt: 'SmartFinancial team celebration' },
  ];

  private observers: IntersectionObserver[] = [];



  private observeEl(el: HTMLElement, delay: number): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('is-visible'), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    this.observers.push(observer);
  }


}
