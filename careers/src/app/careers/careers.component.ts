import {Component, OnInit, PLATFORM_ID, Renderer2, ElementRef, AfterViewInit, OnDestroy, ViewChild, Inject, ViewChildren, QueryList, HostListener, NgZone} from '@angular/core';
import { Mousewheel, Autoplay } from 'swiper/modules';

// declare var $;
// tslint:disable-next-line:ban-types
declare let whr: Function;
// tslint:disable-next-line:ban-types
declare let whr_embed: Function;

interface Slide {
  img: string;
  alt: string;
  caption: string;
  hasVideo?: boolean;
  videoSrc?: string;
  shortVideoSrc?: string;
  poster?: string;
}

export interface Award {
  id: string;
  alt: string;
  src: string;
  link: string;
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
    },
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
    { src: 'lasf-11.png',               alt: 'Life at SmartFinancial' },
    
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

  @ViewChild('videoEl') videoEl!: ElementRef<HTMLVideoElement>;
 // ── Award Slider ─────────────────────────────────────────────────


  @ViewChild('testimonialsSwiper') testimonialsSwiperRef!: ElementRef;
  @ViewChild('lifeMainSwiper') lifeSwiperRef!: ElementRef;
  @ViewChild('lifeThumbsSwiper') lifeThumbsSwiperRef!: ElementRef;

  readonly pressawards: Award[] = [
    { id: 'webawards',   link: 'https://www.webaward.org/winner/37227/smartfinancial-wins-2024-webaward-for-smartfinancial.html',   src: 'assets/images/awardsnew/webawards.png', alt: 'Web Awards' },
    { id: 'socal',       link: 'https://bestcompaniesgroup.com/best-places-to-work-southern-california/winners/',   src: 'assets/images/awardsnew/Best-Places-to-Work-SoCal-2026.png',   alt: 'Best Places to Work SoCal 2026' },
    { id: 'deloitte',    link: 'https://www2.deloitte.com/us/en/pages/technology-media-and-telecommunications/articles/fast500-winners.html',    src: 'assets/images/awardsnew/deloitte.png',  alt: 'Deloitte' },
    { id: 'ey',          link: 'http://www.prweb.com/releases/2022/6/prweb18749564.htm',          src: 'assets/images/awardsnew/EOY-2022_Regional-Winner.png',  alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',   link: 'https://www.prweb.com/releases/2022/7/prweb18778160.htm',   src: 'assets/images/awardsnew/OCBJ-Best-Places-to-Work-Logo_2022.png', alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',        link: 'http://www.greatplacetowork.com/certified-company/7038245',        src: 'assets/images/awardsnew/great-place-to-work.png', alt: 'Great Place to Work Certified' },
    { id: 'oc-register', link: 'https://www.ocregister.com/2020/12/11/top-workplaces-2020-see-the-list-of-orange-countys-winners/', src: 'assets/images/awardsnew/OCR-L-TWP-LOGO-2020.png',  alt: 'Top Work Places OC Register 2020' },
    { id: 'horizon',     link: 'https://www.prlog.org/12763712-horizon-interactive-awards-smartfinancial-in-two-categories.html',     src: 'assets/images/awardsnew/horizon-interactive-awards-logo.png',  alt: 'Horizon Interactive Awards' },
    { id: 'webawards',   link: 'https://www.webaward.org/winner/37227/smartfinancial-wins-2024-webaward-for-smartfinancial.html',   src: 'assets/images/awardsnew/webawards.png', alt: 'Web Awards' },
    { id: 'socal',       link: 'https://bestcompaniesgroup.com/best-places-to-work-southern-california/winners/',   src: 'assets/images/awardsnew/Best-Places-to-Work-SoCal-2026.png',   alt: 'Best Places to Work SoCal 2026' },
    { id: 'deloitte',    link: 'https://www2.deloitte.com/us/en/pages/technology-media-and-telecommunications/articles/fast500-winners.html',    src: 'assets/images/awardsnew/deloitte.png',  alt: 'Deloitte' },
    { id: 'ey',          link: 'http://www.prweb.com/releases/2022/6/prweb18749564.htm',          src: 'assets/images/awardsnew/EOY-2022_Regional-Winner.png',  alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',   link: 'https://www.prweb.com/releases/2022/7/prweb18778160.htm',   src: 'assets/images/awardsnew/OCBJ-Best-Places-to-Work-Logo_2022.png', alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',        link: 'http://www.greatplacetowork.com/certified-company/7038245',        src: 'assets/images/awardsnew/great-place-to-work.png', alt: 'Great Place to Work Certified' },
    { id: 'oc-register', link: 'https://www.ocregister.com/2020/12/11/top-workplaces-2020-see-the-list-of-orange-countys-winners/', src: 'assets/images/awardsnew/OCR-L-TWP-LOGO-2020.png',  alt: 'Top Work Places OC Register 2020' },
    { id: 'horizon',     link: 'https://www.prlog.org/12763712-horizon-interactive-awards-smartfinancial-in-two-categories.html',     src: 'assets/images/awardsnew/horizon-interactive-awards-logo.png',  alt: 'Horizon Interactive Awards' },
    { id: 'webawards',   link: 'https://www.webaward.org/winner/37227/smartfinancial-wins-2024-webaward-for-smartfinancial.html',   src: 'assets/images/awardsnew/webawards.png', alt: 'Web Awards' },
    { id: 'socal',       link: 'https://bestcompaniesgroup.com/best-places-to-work-southern-california/winners/',   src: 'assets/images/awardsnew/Best-Places-to-Work-SoCal-2026.png',   alt: 'Best Places to Work SoCal 2026' },
    { id: 'deloitte',    link: 'https://www2.deloitte.com/us/en/pages/technology-media-and-telecommunications/articles/fast500-winners.html',    src: 'assets/images/awardsnew/deloitte.png',  alt: 'Deloitte' },
    { id: 'ey',          link: 'http://www.prweb.com/releases/2022/6/prweb18749564.htm',          src: 'assets/images/awardsnew/EOY-2022_Regional-Winner.png',  alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',   link: 'https://www.prweb.com/releases/2022/7/prweb18778160.htm',   src: 'assets/images/awardsnew/OCBJ-Best-Places-to-Work-Logo_2022.png', alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',        link: 'http://www.greatplacetowork.com/certified-company/7038245',        src: 'assets/images/awardsnew/great-place-to-work.png', alt: 'Great Place to Work Certified' },
    { id: 'oc-register', link: 'https://www.ocregister.com/2020/12/11/top-workplaces-2020-see-the-list-of-orange-countys-winners/', src: 'assets/images/awardsnew/OCR-L-TWP-LOGO-2020.png',  alt: 'Top Work Places OC Register 2020' },
    { id: 'horizon',     link: 'https://www.prlog.org/12763712-horizon-interactive-awards-smartfinancial-in-two-categories.html',     src: 'assets/images/awardsnew/horizon-interactive-awards-logo.png',  alt: 'Horizon Interactive Awards' },
    { id: 'webawards',   link: 'https://www.webaward.org/winner/37227/smartfinancial-wins-2024-webaward-for-smartfinancial.html',   src: 'assets/images/awardsnew/webawards.png', alt: 'Web Awards' },
    { id: 'socal',       link: 'https://bestcompaniesgroup.com/best-places-to-work-southern-california/winners/',   src: 'assets/images/awardsnew/Best-Places-to-Work-SoCal-2026.png',   alt: 'Best Places to Work SoCal 2026' },
    { id: 'deloitte',    link: 'https://www2.deloitte.com/us/en/pages/technology-media-and-telecommunications/articles/fast500-winners.html',    src: 'assets/images/awardsnew/deloitte.png',  alt: 'Deloitte' },
    { id: 'ey',          link: 'http://www.prweb.com/releases/2022/6/prweb18749564.htm',          src: 'assets/images/awardsnew/EOY-2022_Regional-Winner.png',  alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',   link: 'https://www.prweb.com/releases/2022/7/prweb18778160.htm',   src: 'assets/images/awardsnew/OCBJ-Best-Places-to-Work-Logo_2022.png', alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',        link: 'http://www.greatplacetowork.com/certified-company/7038245',        src: 'assets/images/awardsnew/great-place-to-work.png', alt: 'Great Place to Work Certified' },
    { id: 'oc-register', link: 'https://www.ocregister.com/2020/12/11/top-workplaces-2020-see-the-list-of-orange-countys-winners/', src: 'assets/images/awardsnew/OCR-L-TWP-LOGO-2020.png',  alt: 'Top Work Places OC Register 2020' },
    { id: 'horizon',     link: 'https://www.prlog.org/12763712-horizon-interactive-awards-smartfinancial-in-two-categories.html',     src: 'assets/images/awardsnew/horizon-interactive-awards-logo.png',  alt: 'Horizon Interactive Awards' },
    
   
  ];
  contentVisible = false;

  ngAfterViewInit(): void {
    const video = this.videoEl.nativeElement;

  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;

  video.play().catch(() => {});

    const testimonialEl = this.testimonialsSwiperRef.nativeElement;
    Object.assign(testimonialEl, {
      modules: [Mousewheel],
      slidesPerView: 3.5,
      spaceBetween: 28,
      loop: true,
      navigation: false,
      centeredSlides: true,
      pagination: false,
      grabCursor: true,
      mousewheel: {
        releaseOnEdges: true,
      },
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
      initialSlide: 2,
      slidesPerView: 3,
      loop: true,
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
        0:   { slidesPerView: 1, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 24 },
      },
    });
    lifeMainEl.initialize();

    this.observeEl(this.textBlockEl.nativeElement, 0);
    this.photoEls.forEach((ref, i) =>
      this.observeEl(ref.nativeElement, 200 + i * 160)
    );

    const celebrateEl = this.celebrateSwiperEl.nativeElement as any;
    celebrateEl.addEventListener('swiperslidechange', (e: CustomEvent) => {
      this.ngZone.run(() => {
        const swiper = (e as any).detail[0];
        this.activeIndex = swiper.realIndex;
        this.isVideoLoading = true;
      });
    });
  }

  ngOnDestroy(): void {
    this.observers.forEach(o => o.disconnect());
    this.stopCelebrateLerp();
  }

  onVideoCanPlay(): void {
    if (!this.contentVisible) this.contentVisible = true;
  }

  @ViewChild('textBlock') textBlockEl!: ElementRef<HTMLElement>;
  @ViewChildren('photoEl') photoEls!: QueryList<ElementRef<HTMLElement>>;

  readonly photos: TeamPhoto[] = [
    { src: 'assets/images/careers/beachparty25_2.png', alt: 'SmartFinancial team outing' },
    { src: 'assets/images/careers/beachparty25.png', alt: 'SmartFinancial team group photo' },
    { src: 'assets/images/careers/holidayparty24_0040.png', alt: 'SmartFinancial team celebration' },
  ];

  private observers: IntersectionObserver[] = [];

  // ── Celebrate Harder ──────────────────────────────────────────────────────────

  @ViewChild('swiperEl') celebrateSwiperEl!: ElementRef<HTMLElement>;
  @ViewChild('dragBadge') celebrateBadgeEl!: ElementRef<HTMLElement>;

  slides: Slide[] = [
    { img: '', alt: 'SmartFinancial Beach Party 2025',   caption: 'Beach Party 2025',   hasVideo: true, videoSrc: 'assets/videos/Beach%20Party%202025.mp4',   shortVideoSrc: 'assets/videos/short/Beach%20Party%202025.mp4',   poster: 'assets/images/careers/beachparty25.png' },
    { img: '', alt: 'SmartFinancial Holiday Party 2024', caption: 'Holiday Party 2024', hasVideo: true, videoSrc: 'assets/videos/Holiday%20Party%202024.mp4', shortVideoSrc: 'assets/videos/short/Holiday%20Party%202024.mp4', poster: 'assets/images/careers/holidayparty24_0040.png' },
    { img: '', alt: 'SmartFinancial Holiday Party 2025', caption: 'Holiday Party 2025', hasVideo: true, videoSrc: 'assets/videos/Holiday%20Party%202025.mp4', shortVideoSrc: 'assets/videos/short/Holiday%20Party%202025.mp4', poster: 'assets/images/careers/holidayparty25 Medium.jpeg' },
    { img: '', alt: 'SmartFinancial Beach Party 2024',   caption: 'Beach Party 2024',   hasVideo: true, videoSrc: 'assets/videos/beackparty-2024.mp4',           shortVideoSrc: 'assets/videos/short/beackparty-2024.mp4',           poster: 'assets/images/careers/beachparty25.png' },
  ];

  activeIndex = 0;
  isHovered = false;
  isDragging = false;
  modalOpen = false;
  isVideoLoading = true;

  get activeSlide(): Slide { return this.slides[this.activeIndex]; }

  private celebrateTargetX = 0;
  private celebrateTargetY = 0;
  private celebrateCurrentX = 0;
  private celebrateCurrentY = 0;
  private celebrateRafId: number | null = null;



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

  // ── Celebrate Harder methods ──────────────────────────────────────────────────

  onSwiperEnter(): void {
    this.isHovered = true;
    this.startCelebrateLerp();
  }

  onSwiperLeave(): void {
    this.isHovered = false;
    this.isDragging = false;
    this.stopCelebrateLerp();
  }

  onSwiperMouseDown(): void { this.isDragging = true; }
  onSwiperMouseUp(): void   { this.isDragging = false; }

  onMouseMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.celebrateTargetX = event.clientX - rect.left;
    this.celebrateTargetY = event.clientY - rect.top;
  }

  openModal(event?: MouseEvent): void {
    if (event) event.stopPropagation();
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.modalOpen) this.closeModal();
  }

  private startCelebrateLerp(): void {
    if (this.celebrateRafId !== null) return;
    this.ngZone.runOutsideAngular(() => {
      const tick = () => {
        this.celebrateCurrentX += (this.celebrateTargetX - this.celebrateCurrentX) * 0.12;
        this.celebrateCurrentY += (this.celebrateTargetY - this.celebrateCurrentY) * 0.12;
        if (this.celebrateBadgeEl?.nativeElement) {
          this.celebrateBadgeEl.nativeElement.style.transform =
            `translate(calc(${this.celebrateCurrentX}px - 50%), calc(${this.celebrateCurrentY}px - 50%))`;
        }
        this.celebrateRafId = requestAnimationFrame(tick);
      };
      this.celebrateRafId = requestAnimationFrame(tick);
    });
  }

  private stopCelebrateLerp(): void {
    if (this.celebrateRafId !== null) {
      cancelAnimationFrame(this.celebrateRafId);
      this.celebrateRafId = null;
    }
  }

}
