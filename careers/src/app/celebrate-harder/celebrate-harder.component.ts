import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';

interface Slide {
  img: string;
  alt: string;
  caption: string;
  hasVideo?: boolean;
  videoSrc?: string;
  poster?: string;
}

@Component({
  selector: 'app-celebrate-harder',
  templateUrl: './celebrate-harder.component.html',
  styleUrls: ['./celebrate-harder.component.scss']
})
export class CelebrateHarderComponent implements AfterViewInit, OnDestroy {

  @ViewChild('swiperEl') swiperEl!: ElementRef<HTMLElement>;
  @ViewChild('dragBadge') badgeEl!: ElementRef<HTMLElement>;

  slides: Slide[] = [
    { img: '', alt: 'SmartFinancial Beach Party 2025',   caption: 'Beach Party 2025',   hasVideo: true, videoSrc: 'assets/videos/Beach%20Party%202025.mp4',   poster: 'assets/images/careers/beachparty25.png' },
    { img: '', alt: 'SmartFinancial Holiday Party 2024', caption: 'Holiday Party 2024', hasVideo: true, videoSrc: 'assets/videos/Holiday%20Party%202024.mp4', poster: 'assets/images/careers/holidayparty24_0040.png' },
    { img: '', alt: 'SmartFinancial Holiday Party 2025', caption: 'Holiday Party 2025', hasVideo: true, videoSrc: 'assets/videos/Holiday%20Party%202025.mp4', poster: 'assets/images/careers/holidayparty25 Medium.jpeg' },
    { img: '', alt: 'SmartFinancial Beach Party 2024', caption: 'Beach Party 2024', hasVideo: true, videoSrc: 'assets/videos/beackparty-2024.mp4', poster: 'assets/images/careers/beachparty25.png' },
  ];

  activeIndex = 0;
  isHovered = false;
  isDragging = false;
  modalOpen = false;

  get activeSlide(): Slide { return this.slides[this.activeIndex]; }

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private rafId: number | null = null;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const el = this.swiperEl.nativeElement as any;
    el.addEventListener('swiperslidechange', (e: CustomEvent) => {
      this.ngZone.run(() => {
        const swiper = (e as any).detail[0];
        this.activeIndex = swiper.realIndex;
      });
    });
  }

  ngOnDestroy(): void {
    this.stopLerp();
  }

  onSwiperEnter(): void {
    this.isHovered = true;
    this.startLerp();
  }

  onSwiperLeave(): void {
    this.isHovered = false;
    this.isDragging = false;
    this.stopLerp();
  }

  onSwiperMouseDown(): void { this.isDragging = true; }
  onSwiperMouseUp(): void   { this.isDragging = false; }

  onMouseMove(event: MouseEvent): void {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.targetX = event.clientX - rect.left;
    this.targetY = event.clientY - rect.top;
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

  private startLerp(): void {
    if (this.rafId !== null) return;
    this.ngZone.runOutsideAngular(() => {
      const tick = () => {
        this.currentX += (this.targetX - this.currentX) * 0.12;
        this.currentY += (this.targetY - this.currentY) * 0.12;
        if (this.badgeEl?.nativeElement) {
          this.badgeEl.nativeElement.style.transform =
            `translate(calc(${this.currentX}px - 50%), calc(${this.currentY}px - 50%))`;
        }
        this.rafId = requestAnimationFrame(tick);
      };
      this.rafId = requestAnimationFrame(tick);
    });
  }

  private stopLerp(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
}
