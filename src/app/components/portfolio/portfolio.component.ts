import { Project } from './../../types';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { MORE_WORK, PORTFOLIO_PROJECTS, orderProjects } from '../../data/portfolio';

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
export class PortfolioComponent {
  selectedItem: Project | null = null;
  portfolioItems = signal<Project[]>(
    orderProjects(PORTFOLIO_PROJECTS.filter((p) => !MORE_WORK.includes(p.name))),
  );
  moreItems = signal<Project[]>(
    orderProjects(PORTFOLIO_PROJECTS.filter((p) => MORE_WORK.includes(p.name))),
  );
  moreOpen = signal(false);

  toggleMore(): void {
    this.moreOpen.update((open) => !open);
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
