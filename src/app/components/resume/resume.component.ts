import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface EducationItem {
  date: string;
  title: string;
  source: string;
  sourceLink: string;
  description: string;
}

interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  companyLink: string;
  description: string;
}

interface Tool {
  name: string;
  icon: string;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  companyLink: string;
  rating: number;
  comment: string;
  avatar: string;
  projectLink: string;
}

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  template: `
    <section id="resume" class="inner resume">
      <!-- Section Title -->
      <div class="content__block block-large">
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
          <span>Resume</span>
        </p>
        <h2 class="h2__title animate-in-up">Education and practical experience</h2>
        <p class="h2__text animate-in-up">
          Be what you would seem to be - or, if you'd like it put more simply - never imagine
          yourself not to be otherwise than what it might appear to others that what you were or
          <a href="#contact" class="text-link">might have been</a>
          was not otherwise than what you had been would have appeared to them to be otherwise.
        </p>
      </div>

      <!-- Education Section -->
      <div class="content__block block-large">
        <div class="section-h3">
          <h3 class="h3__title animate-in-up">My education</h3>
        </div>

        <div class="container-fluid p-0 resume-lines">
          <div *ngFor="let item of education" class="row g-0 resume-lines__item animate-in-up">
            <div class="col-12 col-md-2">
              <span class="resume-lines__date animate-in-up">{{ item.date }}</span>
            </div>
            <div class="col-12 col-md-5">
              <h5 class="resume-lines__title animate-in-up">{{ item.title }}</h5>
              <p class="resume-lines__source animate-in-up">
                Course by
                <a [href]="item.sourceLink" class="text-link-bold" target="_blank">{{
                  item.source
                }}</a>
              </p>
            </div>
            <div class="col-12 col-md-5">
              <p class="small resume-lines__descr animate-in-up">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="content__block block-large">
        <div class="section-h3">
          <h3 class="h3__title animate-in-up">Work experience</h3>
        </div>

        <div class="container-fluid p-0 resume-lines">
          <div *ngFor="let item of experience" class="row g-0 resume-lines__item animate-in-up">
            <div class="col-12 col-md-2">
              <span class="resume-lines__date animate-in-up">{{ item.date }}</span>
            </div>
            <div class="col-12 col-md-5">
              <h5 class="resume-lines__title animate-in-up">{{ item.title }}</h5>
              <p class="resume-lines__source animate-in-up">
                in the
                <a [href]="item.companyLink" class="text-link-bold" target="_blank">{{
                  item.company
                }}</a>
                agency
              </p>
            </div>
            <div class="col-12 col-md-5">
              <p class="small resume-lines__descr animate-in-up">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Section -->
      <div class="content__block">
        <div class="section-h3 section-h3-grid">
          <h3 class="h3__title animate-in-up">My favourite tools</h3>
        </div>
      </div>

      <div class="content__block grid-block block-large">
        <div class="tools-cards d-flex justify-content-start flex-wrap">
          <div
            *ngFor="let tool of tools"
            class="tools-cards__item d-flex grid-item-s animate-card-5"
          >
            <div class="tools-cards__card">
              <img
                class="tools-cards__icon animate-in-up"
                [src]="tool.icon"
                [alt]="tool.name + ' Icon'"
              />
              <h6 class="tools-cards__caption animate-in-up">{{ tool.name }}</h6>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials Section -->
      <div class="content__block section-title">
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
          <span>Testimonials</span>
        </p>
        <h2 class="h2__title animate-in-up">Clients say about me</h2>
      </div>

      <!-- Testimonials Slider -->
      <div class="content__block">
        <div class="testimonials-slider">
          <div class="testimonials-container">
            <div
              *ngFor="let testimonial of testimonials; let i = index"
              class="testimonial-slide"
              [class.active]="i === currentSlide"
            >
              <div class="testimonials-card animate-in-up">
                <div class="testimonials-card__tauthor d-flex animate-in-up">
                  <div class="tauthor__avatar">
                    <img [src]="testimonial.avatar" [alt]="testimonial.name" />
                  </div>
                  <div class="tauthor__info d-flex flex-column justify-content-center">
                    <p class="tauthor__name">{{ testimonial.name }}</p>
                    <p class="tauthor__position">
                      {{ testimonial.position }} in
                      <a [href]="testimonial.companyLink" class="text-link-bold" target="_blank">{{
                        testimonial.company
                      }}</a>
                    </p>
                    <div class="tauthor__rating d-flex">
                      <i
                        *ngFor="let star of getStarsArray(testimonial.rating)"
                        class="ph-fill ph-star"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="testimonials-card__descr animate-in-up">
                  <p>{{ testimonial.comment }}</p>
                </div>
                <div class="testimonials-card__btnholder animate-in-up">
                  <a
                    class="btn mobile-vertical btn-line btn-transparent slide-right"
                    [href]="testimonial.projectLink"
                  >
                    <span class="btn-caption">Project Page</span>
                    <i class="ph-bold ph-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation buttons -->
          <div class="slider-navigation">
            <button
              class="slider-btn slider-btn-prev btn btn-square btn-square-s btn-outline"
              (click)="previousSlide()"
              [disabled]="currentSlide === 0"
            >
              <i class="ph-bold ph-caret-left"></i>
            </button>
            <button
              class="slider-btn slider-btn-next btn btn-square btn-square-s btn-outline"
              (click)="nextSlide()"
              [disabled]="currentSlide === testimonials.length - 1"
            >
              <i class="ph-bold ph-caret-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .section-title {
        text-align: center;
        max-width: 80rem;
        margin: 0 auto 6rem;
      }

      .h2__text {
        font-size: 1.8rem;
        line-height: 1.7;
        color: var(--t-medium);
        max-width: 60rem;
        margin: 2.4rem auto 0;
      }

      .section-h3 {
        margin-bottom: 4rem;
      }

      .h3__title {
        position: relative;
        padding-bottom: 1.6rem;
        margin-bottom: 0;
      }

      .h3__title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 6rem;
        height: 0.2rem;
        background: var(--accent);
        border-radius: 0.1rem;
      }

      .resume-lines {
        margin-bottom: 6rem;
      }

      .resume-lines__item {
        padding: 2.4rem 0;
        border-bottom: 0.1rem solid var(--stroke-elements);
        transition: all var(--_animspeed-medium) ease;
      }

      .resume-lines__item:hover {
        background: var(--base-tint);
        margin: 0 -2rem;
        padding: 2.4rem 2rem;
        border-radius: var(--_radius-m);
        border-bottom-color: transparent;
      }

      .resume-lines__item:last-child {
        border-bottom: none;
      }

      .resume-lines__date {
        font-family: var(--_font-accent);
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--accent);
        display: block;
        margin-bottom: 1rem;
      }

      .resume-lines__title {
        margin-bottom: 0.8rem;
        color: var(--t-bright);
      }

      .resume-lines__source {
        font-size: 1.4rem;
        color: var(--t-medium);
        margin-bottom: 0;
      }

      .resume-lines__descr {
        margin-bottom: 0;
        line-height: 1.6;
      }

      .tools-cards {
        gap: 2rem;
      }

      .tools-cards__item {
        flex: 0 0 auto;
      }

      .tools-cards__card {
        background: var(--base-tint);
        border: 0.1rem solid var(--stroke-elements);
        border-radius: var(--_radius-m);
        padding: 2.4rem 1.6rem;
        text-align: center;
        min-width: 12rem;
        transition: all var(--_animspeed-medium) ease;
      }

      .tools-cards__card:hover {
        transform: translateY(-0.5rem);
        border-color: var(--accent);
        background: var(--accent);
      }

      .tools-cards__card:hover .tools-cards__caption {
        color: var(--base-tint);
      }

      .tools-cards__icon {
        width: 4rem;
        height: 4rem;
        margin-bottom: 1.2rem;
        object-fit: contain;
      }

      .tools-cards__caption {
        font-size: 1.4rem;
        font-weight: 600;
        margin: 0;
        color: var(--t-bright);
        transition: color var(--_animspeed-medium) ease;
      }

      .testimonials-slider {
        position: relative;
        max-width: 80rem;
        margin: 0 auto;
      }

      .testimonials-container {
        position: relative;
        overflow: hidden;
      }

      .testimonial-slide {
        display: none;
        opacity: 0;
        transition: opacity var(--_animspeed-medium) ease;
      }

      .testimonial-slide.active {
        display: block;
        opacity: 1;
      }

      .testimonials-card {
        background: var(--base-tint);
        border: 0.1rem solid var(--stroke-elements);
        border-radius: var(--_radius-l);
        padding: 3rem;
        margin-bottom: 3rem;
      }

      .testimonials-card__tauthor {
        gap: 2rem;
        margin-bottom: 2.4rem;
      }

      .tauthor__avatar {
        flex-shrink: 0;
      }

      .tauthor__avatar img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        object-fit: cover;
      }

      .tauthor__name {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--t-bright);
        margin-bottom: 0.4rem;
      }

      .tauthor__position {
        font-size: 1.4rem;
        color: var(--t-medium);
        margin-bottom: 0.8rem;
      }

      .tauthor__rating {
        gap: 0.4rem;
        color: var(--accent);
      }

      .testimonials-card__descr {
        margin-bottom: 2.4rem;
      }

      .testimonials-card__descr p {
        font-size: 1.6rem;
        line-height: 1.6;
        color: var(--t-medium);
        margin: 0;
      }

      .slider-navigation {
        display: flex;
        justify-content: center;
        gap: 1.2rem;
      }

      .slider-btn {
        transition: all var(--_animspeed-medium) ease;
      }

      .slider-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
      }

      .slider-btn:not(:disabled):hover {
        transform: translateY(-0.2rem);
        border-color: var(--accent);
        color: var(--accent);
      }

      /* Responsive adjustments */
      @media (max-width: 767px) {
        .resume-lines__item {
          padding: 2rem 0;
        }

        .resume-lines__item:hover {
          margin: 0;
          padding: 2rem 0;
          background: transparent;
        }

        .resume-lines__date {
          font-size: 1.3rem;
        }

        .tools-cards {
          gap: 1.5rem;
          justify-content: center;
        }

        .tools-cards__card {
          min-width: 10rem;
          padding: 2rem 1.2rem;
        }

        .tools-cards__icon {
          width: 3rem;
          height: 3rem;
        }

        .testimonials-card {
          padding: 2rem;
        }

        .testimonials-card__tauthor {
          flex-direction: column;
          text-align: center;
          gap: 1.5rem;
        }

        .tauthor__avatar {
          align-self: center;
        }
      }
    `,
  ],
})
export class ResumeComponent implements OnInit {
  currentSlide = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
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

