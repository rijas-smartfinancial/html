import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Autoplay, Pagination } from 'swiper/modules';

interface GalleryImage {
  src: string;
  alt: string;
}

interface JourneyMilestone {
  year: string;
  title: string;
  text: string;
  type: 'mascot' | 'map' | 'product' | 'photo';
  image?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Achievement {
  title: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnDestroy {

  @ViewChild('aboutSwiper') aboutSwiperRef!: ElementRef;
  @ViewChild('journeySwiper') journeySwiperRef!: ElementRef;
  @ViewChild('achievementsSwiper') achievementsSwiperRef!: ElementRef;
  @ViewChild('missionStatement') missionStatementRef?: ElementRef<HTMLElement>;

  private missionWords: HTMLElement[] = [];
  private missionScrollTicking = false;
  private readonly handleMissionScroll = (): void => {
    if (this.missionScrollTicking) return;
    this.missionScrollTicking = true;
    requestAnimationFrame(() => {
      this.updateMissionReveal();
      this.missionScrollTicking = false;
    });
  };

  readonly galleryImages: GalleryImage[] = [
    { src: 'assets/images/about/about-pic1.jpg', alt: 'SmartFinancial team at an insurance marketplace booth' },
    { src: 'assets/images/about/about-pic2.jpg', alt: 'SmartFinancial team celebrating at a company event' },
    { src: 'assets/images/about/about-pic3.jpg', alt: 'SmartFinancial team at a beach party' },
    { src: 'assets/images/about/about-pic1.jpg', alt: 'SmartFinancial team at an insurance marketplace booth' },
    { src: 'assets/images/about/about-pic2.jpg', alt: 'SmartFinancial team celebrating at a company event' },
    { src: 'assets/images/about/about-pic3.jpg', alt: 'SmartFinancial team at a beach party' },

  ];

  readonly journeyMilestones: JourneyMilestone[] = [
    {
      year: '2012',
      title: 'The Beginning',
      text: 'SmartFinancial founded with a vision to transform insurance distribution through technology.',
      type: 'photo',
      image: 'assets/images/about/journey-img-1.png',
    },
    {
      year: '2017',
      title: 'National Expansion',
      text: 'Expanded agent network to all 50 states, establishing partnerships with leading insurance carriers.',
     type: 'photo',
      image: 'assets/images/about/journey-img-2.png',
    },
    {
      year: '2019',
      title: 'Insurance.io Launch',
      text: 'Introduced proprietary infrastructure powering real-time matching, routing, and performance optimization across the marketplace.',
      type: 'photo',
      image: 'assets/images/about/journey-img-3.png',
    },
    {
      year: '2021',
      title: 'Strategic Investment',
      text: 'Secured strategic investment to accelerate platform growth and expand our reach across the industry.',
      type: 'photo',
      image: 'assets/images/about/journey-img-4.png',
    },
    {
      year: '2024',
      title: 'Continued Growth',
      text: 'Today, SmartFinancial powers connections between millions of shoppers and thousands of agents nationwide.',
      type: 'photo',
      image: 'assets/images/about/journey-img-4.png',
    },
  ];

  readonly teamMembers: TeamMember[] = [
    { name: 'Lev Barinskiy', role: 'CEO & Co-Founder', image: 'assets/images/about/leadership-thumbnail-lev.png' },
    { name: 'Nate Kropp', role: 'CTO & Co-Founder', image: 'assets/images/about/leadership-thumbnail-nate.png' },
    { name: 'Brad Cooper', role: 'COO', image: 'assets/images/about/leadership-thumbnail-brad.png' },
    { name: 'Ryan Lockwood', role: 'CFO', image: 'assets/images/about/leadership-thumbnail-ryan.png' },
    { name: 'Michael Foster', role: 'CRO', image: 'assets/images/about/leadership-thumbnail-michael.png' },
    { name: 'Yogesh Pendharkar', role: 'Head of Engineering', image: 'assets/images/about/leadership-thumbnail-yogesh.png' },
    { name: 'Ben Wang', role: 'SVP Retail Operations', image: 'assets/images/about/leadership-thumbnail-ben.png' },
    { name: 'Geoff Troidl', role: 'VP Demand Generation', image: 'assets/images/about/leadership-thumbnail-geoff.png' },
    { name: 'Sheena Apte', role: 'Sr. Director of People Operations', image: 'assets/images/about/leadership-thumbnail-sheena.png' },
  ];

  readonly achievements: Achievement[] = [
    { title: '2024 Best Insurance Website', image: 'assets/images/about/award-img-1.png', link: 'https://www.webaward.org/winner/37227/smartfinancial-wins-2024-webaward-for-smartfinancial.html' },
    { title: '2023 Best Places to Work', image: 'assets/images/about/award-img-2.png', link: 'https://bestcompaniesgroup.com/best-places-to-work-southern-california/winners/' },
    { title: 'Deloitte Technology Fast 500 winners', image: 'assets/images/about/award-img-3.png', link: 'https://www2.deloitte.com/us/en/pages/technology-media-and-telecommunications/articles/fast500-winners.html' },
    { title: '2022 EY Entrepreneur of the Year', image: 'assets/images/about/award-img-4.png', link: 'http://www.prweb.com/releases/2022/6/prweb18749564.htm' },
    { title: '2022 OCBJ Best Places to Work', image: 'assets/images/about/award-img-5.png', link: 'https://www.prweb.com/releases/2022/7/prweb18778160.htm' },
    { title: '2021 Great Places to Work', image: 'assets/images/about/award-img-6.png', link: 'http://www.greatplacetowork.com/certified-company/7038245' },
    { title: '2021 Great Places to Work', image: 'assets/images/about/award-img-7.jpg', link: 'https://www.ocregister.com/2020/12/11/top-workplaces-2020-see-the-list-of-orange-countys-winners/' },
    { title: '2021 Great Places to Work', image: 'assets/images/about/award-img-8.jpg', link: 'https://www.prlog.org/12789943-smartfinancial-wins-2nd-best-places-to-work-2019.html' },
    { title: '2021 Great Places to Work', image: 'assets/images/about/award-img-9.jpg', link: 'http://www.webaward.org/winner/35844/smartfinancial-wins-2021-webaward-for-smartfinancial.html#.Yxtp03bMKM_' },
    { title: '2021 Great Places to Work', image: 'assets/images/about/award-img-10.jpg', link: 'http://www.webaward.org/winner/35844/smartfinancial-wins-2021-webaward-for-smartfinancial.html#.Yxtp03bMKM_' },
    { title: '2021 Great Places to Work', image: 'assets/images/about/award-img-11.jpg', link: 'https://www.prlog.org/12706107-contactability-insurance-website-smartfinancialcom-honored-as-silver-stevie-award-winner.html' },


  ];

  ngAfterViewInit(): void {
    const swiperEl = this.aboutSwiperRef.nativeElement;
    Object.assign(swiperEl, {
      modules: [Autoplay, Pagination],
      slidesPerView: 1.15,
      centeredSlides: true,
      spaceBetween: 16,
      loop: true,
      grabCursor: true,
      autoplay: { delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { clickable: true, dynamicBullets: true },
      breakpoints: {
        0: { slidesPerView: 1.5, spaceBetween: 16 },
        576: { slidesPerView: 1.6, spaceBetween: 20 },
        992: { slidesPerView: 3, spaceBetween: 24 },
      },
    });
    swiperEl.initialize();

    const journeySwiperEl = this.journeySwiperRef.nativeElement;
    Object.assign(journeySwiperEl, {
      modules: [Autoplay, Pagination],
      slidesPerView: 1.15,
      spaceBetween: 48,
      loop: false,
      grabCursor: true,
      autoplay: { delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true },
      pagination: { clickable: true, dynamicBullets: true },
      breakpoints: {
        0: { slidesPerView: 1.5, spaceBetween: 12 },
        576: { slidesPerView: 1.8, spaceBetween: 20 },
        992: { slidesPerView: 2.4, spaceBetween: 24 },
        1200: { slidesPerView: 4.3, spaceBetween: 48 },
      },
    });
    journeySwiperEl.initialize();

    const achievementsSwiperEl = this.achievementsSwiperRef.nativeElement;
    Object.assign(achievementsSwiperEl, {
      modules: [Autoplay],
      slidesPerView: 1.6,
      spaceBetween: 20,
      loop: false,
      grabCursor: true,
      autoplay: { delay: 2600, disableOnInteraction: false, pauseOnMouseEnter: true },
      breakpoints: {
        0: { slidesPerView: 1.6, spaceBetween: 16 },
        576: { slidesPerView: 2.4, spaceBetween: 20 },
        768: { slidesPerView: 3.5, spaceBetween: 24 },
        992: { slidesPerView: 6.5, spaceBetween: 24 },
        1200: { slidesPerView: 6.5, spaceBetween: 48 },
      },
    });
    achievementsSwiperEl.initialize();

    this.setupMissionReveal();
    this.observeTrustStats();
  }
    private observeTrustStats(): void {
    const stats = document.querySelectorAll('.fadeUp, .zoomIn');
    if (!stats.length) {
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add('is-visible');
          target.addEventListener('animationend', () => {
            target.classList.add('reveal-done');
          }, { once: true });
          obs.unobserve(target);
        }
      });
    }, { threshold: 0.2 });

