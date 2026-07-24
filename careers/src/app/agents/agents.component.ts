import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Autoplay } from 'swiper/modules';

interface Carrier {
  src: string;
  alt: string;
}

interface SuccessStory {
  name: string;
  company: string;
  initials: string;
  avatar: string;
  quote: string;
  points: string[];
}

interface Review {
  quote: string;
  name: string;
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

  readonly successStories: SuccessStory[] = [
    {
      name: 'Omar Kange',
      company: 'AAA Insurance',
      initials: 'OK',
      avatar: '/assets/images/agents/omar-kange.png',
      quote: '"I set our goals really high. I want to first build a book of business worth $10 million by the end of my third year."',
      points: ['Investing $20k Month In Leads', '30-35% Close Ratio', 'Profitable & Happy with ROI']
    },
    {
      name: 'Chris Barredo',
      company: 'State Farm Insurance',
      initials: 'CB',
      avatar: '/assets/images/agents/chris-barredo.png',
      quote: '"My SmartFinancial account manager is easy to get a hold of, and the quality of the leads is good."',
      points: ['Ranked #12 out of 3,000 State Farm agencies', 'Top Producer for 12 years', 'Plans to have 6 full time agents in near future']
    },
    {
      name: 'Chris Smith',
      company: 'Farmers Insurance',
      initials: 'CS',
      avatar: '/assets/images/agents/chris-smith.png',
      quote: '"My SmartFinancial Account Manager wants to help me grow, so I feel like he\'s one of my staff, and more of a friend than a lead vendor. That\'s huge for me."',
      points: ['$22k to $25k in Premiums from SmartFinancial Leads', '40% Close Ratio with Calls']
    },
    {
      name: 'Jon Aprile',
      company: 'State Farm Insurance',
      initials: 'JA',
      avatar: '/assets/images/agents/jon-aprile.png',
      quote: '"I wasn\'t happy with my lead vendor so I tried SmartFinancial. Instantly, I knew the quality was better!"',
      points: ['25% Close Rate with SmartFinancial Leads', '35 to 40% on SmartFinancial Transfer Calls', '12th year with State Farm']
    }
  ];

  readonly reviews: Review[] = [
    {
      quote: '"For my agency, SmartFinancial has made a huge difference; they provide individual dedicated service, and truly care about our results"',
      name: 'Gary M.'
    },
    {
      quote: '"SmartFinancial offers a lot of great insights into the market and keeps us on top of the pricing, so we always get the best deal and the best leads."',
      name: 'Kitt W.'
    },
    {
      quote: '"SmartFinancial has been a game changer for my agency’s home and auto business. The leads are consistently strong, and I can clearly see the impact in our quote volume and new policies written."',
      name: 'Casey C.'
    },
    {
      quote: '"We have been working with SmartFinancial for a little over a month now and all I can say is wow! I would highly recommend SmartFinancial to anyone."',
      name: 'Josiah S.'
    },
    {
      quote: '"I enjoy the personal service with an individual representative. A colleague referred me to this company and I have been very pleased."',
      name: 'Kari E.'
    },
    {
      quote: '"Our service rep has been great to work with. The ease of use of the program was quite good."',
      name: 'David K.'
    }
  ];

  ngAfterViewInit(): void {

    this.observeTrustStats();
  }

  private observeTrustStats(): void {
    const stats = document.querySelectorAll('.agents-trust__stat, .agents-how__step, .agents-why__card, .agents-stories__card, [class*="__heading"]');
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