  experience: ExperienceItem[] = [
    {
      date: '2018 - 2019',
      title: 'Illustrator',
      company: 'Creative Mind',
      companyLink: '#',
      description: 'I created original images for a range of digital and printed products.',
    },
    {
      date: '2019 - 2021',
      title: 'Graphic Designer',
      company: 'Moon Light',
      companyLink: '#',
      description: 'My job was to create adverts, branding, signage and other media products.',
    },
    {
      date: '2021 - now',
      title: 'UI/UX Designer',
      company: 'Moon Light',
      companyLink: '#',
      description:
        'I am actively involved in creating user interfaces for mobile apps and websites.',
    },
  ];

  tools: Tool[] = [
    { name: 'Photoshop', icon: '/img/icons/icon-photoshop.svg' },
    { name: 'Figma', icon: '/img/icons/icon-figma.svg' },
    { name: 'Illustrator', icon: '/img/icons/icon-illustrator.svg' },
    { name: 'Sketch', icon: '/img/icons/icon-scketch.svg' },
    { name: 'Blender', icon: '/img/icons/icon-blender.svg' },
    { name: 'HTML5', icon: '/img/icons/icon-html.svg' },
    { name: 'CSS3', icon: '/img/icons/icon-css.svg' },
    { name: 'Notion', icon: '/img/icons/icon-notion.svg' },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Alex Tomato',
      position: 'Brand Manager',
      company: 'Instant Design',
      companyLink: '#',
      rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud. Dolore magna aliquam.',
      avatar: '/img/avatars/400x400_t01.webp',
      projectLink: '#',
    },
    {
      name: 'Jenny Pineapple',
      position: 'SEO',
      company: 'Creative People',
      companyLink: '#',
      rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud. Dolore magna aliquam.',
      avatar: '/img/avatars/400x400_t02.webp',
      projectLink: '#',
    },
  ];

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  nextSlide(): void {
    if (this.currentSlide < this.testimonials.length - 1) {
      this.currentSlide++;
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  private startAutoSlide(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    }, 5000);
  }
}
