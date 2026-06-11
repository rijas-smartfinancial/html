import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';

export interface TeamPhoto {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-explore-roles',
  templateUrl: './explore-roles.component.html',
  styleUrls: ['./explore-roles.component.scss']
})
export class ExploreRolesComponent implements AfterViewInit, OnDestroy {

  @ViewChild('textBlock') textBlockEl!: ElementRef<HTMLElement>;
  @ViewChildren('photoEl') photoEls!: QueryList<ElementRef<HTMLElement>>;

  readonly photos: TeamPhoto[] = [
    { src: 'assets/images/careers/beachparty25_2.png', alt: 'SmartFinancial team outing' },
    { src: 'assets/images/careers/beachparty25.png', alt: 'SmartFinancial team group photo' },
    { src: 'assets/images/careers/holidayparty24_0040.png', alt: 'SmartFinancial team celebration' },
  ];

  private observers: IntersectionObserver[] = [];

  ngAfterViewInit(): void {
    this.observeEl(this.textBlockEl.nativeElement, 0);
    this.photoEls.forEach((ref, i) =>
      this.observeEl(ref.nativeElement, 200 + i * 160)
    );
  }

  ngOnDestroy(): void {
    this.observers.forEach(o => o.disconnect());
  }

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
