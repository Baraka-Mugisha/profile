import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience, experiences } from '../../data/experience';
import { EducationItem, Tool } from '../../types';

const icon = (slug: string, color: string) =>
  `https://api.iconify.design/simple-icons/${slug}.svg?color=%23${color}&width=128`;

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styles: [],
})
export class ResumeComponent {
  currentSlide = 0;
  // Local data matches the CV. Contentful experience entries are not used here.
  experience = signal<Experience[]>(experiences);
  isLoading = signal(false);

  // Source: resume (education and learning sections).
  education: EducationItem[] = [
    {
      date: 'Class of 2025',
      title: 'BSc in Information Technology',
      source: 'Mount Kenya University, Kigali Campus',
      sourceLink: '',
      description: 'Learning: System Design, Java, Dart and AI Engineering.',
    },
  ];

  // Source: resume, skills section.
  tools: Tool[] = [
    { name: 'TypeScript', icon: icon('typescript', '3178C6') },
    { name: 'JavaScript', icon: icon('javascript', 'F7DF1E') },
    { name: 'Python', icon: icon('python', '3776AB') },
    { name: 'Go', icon: icon('go', '00ADD8') },
    { name: 'Java', icon: icon('openjdk', '007396') },
    { name: 'C++', icon: icon('cplusplus', '00599C') },
    { name: 'HTML5', icon: icon('html5', 'E34F26') },
    { name: 'CSS3', icon: icon('css', '1572B6') },
    { name: 'React', icon: icon('react', '61DAFB') },
    { name: 'Angular', icon: icon('angular', 'DD0031') },
    { name: 'Vue.js', icon: icon('vuedotjs', '4FC08D') },
    { name: 'Next.js', icon: icon('nextdotjs', 'FFFFFF') },
    { name: 'Ionic', icon: icon('ionic', '3880FF') },
    { name: 'Node.js', icon: icon('nodedotjs', '5FA04E') },
    { name: 'Express', icon: icon('express', 'FFFFFF') },
    { name: 'NestJS', icon: icon('nestjs', 'E0234E') },
    { name: 'Spring Boot', icon: icon('springboot', '6DB33F') },
    { name: 'Jest', icon: icon('jest', 'C21325') },
    { name: 'Mocha', icon: icon('mocha', '8D6748') },
    { name: 'Chai', icon: icon('chai', 'A30701') },
    { name: 'PostgreSQL', icon: icon('postgresql', '4169E1') },
    { name: 'MongoDB', icon: icon('mongodb', '47A248') },
    { name: 'Bootstrap', icon: icon('bootstrap', '7952B3') },
    { name: 'Material UI', icon: icon('mui', '007FFF') },
    { name: 'Sass', icon: icon('sass', 'CC6699') },
    { name: 'Tailwind CSS', icon: icon('tailwindcss', '06B6D4') },
    { name: 'Figma', icon: icon('figma', 'F24E1E') },
    { name: 'Shopify', icon: icon('shopify', '7AB55C') },
    { name: 'Git', icon: icon('git', 'F05032') },
    { name: 'Docker', icon: icon('docker', '2496ED') },
    { name: 'Jenkins', icon: icon('jenkins', 'D24939') },
    { name: 'Linux', icon: icon('linux', 'FCC624') },
    { name: 'Kubernetes', icon: icon('kubernetes', '326CE5') },
    { name: 'Terraform', icon: icon('terraform', '7B42BC') },
    { name: 'DigitalOcean', icon: icon('digitalocean', '0080FF') },
  ];

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
