import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="home" class="main intro">
      <!-- Headline -->
      <div id="headline" class="headline d-flex align-items-start flex-column">
        <p class="headline__subtitle animate-headline">
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
          <span>Let's meet!</span>
        </p>
        <h1 class="headline__title animate-headline">
          I'm Alex Walker<br />Digital designer and illustrator.
        </h1>
        <div class="headline__btnholder d-flex flex-column flex-sm-row">
          <a
            class="btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile animate-headline"
            href="#portfolio"
          >
            <span class="btn-caption">My Works</span>
            <i class="ph-bold ph-squares-four"></i>
          </a>
          <a
            class="btn mobile-vertical btn-default btn-hover btn-hover-outline-mobile animate-headline"
            href="/resume.pdf"
            target="_blank"
          >
            <span class="btn-caption">Download CV</span>
            <i class="ph-bold ph-download-simple"></i>
          </a>
        </div>
      </div>

      <!-- Scroll Button -->
      <div class="rotating-btn">
        <a href="#portfolio" class="rotating-btn__link slide-down">
          <!-- SVG rotating text -->
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 120 120"
            style="enable-background:new 0 0 120 120;"
            xml:space="preserve"
            class="animate-rotation"
            data-value="360"
          >
            <defs>
              <path
                id="textPath"
                d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z"
              />
            </defs>
            <g>
              <use xlink:href="#textPath" fill="none"></use>
              <text>
                <textPath xlink:href="#textPath">Scroll for More * Scroll for More *</textPath>
              </text>
            </g>
          </svg>
          <!-- arrow icon -->
          <i class="ph-bold ph-arrow-down"></i>
        </a>
      </div>
    </section>
  `,
  styles: [
    `
      .main.intro {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10rem 4rem 4rem;
        text-align: center;
      }

      @media (min-width: 1200px) {
        .main.intro {
          margin-left: 36rem; /* Account for avatar sidebar */
          padding-left: 6rem;
        }
      }

      .headline {
        max-width: 80rem;
        z-index: 2;
      }

      .headline__subtitle {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--t-accent);
        margin-bottom: 2.4rem;
        justify-content: center;
      }

      .headline__subtitle svg {
        width: 1.3rem;
        height: 1.3rem;
        flex-shrink: 0;
      }

      .headline__title {
        margin-bottom: 4rem;
        line-height: 1.1;
      }

      .headline__btnholder {
        gap: 1.6rem;
        justify-content: center;
      }

      .headline__btnholder .btn {
        min-width: 16rem;
      }

      .rotating-btn {
        position: absolute;
        bottom: 4rem;
        right: 4rem;
        width: 12rem;
        height: 12rem;
      }

      .rotating-btn__link {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: var(--t-muted);
        text-decoration: none;
        transition: color var(--_animspeed-medium) ease;
      }

      .rotating-btn__link:hover {
        color: var(--accent);
      }

      .rotating-btn__link svg {
        position: absolute;
        width: 100%;
        height: 100%;
        fill: none;
        stroke: none;
      }

      .rotating-btn__link svg text {
        font-family: var(--_font-default);
        font-size: 1rem;
        font-weight: 500;
        fill: currentColor;
      }

      .rotating-btn__link i {
        font-size: 2.4rem;
        z-index: 1;
      }

      /* Hide rotating button on mobile */
      @media (max-width: 767px) {
        .rotating-btn {
          display: none;
        }
      }

      /* Animation delays for staggered effect */
      .animate-headline:nth-child(1) {
        animation-delay: 0.1s;
      }

      .animate-headline:nth-child(2) {
        animation-delay: 0.3s;
      }

      .animate-headline:nth-child(3) {
        animation-delay: 0.5s;
      }

      .animate-headline:nth-child(3) .btn:first-child {
        animation-delay: 0.7s;
      }

      .animate-headline:nth-child(3) .btn:last-child {
        animation-delay: 0.9s;
      }

      /* Button hover effects */
      .btn-hover-accent-mobile:hover {
        background: var(--accent);
        border-color: var(--accent);
        color: var(--base-tint);
      }

      .btn-hover-outline-mobile:hover {
        background: transparent;
        border-color: var(--accent);
        color: var(--accent);
      }

      /* Smooth scroll behavior */
      .slide-down {
        scroll-behavior: smooth;
      }

      @media (max-width: 767px) {
        .main.intro {
          padding: 8rem 2rem 4rem;
        }

        .headline__title {
          font-size: clamp(2.8rem, 8vw, 4.8rem);
        }

        .headline__btnholder {
          flex-direction: column;
          align-items: center;
        }

        .headline__btnholder .btn {
          width: 100%;
          max-width: 28rem;
        }
      }
    `,
  ],
})
export class HeroComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    // Set up smooth scrolling for anchor links
    this.setupSmoothScrolling();
  }

  private setupSmoothScrolling(): void {
    if (typeof document !== 'undefined') {
      const scrollButtons = document.querySelectorAll('a[href^="#"]');
      scrollButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const href = button.getAttribute('href');
          if (href && href !== '#') {
            const targetElement = document.querySelector(href);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }
        });
      });
    }
  }
}
