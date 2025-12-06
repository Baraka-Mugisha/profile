import { Component, OnInit, PLATFORM_ID, Inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Experience, experiences } from '../../data/experience';
import { ContentfulService } from '../../services/contentful.service';
import { EducationItem, Tool } from '../../types';

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styles: [],
})
export class ResumeComponent implements OnInit {
  currentSlide = 0;
  experience = signal<Experience[]>([]);
  isLoading = signal(true);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadExperience();
    }
  }

  private loadExperience(): void {
    this.contentfulService.getExperience().subscribe({
      next: (data) => {
        this.experience.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.experience.set(experiences);
        this.isLoading.set(false);
      },
    });
  }

  education: EducationItem[] = [
    {
      date: '2015 - 2016',
      title: 'Drawing Concentration',
      source: 'New York Academy of Art',
      sourceLink: '#',
      description: 'Intensive drawing courses that present the fundamental principles of drawing.',
    },
    {
      date: '2019 - 2021',
      title: 'UI/UX Design Specialization',
      source: 'California Institute of Arts',
      sourceLink: '#',
      description: 'Research, design, and prototype effective, visually-driven websites and apps.',
    },
    {
      date: '2022',
      title: 'UI/UX Designer',
      source: 'Coursera',
      sourceLink: '#',
      description: 'This course is about how to complete the design process from beginning to end.',
    },
  ];

  tools: Tool[] = [
    {
      name: 'Next.js',
      icon: 'https://api.iconify.design/simple-icons/nextdotjs.svg?color=%23000000&width=128',
    },
    {
      name: 'NestJS',
      icon: 'https://api.iconify.design/simple-icons/nestjs.svg?color=%23E0234E&width=128',
    },
    {
      name: 'Prisma',
      icon: 'https://api.iconify.design/simple-icons/prisma.svg?color=%232D3748&width=128',
    },
    {
      name: 'PostgreSQL',
      icon: 'https://api.iconify.design/simple-icons/postgresql.svg?color=%234169E1&width=128',
    },
    {
      name: 'Radix UI',
      icon: 'https://api.iconify.design/simple-icons/radixui.svg?color=%23161618&width=128',
    },
    {
      name: 'Kubernetes',
      icon: 'https://api.iconify.design/simple-icons/kubernetes.svg?color=%23326CE5&width=128',
    },
    {
      name: 'Terraform',
      icon: 'https://api.iconify.design/simple-icons/terraform.svg?color=%237B42BC&width=128',
    },
    {
      name: 'Playwright',
      icon: 'https://api.iconify.design/simple-icons/playwright.svg?color=%232EAD33&width=128',
    },
    {
      name: 'Storybook',
      icon: 'https://api.iconify.design/simple-icons/storybook.svg?color=%23FF4785&width=128',
    },
    {
      name: 'Sentry',
      icon: 'https://api.iconify.design/simple-icons/sentry.svg?color=%23362D59&width=128',
    },
    {
      name: 'Expo',
      icon: 'https://api.iconify.design/simple-icons/expo.svg?color=%23000020&width=128',
    },
  ];

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
