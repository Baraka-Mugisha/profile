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
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg',
    },
    { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nestjs.svg' },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/prisma.svg' },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg',
    },
    {
      name: 'Radix UI',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/radixui.svg',
    },
    {
      name: 'Kubernetes',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kubernetes.svg',
    },
    {
      name: 'Terraform',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/terraform.svg',
    },
    {
      name: 'Playwright',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/playwright.svg',
    },
    {
      name: 'Storybook',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/storybook.svg',
    },
    { name: 'Sentry', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sentry.svg' },
    { name: 'Expo', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/expo.svg' },
  ];

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
