import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  id: number;
  title: string;
  tags: string[];
  description: string;
  image: string;
  fullImage: string;
  isOpposite?: boolean;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="inner inner-first portfolio">
      <!-- Section Title -->
      <div class="content__block section-grid-title">
        <p class="h2__subtitle animate-in-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="13px"
            height="13px"
            viewBox="0 0 13 13"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
            />
          </svg>
          <span>Portfolio</span>
        </p>
        <h2 class="h2__title animate-in-up">Check out my featured projects</h2>
      </div>

      <!-- Works Gallery -->
      <div class="content__block grid-block">
        <div class="container-fluid px-0 inner__gallery">
          <div class="row gx-0 my-gallery">
            <figure
              *ngFor="let item of portfolioItems"
              class="col-12 col-md-6 gallery__item grid-item animate-card-2"
              (click)="openLightbox(item)"
            >
              <a class="gallery__link" style="cursor: pointer;">
                <img [src]="item.image" class="gallery__image" [alt]="item.title" />
              </a>

              <figcaption class="gallery__descr" [class.opposite]="item.isOpposite">
                <h5 [class.opposite]="item.isOpposite">{{ item.title }}</h5>
                <div class="card__tags d-flex flex-wrap">
                  <span
                    *ngFor="let tag of item.tags"
                    class="rounded-tag"
                    [class.opposite]="item.isOpposite"
                  >
                    {{ tag }}
                  </span>
                </div>
                <p class="small">{{ item.description }}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div *ngIf="selectedItem" class="lightbox-overlay" (click)="closeLightbox()" [@fadeInOut]>
      <div class="lightbox-content" (click)="$event.stopPropagation()">
        <button class="lightbox-close" (click)="closeLightbox()">
          <i class="ph-bold ph-x"></i>
        </button>
        <img [src]="selectedItem.fullImage" [alt]="selectedItem.title" />
        <div class="lightbox-info">
          <h3>{{ selectedItem.title }}</h3>
          <div class="lightbox-tags">
            <span *ngFor="let tag of selectedItem.tags" class="rounded-tag">{{ tag }}</span>
          </div>
          <p>{{ selectedItem.description }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .inner {
        padding: 8rem 0;
      }

      @media (min-width: 1200px) {
        .inner {
          margin-left: 36rem; /* Account for avatar sidebar */
          padding-left: 6rem;
        }
      }

      .content__block {
        margin-bottom: 6rem;
      }

      .section-grid-title {
        text-align: center;
        max-width: 80rem;
        margin: 0 auto 8rem;
      }

      .h2__subtitle {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--t-accent);
        margin-bottom: 2.4rem;
      }

      .h2__subtitle svg {
        width: 1.3rem;
        height: 1.3rem;
        flex-shrink: 0;
      }

      .h2__title {
        margin-bottom: 0;
      }

      .gallery__item {
        margin-bottom: 4rem;
        cursor: pointer;
        transition: transform var(--_animspeed-medium) ease;
      }

      .gallery__item:hover {
        transform: translateY(-0.5rem);
      }

      .gallery__link {
        display: block;
        position: relative;
        overflow: hidden;
        border-radius: var(--_radius-l);
        margin-bottom: 2.4rem;
      }

      .gallery__image {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform var(--_animspeed-medium) ease;
      }

      .gallery__item:hover .gallery__image {
        transform: scale(1.05);
      }

      .gallery__descr {
        padding: 0 2rem;
      }

      .gallery__descr h5 {
        margin-bottom: 1.6rem;
        color: var(--t-bright);
      }

      .gallery__descr h5.opposite {
        color: var(--t-opp-bright);
      }

      .card__tags {
        gap: 0.8rem;
        margin-bottom: 1.6rem;
      }

      .gallery__descr .small {
        margin-bottom: 0;
      }

      /* Lightbox Styles */
      .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 2rem;
      }

      .lightbox-content {
        position: relative;
        max-width: 90rem;
        max-height: 90%;
        background: var(--base-tint);
        border-radius: var(--_radius-l);
        padding: 2rem;
        overflow-y: auto;
      }

      .lightbox-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 4rem;
        height: 4rem;
        background: var(--base);
        border: none;
        border-radius: 50%;
        color: var(--t-bright);
        font-size: 2rem;
        cursor: pointer;
        z-index: 1;
        transition: all var(--_animspeed-medium) ease;
      }

      .lightbox-close:hover {
        background: var(--accent);
        color: var(--base-tint);
        transform: scale(1.1);
      }

      .lightbox-content img {
        width: 100%;
        height: auto;
        border-radius: var(--_radius-m);
        margin-bottom: 2rem;
      }

      .lightbox-info h3 {
        margin-bottom: 1.6rem;
      }

      .lightbox-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
        margin-bottom: 1.6rem;
      }

      .lightbox-info p {
        margin-bottom: 0;
      }

      /* Responsive adjustments */
      @media (max-width: 767px) {
        .inner {
          padding: 6rem 0;
        }

        .section-grid-title {
          margin-bottom: 6rem;
        }

        .gallery__item {
          margin-bottom: 3rem;
        }

        .gallery__descr {
          padding: 0 1rem;
        }

        .lightbox-content {
          margin: 1rem;
          padding: 1.5rem;
          max-height: 95%;
        }
      }
    `,
  ],
  animations: [
    // Simple fade animation for the lightbox
  ],
})
export class PortfolioComponent {
  selectedItem: PortfolioItem | null = null;

  portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Isometric House',
      tags: ['Illustrations', '3D Render'],
      description:
        'Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio.',
      image: '/img/works/800_w01-thumb.webp',
      fullImage: '/img/works/1400x1400_w01.webp',
    },
    {
      id: 2,
      title: 'Dashboard Template',
      tags: ['UI Design', 'Figma'],
      description:
        'Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio, a mollis ipsum tristique eu.',
      image: '/img/works/800_w02-thumb.webp',
      fullImage: '/img/works/1400x1400_w02.webp',
      isOpposite: true,
    },
    {
      id: 3,
      title: 'Notification Icon',
      tags: ['Illustrations', '3D Render'],
      description:
        'Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio, a mollis ipsum tristique eu.',
      image: '/img/works/800_w03-thumb.webp',
      fullImage: '/img/works/1400x1400_w03.webp',
      isOpposite: true,
    },
    {
      id: 4,
      title: 'Smart Penguin',
      tags: ['Illustrations', 'AI Experiment'],
      description:
        'Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio, a mollis ipsum tristique eu.',
      image: '/img/works/800_w04-thumb.webp',
      fullImage: '/img/works/1400x1400_w04.webp',
    },
  ];

  openLightbox(item: PortfolioItem): void {
    this.selectedItem = item;
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.selectedItem = null;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }
}
