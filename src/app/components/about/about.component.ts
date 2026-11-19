import { PERSONAL_INFO } from './../../shared/constants';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Achievement, Service } from '../../types';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent  {

  achievements: Achievement[] = [
    { number: '5+', description: 'Years of experience' },
  ];

  socials = PERSONAL_INFO;

  services: Service[] = [
    {
      title: 'Full Stack<br>Development',
      tags: ['Frontend', 'Backend', 'APIs'],
      description:
        'Building scalable web applications with React, Angular, Vue, Node.js, NestJS, and PostgreSQL/MongoDB.',
      image: '/img/services/fullstack.webp',
    },
    {
      title: 'Mobile App<br>Development',
      tags: ['React Native', 'Cross-platform', 'iOS/Android'],
      description:
        'Creating native mobile experiences using React Native, Expo, and Ionic for both iOS and Android platforms.',
      image: '/img/services/mobile.webp',
    },
    {
      title: 'Cloud & DevOps<br>Solutions',
      tags: ['Docker', 'Kubernetes', 'CI/CD'],
      description:
        'Infrastructure automation with Docker, Kubernetes, Terraform, and Jenkins for seamless deployment pipelines.',
      image: '/img/services/devops.png',
    },
    {
      title: 'Technical<br>Leadership',
      tags: ['Team Lead', 'Code Review', 'Mentoring'],
      description:
        'Leading development teams, conducting code reviews, and mentoring developers to maintain high-quality standards.',
      image: '/img/services/leadership.png',
    },
  ];
}
