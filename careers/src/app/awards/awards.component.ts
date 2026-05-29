import { Component } from '@angular/core';

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
export class AwardsComponent {
  readonly awards: Award[] = [
    { id: 'trophy',       src: 'assets/awards/trophy.png',           alt: 'Award Trophy' },
    { id: 'socal',        src: 'assets/awards/best-places-socal.png', alt: 'Best Places to Work SoCal' },
    { id: 'deloitte-1',   src: 'assets/awards/deloitte.png',          alt: 'Deloitte' },
    { id: 'ey',           src: 'assets/awards/ey-entrepreneur.png',   alt: 'EY Entrepreneur of the Year 2022' },
    { id: 'oc-places',    src: 'assets/awards/oc-best-places.png',    alt: 'OC Best Places to Work 2022' },
    { id: 'gptw',         src: 'assets/awards/great-place-to-work.png', alt: 'Great Place to Work Certified' },
    { id: 'oc-register',  src: 'assets/awards/oc-register.png',       alt: 'Top Work Places OC Register 2021' },
    { id: 'horizon',      src: 'assets/awards/horizon.png',           alt: 'Horizon Interactive Awards' },
    { id: 'deloitte-2',   src: 'assets/awards/deloitte.png',          alt: 'Deloitte' },
  ];
}
