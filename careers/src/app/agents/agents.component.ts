import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Autoplay } from 'swiper/modules';

interface Carrier {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements AfterViewInit {

  @ViewChild('carriersSwiper') carriersSwiperRef!: ElementRef;

  readonly carriers: Carrier[] = [
    { src: '21st.png', alt: '21st Century Insurance' },
    { src: 'libertymutual.png', alt: 'Liberty Mutual' },
    { src: 'dairyland.png', alt: 'Dairyland' },
    { src: 'formost.png', alt: 'Foremost Insurance' },
    { src: 'national_general.png', alt: 'National General' },
    { src: 'amirican_family.png', alt: 'American Family Insurance' },
    { src: 'lemonade.png', alt: 'Lemonade' },
    { src: 'nationwide.jpg', alt: 'Nationwide' },
    { src: 'hiscox.jpg', alt: 'Hiscox' },

  ];

  ngAfterViewInit(): void {
    // const carriersEl = this.carriersSwiperRef.nativeElement;
    // Object.assign(carriersEl, {
    //   modules: [Autoplay],
    //   loop: true,
    //   speed: 5000,
    //   autoplay: {
    //     delay: 0,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: false,
    //   },
    //   breakpoints: {
    //     0: { slidesPerView: 1, spaceBetween: 16, allowTouchMove: true, simulateTouch: true },
    //     992: { slidesPerView: 3, spaceBetween: 40, allowTouchMove: false, simulateTouch: false },
    //   },
    // });
    // carriersEl.initialize();

    this.observeTrustStats();
  }

  private observeTrustStats(): void {
    const stats = document.querySelectorAll('.agents-trust__stat');
    if (!stats.length) {
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    stats.forEach(stat => observer.observe(stat));
  }

}
