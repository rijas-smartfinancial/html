import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

export interface Award {
  id: string;
  alt: string;
  src: string;
}

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements AfterViewInit {
  @ViewChild('awardsSwiper') swiperRef!: ElementRef;

  readonly awards: Award[] = [
    { id: 'webawards',   src: 'assets/awards/webawards.png',                        alt: 'Web Awards' },
    { id: 'socal',       src: 'assets/awards/Best-Places-to-Work-SoCal-2026.png',   alt: 'Best Places to Work SoCal 2026' },
    { id: 'deloitte',    src: 'assets/awards/deloitte.png',                         alt: 'Deloitte' },
    { id: 'ey',          src: 'assets/awards/EOY-2022_Regional-Winner.png',         alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',   src: 'assets/awards/OCBJ-Best-Places-to-Work-Logo_2022.png', alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',        src: 'assets/awards/great-place-to-work.png',              alt: 'Great Place to Work Certified' },
    { id: 'oc-register', src: 'assets/awards/OCR-L-TWP-LOGO-2020.png',             alt: 'Top Work Places OC Register 2020' },
    { id: 'horizon',     src: 'assets/awards/horizon-interactive-awards-logo.png',  alt: 'Horizon Interactive Awards' },
    { id: 'webawards',   src: 'assets/awards/webawards.png',                        alt: 'Web Awards' },
    { id: 'socal',       src: 'assets/awards/Best-Places-to-Work-SoCal-2026.png',   alt: 'Best Places to Work SoCal 2026' },
    { id: 'deloitte',    src: 'assets/awards/deloitte.png',                         alt: 'Deloitte' },
    { id: 'ey',          src: 'assets/awards/EOY-2022_Regional-Winner.png',         alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',   src: 'assets/awards/OCBJ-Best-Places-to-Work-Logo_2022.png', alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',        src: 'assets/awards/great-place-to-work.png',              alt: 'Great Place to Work Certified' },
    { id: 'oc-register', src: 'assets/awards/OCR-L-TWP-LOGO-2020.png',             alt: 'Top Work Places OC Register 2020' },
    { id: 'horizon',     src: 'assets/awards/horizon-interactive-awards-logo.png',  alt: 'Horizon Interactive Awards' },
    { id: 'webawards',   src: 'assets/awards/webawards.png',                        alt: 'Web Awards' },
    { id: 'socal',       src: 'assets/awards/Best-Places-to-Work-SoCal-2026.png',   alt: 'Best Places to Work SoCal 2026' },
    { id: 'deloitte',    src: 'assets/awards/deloitte.png',                         alt: 'Deloitte' },
    { id: 'ey',          src: 'assets/awards/EOY-2022_Regional-Winner.png',         alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',   src: 'assets/awards/OCBJ-Best-Places-to-Work-Logo_2022.png', alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',        src: 'assets/awards/great-place-to-work.png',              alt: 'Great Place to Work Certified' },
    { id: 'oc-register', src: 'assets/awards/OCR-L-TWP-LOGO-2020.png',             alt: 'Top Work Places OC Register 2020' },
    { id: 'horizon',     src: 'assets/awards/horizon-interactive-awards-logo.png',  alt: 'Horizon Interactive Awards' },
  ];

  ngAfterViewInit(): void {
    const swiperEl = this.swiperRef.nativeElement;
    Object.assign(swiperEl, {
      slidesPerView: 'auto',
      spaceBetween: 56,
      loop: true,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
      allowTouchMove: true,
      grabCursor: true,
    });
    swiperEl.initialize();
  }
}
