import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience, experiences } from '../../data/experience';

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

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
