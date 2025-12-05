import { Project } from './../../types';
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from '../../services/contentful.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { DUMMY_PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styles: [],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class PortfolioComponent implements OnInit {
  selectedItem: Project | null = null;
  portfolioItems = signal<Project[]>([...DUMMY_PROJECTS]);
  isLoading = signal(true);

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.contentfulService.getProjects().subscribe({
      next: (data) => {
        if (Array.isArray(data) && data.length > 0) {
          this.portfolioItems.set(data);
        } else {
          this.portfolioItems.set([...DUMMY_PROJECTS]);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error loading projects:', err);
        this.portfolioItems.set([...DUMMY_PROJECTS]);
        this.isLoading.set(false);
      },
    });
  }

  openLightbox(item: Project): void {
    this.selectedItem = item;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedItem = null;
    document.body.style.overflow = 'auto';
  }
}
