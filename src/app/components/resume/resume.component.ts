import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience, experiences } from '../../data/experience';
import { EducationItem } from '../../types';

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

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
