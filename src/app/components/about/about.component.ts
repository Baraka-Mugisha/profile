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
      title: 'Full Stack<br>Development',
      tags: ['Frontend', 'Backend', 'APIs'],
      description:
        'Building scalable web applications with React, Angular, Vue, Node.js, NestJS, and PostgreSQL/MongoDB.',
      image: '/img/services/1200x900_s01.webp',
    },
    {
      title: 'Mobile App<br>Development',
      tags: ['React Native', 'Cross-platform', 'iOS/Android'],
      description:
        'Creating native mobile experiences using React Native, Expo, and Ionic for both iOS and Android platforms.',
      image: '/img/services/1200x900_s03.webp',
    },
    {
      title: 'Cloud & DevOps<br>Solutions',
      tags: ['Docker', 'Kubernetes', 'CI/CD'],
      description:
        'Infrastructure automation with Docker, Kubernetes, Terraform, and Jenkins for seamless deployment pipelines.',
      image: '/img/services/devops2.png',
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
