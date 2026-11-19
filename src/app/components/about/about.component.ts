import { PERSONAL_INFO } from './../../shared/constants';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationItem, Service } from '../../types';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent  {

  socials = PERSONAL_INFO;

  education: EducationItem[] = [
    {
      date: 'Class of 2025',
      title: 'BSc in Information Technology',
      source: 'Mount Kenya University, Kigali Campus',
      sourceLink: '',
    },
  ];

  services: Service[] = [
    {
      title: 'Full Stack<br>Development',
      description: 'Web and mobile products, from the backend to the interface.',
      image: '/img/services/fullstack.webp',
    },
    {
      title: 'Mobile App<br>Development',
      description: 'Mobile apps for iOS and Android.',
      image: '/img/services/mobile.webp',
    },
    {
      title: 'Cloud & DevOps<br>Solutions',
      description: 'Deployment, infrastructure and release pipelines.',
      image: '/img/services/devops.png',
    },
    {
      title: 'Technical<br>Leadership',
      description: 'Leading engineering teams and raising code quality.',
      image: '/img/services/leadership.png',
    },
  ];
}
