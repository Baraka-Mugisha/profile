import { PERSONAL_INFO } from './../../shared/constants';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Achievement, Service } from '../../types';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationService.fadeInUp('.about-section-title');
      this.animationService.gridReveal('.achievement-item');
      this.animationService.fadeInUp('.service-card');

      const counterElements = document.querySelectorAll('.achievement-number');
      counterElements.forEach((el) => {
        const target = parseInt((el as HTMLElement).textContent || '0');
        if (!isNaN(target)) {
          this.animationService.countUp(el as HTMLElement, target, 2);
        }
      });
    }, 100);
  }

  ngOnDestroy(): void {
    this.animationService.cleanup();
  }
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
