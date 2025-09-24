import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  number: string;
  description: string;
}

interface Service {
  title: string;
  tags: string[];
  description: string;
  image: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
    <section id="about" class="inner about">
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
          <span>About Me</span>
        </p>
        <h2 class="h2__title animate-in-up">Turning complex problems into simple design</h2>
      </div>

      <!-- Achievements -->
      <div class="content__block grid-block">
        <div class="achievements d-flex flex-column flex-md-row align-items-md-stretch">
          <div
            *ngFor="let achievement of achievements"
            class="achievements__item d-flex flex-column grid-item animate-card-3"
          >
            <div class="achievements__card">
              <p class="achievements__number">{{ achievement.number }}</p>
              <p class="achievements__descr">{{ achievement.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- About Me Data -->
      <div class="content__block grid-block block-large">
        <div class="container-fluid p-0">
          <div class="row g-0 justify-content-between">
            <!-- Description -->
            <div class="col-12 col-xl-8 grid-item about-descr">
              <p class="about-descr__text animate-in-up">
                I wonder if I've been changed in the night? Let me think. Was I the same when I got
                up this morning? I almost think I can remember feeling a little different. But if
                I'm not the same, the
                <a href="#contact" class="text-link">next question</a>
                is 'Who in the world am I?' Ah, that's the great puzzle!
              </p>
              <p class="about-descr__text animate-in-up">
                Be what you would seem to be - or, if you'd like it put more simply - never imagine
                yourself not to be otherwise than what it might appear to others that what you were
                or
                <a href="#portfolio" class="text-link">might have been</a>
                was not otherwise than what you had been would have appeared to them to be
                otherwise.
              </p>
              <div class="btn-group about-descr__btnholder animate-in-up">
                <a
                  class="btn mobile-vertical btn-default btn-hover btn-hover-accent"
                  href="/resume.pdf"
                  target="_blank"
                >
                  <span class="btn-caption">Download CV</span>
                  <i class="ph-bold ph-download-simple"></i>
                </a>
              </div>
            </div>

            <!-- Personal Information -->
            <div class="col-12 col-xl-4 grid-item about-info">
              <div class="about-info__item animate-in-up">
                <h6>
                  <small class="top">Name</small>
                  Alex Walker
                </h6>
              </div>
              <div class="about-info__item animate-in-up">
                <h6>
                  <small class="top">Phone</small>
                  <a class="text-link-bold" href="tel:+12127089400">+1 212-708-9400</a>
                </h6>
              </div>
              <div class="about-info__item animate-in-up">
                <h6>
                  <small class="top">Email</small>
                  <a
                    class="text-link-bold"
                    href="mailto:hello@alexwalker.com?subject=Message%20from%20your%20site"
                    >hello@alexwalker.com</a
                  >
                </h6>
              </div>
              <div class="about-info__item animate-in-up">
                <h6>
                  <small class="top">Location</small>
                  <a
                    class="text-link-bold"
                    href="https://maps.app.goo.gl/xMJXTEUeHkv6kYRQ6"
                    target="_blank"
                    >Odesa, Ukraine</a
                  >
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="content__block grid-block">
        <div class="container-fluid p-0">
          <div class="row g-0 align-items-stretch cards">
            <div
              *ngFor="let service of services"
              class="col-12 col-md-6 cards__item grid-item animate-card-2"
            >
              <div class="cards__card d-flex flex-column">
                <div class="cards__descr">
                  <h4 class="cards__title animate-in-up" [innerHTML]="service.title"></h4>
                  <div class="cards__tags d-flex flex-wrap animate-in-up">
                    <span *ngFor="let tag of service.tags" class="rounded-tag tag-outline">
                      {{ tag }}
                    </span>
                  </div>
                  <p class="small cards__text animate-in-up">{{ service.description }}</p>
                </div>
                <div class="cards__image d-flex animate-in-up">
                  <img [src]="service.image" alt="Service Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about {
        background: var(--base-tint);
      }

      .achievements {
        gap: 2rem;
        margin-bottom: 4rem;
      }

      .achievements__item {
        flex: 1;
        min-height: 16rem;
      }

      .achievements__card {
        background: var(--base);
        border: 0.1rem solid var(--stroke-elements);
        border-radius: var(--_radius-l);
        padding: 3rem 2rem;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all var(--_animspeed-medium) ease;
      }

      .achievements__card:hover {
        transform: translateY(-0.5rem);
        border-color: var(--accent);
      }

      .achievements__number {
        font-family: var(--_font-accent);
        font-size: 4.8rem;
        font-weight: 700;
        color: var(--accent);
        margin-bottom: 1.2rem;
        line-height: 1;
      }

      .achievements__descr {
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--t-medium);
        margin: 0;
      }