    stats.forEach(stat => observer.observe(stat));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleMissionScroll);
    window.removeEventListener('resize', this.handleMissionScroll);
  }

  private setupMissionReveal(): void {
    const container = this.missionStatementRef?.nativeElement;
    if (!container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.wrapWordsInElement(container);
    this.missionWords = Array.from(container.querySelectorAll<HTMLElement>('.about-mission__word'));

    window.addEventListener('scroll', this.handleMissionScroll, { passive: true });
    window.addEventListener('resize', this.handleMissionScroll);
    this.handleMissionScroll();
  }

  private wrapWordsInElement(root: HTMLElement): void {
    const walk = (node: Node): void => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const text = child.textContent || '';
          if (!text.trim()) return;

          const frag = document.createDocumentFragment();
          text.split(/(\s+)/).forEach((part) => {
            if (part === '') return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(part));
              return;
            }
            const span = document.createElement('span');
            span.className = 'about-mission__word';
            span.textContent = part;
            frag.appendChild(span);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          const el = child as HTMLElement;
          if (el.tagName.toLowerCase() === 'svg') return;
          walk(el);
        }
      });
    };
    walk(root);
  }

  private updateMissionReveal(): void {
    const container = this.missionStatementRef?.nativeElement;
    if (!container || !this.missionWords.length) return;

    const rect = container.getBoundingClientRect();
    const windowH = window.innerHeight;
    const start = windowH * 0.85;
    const end = windowH * 0.4;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
    const revealCount = Math.round(progress * this.missionWords.length);

    this.missionWords.forEach((word, i) => {
      word.classList.toggle('is-revealed', i < revealCount);
    });
  }





}
