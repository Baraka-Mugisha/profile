import { PERSONAL_INFO } from './../../shared/constants';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Achievement, Service } from '../../types';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  achievements: Achievement[] = [
    { number: '10+', description: 'Happy clients' },
    { number: '5+', description: 'Years of experience' },
    { number: '20+', description: 'Projects done' },
  ];

  socials = PERSONAL_INFO;

  services: Service[] = [
    {
      title: 'Frontend<br>development',
      tags: ['UI/UX Design', 'Design to Code'],
      description: 'I work with HTML/CSS, Framer and WordPress.',
      image: '/img/services/1200x900_s01.webp',
    },
    {
      title: 'Digital art and graphic design',
      tags: ['Illustrations', 'AI Experiments'],
      description:
        'I use Adobe Photoshop, Fresco and Blender to create illustrations and 3D renders for my clients and stocks.',
      image: '/img/services/1200x900_s02.webp',
    },
    {
      title: 'SEO/Digital marketing solutions',
      tags: ['Social Media', 'Analytics'],
      description:
        'Social media content plans, media monitoring, email and text messaging and search engine optimization.',
      image: '/img/services/1200x900_s03.webp',
    },
    {
      title: 'Brand<br>identity',
      tags: ['Logo Design', 'Style Guides'],
      description:
        'I help my clients to develop a personality and brand voice, design the brand look and logo.',
      image: '/img/services/1200x900_s04.webp',
    },
  ];
}
