import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  label: string;
  href: string;
  icon: 'facebook' | 'x' | 'linkedin' | 'youtube';
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  readonly phone = '877-323-7750';

  readonly columns: FooterColumn[] = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Carriers', href: '#' },
        { label: 'Resources', href: '#' },
        { label: 'Contact', href: '#' },
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'Insurance Leads', href: '#' },
        { label: 'Live Transfer Calls', href: '#' },
      ]
    },
    {
      title: 'Information',
      links: [
        { label: 'Terms of Use', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Return Policy', href: '#' },
      ]
    }
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'X', href: '#', icon: 'x' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'YouTube', href: '#', icon: 'youtube' },
  ];

  readonly currentYear = new Date().getFullYear();
}