      .about-descr {
        padding-right: 4rem;
      }

      .about-descr__text {
        font-size: 1.8rem;
        line-height: 1.7;
        margin-bottom: 2.4rem;
      }

      .about-descr__btnholder {
        margin-top: 3rem;
      }

      .about-info {
        padding-left: 2rem;
      }

      .about-info__item {
        margin-bottom: 3rem;
      }

      .about-info__item:last-child {
        margin-bottom: 0;
      }

      .about-info__item h6 {
        margin: 0;
        line-height: 1.4;
      }

      .about-info__item h6 small.top {
        display: block;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--t-muted);
        margin-bottom: 0.4rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      .cards {
        gap: 2rem 0;
      }

      .cards__item {
        padding: 0 1rem 2rem;
      }

      .cards__card {
        background: var(--base);
        border: 0.1rem solid var(--stroke-elements);
        border-radius: var(--_radius-l);
        padding: 3rem 2.4rem 0;
        height: 100%;
        overflow: hidden;
        transition: all var(--_animspeed-medium) ease;
      }

      .cards__card:hover {
        transform: translateY(-0.5rem);
        border-color: var(--accent);
      }

      .cards__descr {
        margin-bottom: 2.4rem;
      }

      .cards__title {
        margin-bottom: 1.6rem;
      }

      .cards__tags {
        gap: 0.8rem;
        margin-bottom: 1.6rem;
      }

      .cards__text {
        margin-bottom: 0;
      }

      .cards__image {
        margin: 0 -2.4rem -2.4rem;
        overflow: hidden;
      }

      .cards__image img {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform var(--_animspeed-medium) ease;
      }

      .cards__card:hover .cards__image img {
        transform: scale(1.05);
      }

      /* Responsive adjustments */
      @media (max-width: 1199px) {
        .about-descr {
          padding-right: 0;
          margin-bottom: 4rem;
        }

        .about-info {
          padding-left: 0;
        }
      }

      @media (max-width: 767px) {
        .achievements {
          flex-direction: column;
        }

        .achievements__item {
          min-height: 12rem;
        }

        .achievements__card {
          padding: 2rem 1.5rem;
        }

        .achievements__number {
          font-size: 3.6rem;
        }

        .about-descr__text {
          font-size: 1.6rem;
        }

        .cards__item {
          padding: 0 0 2rem;
        }

        .cards__card {
          padding: 2.4rem 2rem 0;
        }

        .cards__image {
          margin: 0 -2rem -2rem;
        }
      }
    `,
  ],
})
export class AboutComponent {
  achievements: Achievement[] = [
    { number: '40+', description: 'Happy clients' },
    { number: '2+', description: 'Years of experience' },
    { number: '50+', description: 'Projects done' },
  ];

  services: Service[] = [
    {
      title: 'Frontend<br>development',
      tags: ['UI/UX Design', 'Design to Code'],
      description: 'I work with HTML/CSS, Framer and WordPress.',
      image: '/img/services/1200x900_s01.webp',
    },
    {
      title: 'Digital art and graphic design',
      tags: ['Illustrations', 'AI Experiments'],
      description:
        'I use Adobe Photoshop, Fresco and Blender to create illustrations and 3D renders for my clients and stocks.',
      image: '/img/services/1200x900_s02.webp',
    },
    {
      title: 'SEO/Digital marketing solutions',
      tags: ['Social Media', 'Analytics'],
      description:
        'Social media content plans, media monitoring, email and text messaging and search engine optimization.',
      image: '/img/services/1200x900_s03.webp',
    },
    {
      title: 'Brand<br>identity',
      tags: ['Logo Design', 'Style Guides'],
      description:
        'I help my clients to develop a personality and brand voice, design the brand look and logo.',
      image: '/img/services/1200x900_s04.webp',
    },
  ];
}
