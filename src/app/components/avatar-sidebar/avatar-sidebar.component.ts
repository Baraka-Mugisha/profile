import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar-sidebar',
  imports: [CommonModule],
  template: `
    <div id="avatar" class="avatar">
      <div class="avatar__container d-flex flex-column justify-content-lg-between">
        <!-- Logo and Image Block -->
        <div class="avatar__block">
          <div class="avatar__logo d-flex align-items-center">
            <div class="logo__image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="85px"
                height="85px"
                viewBox="0 0 85 85"
                style="enable-background:new 0 0 85 85;"
                xml:space="preserve"
                class="gradient-fill"
              >
                <defs>
                  <linearGradient
                    id="gradientFill"
                    gradientUnits="userSpaceOnUse"
                    x1="9.9604"
                    y1="75.0338"
                    x2="75.0387"
                    y2="9.9555"
                  >
                    <stop offset="0" style="stop-color:var(--accent)" />
                    <stop offset="1" style="stop-color:var(--secondary)" />
                  </linearGradient>
                </defs>
                <path
                  class="gradient-fill"
                  fill="url(#gradientFill)"
                  d="M51,0H34C15.2,0,0,15.2,0,34v17c0,14.3,8.9,26.6,21.4,31.6c0,0,0,0,0,0l0,0C25.3,84.1,29.5,85,34,85h17
                  c6,0,11.7-1.6,16.6-4.3c0.1-0.1,0.2-0.1,0.3-0.2C78.1,74.6,85,63.6,85,51V34C85,15.2,69.8,0,51,0z M83,51c0,10.7-5.3,20.2-13.4,26
                  v-2.5v-3.9h3.9v-3.9h-3.9v-3.9h3.9v-3.9h-3.9H67v-3.9V51h-3.9v3.9v3.9h2.6v3.9v3.9v3.9h-3.9h-3.9v3.9h3.9h3.9v3.9v1
                  C61.3,81.7,56.3,83,51,83H34c-4.5,0-8.7-0.9-12.6-2.6v-2v-3.9h3.9h3.9v-3.9h-3.9h-3.9v-3.9v-3.9v-3.9H24v-3.9V51h-3.9v3.9v3.9h-2.6
                  h-3.9v3.9h3.9v3.9h-3.9v3.9h3.9v3.9v3.9C8.2,72.8,2,62.6,2,51V34C2,16.4,16.4,2,34,2h17c17.6,0,32,14.4,32,32V51z M50.1,54.9H54
                  v3.9v3.9h-3.9v-3.9V54.9z M33.1,54.9H37v3.9v3.9h-3.9v-3.9V54.9z M27.9,51H24v-3.9v-3.9v-3.9h3.9v3.9v3.9V51z M31.8,39.3h-3.9v-3.9
                  h3.9V39.3z M31.8,43.2v-3.9h3.9v3.9H31.8z M63.1,47.1V51h-3.9v-3.9v-3.9v-3.9h3.9v3.9V47.1z M35.7,47.1v-3.9h3.9h3.9h3.9h3.9v3.9
                  h-3.9h-3.9h-3.9H35.7z M59.2,39.3h-3.9v-3.9h3.9V39.3z M55.3,43.2h-3.9v-3.9h3.9V43.2z"
                />
              </svg>
            </div>
            <div class="logo__caption">
              <p>
                {{ personalInfo.name.split(' ')[0] }}<br />{{ personalInfo.name.split(' ')[1] }}
              </p>
            </div>
          </div>
          <div class="avatar__image">
            <img [src]="personalInfo.avatar" [alt]="personalInfo.name" />
          </div>
        </div>

        <!-- Specialization Block -->
        <div class="avatar__block">
          <h6>
            <small class="top">Specialization:</small>
            {{ personalInfo.specialization }}
          </h6>
        </div>

        <!-- Location Block -->
        <div class="avatar__block">
          <h6>
            <small class="top">Based in:</small>
            {{ personalInfo.location }}
          </h6>
        </div>

        <!-- Socials and CTA Block -->
        <div class="avatar__block">
          <div class="avatar__socials">
            <ul class="socials-square d-flex justify-content-between">
              <li class="socials-square__item" *ngFor="let social of socialLinks">
                <a class="socials-square__link btn" [href]="social.url" target="_blank">
                  <i [class]="social.icon"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="avatar__btnholder">
            <a class="btn btn-default btn-fullwidth btn-hover btn-hover-accent" href="#contact">
              <span class="btn-caption">Let's Work Together!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .avatar {
        position: fixed;
        top: 0;
        left: 0;
        width: 36rem;
        height: 100vh;
        background: var(--base-tint);
        border-right: 0.1rem solid var(--stroke-elements);
        z-index: 100;
        transform: translateX(-100%);
        transition: transform var(--_animspeed-medium) ease;
      }

      .avatar.loaded {
        transform: translateX(0);
      }

      .avatar__container {
        height: 100%;
        padding: 3rem 2.4rem;
        gap: 3rem;
      }

      .avatar__block {
        width: 100%;
      }

      .avatar__logo {
        margin-bottom: 2.4rem;
        gap: 1.6rem;
      }

      .logo__image svg {
        width: 6rem;
        height: 6rem;
      }

      .logo__caption p {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.2;
        margin: 0;
        color: var(--t-bright);
      }

      .avatar__image {
        text-align: center;
        margin-bottom: 2.4rem;
      }

      .avatar__image img {
        width: 18rem;
        height: 18rem;
        border-radius: 50%;
        object-fit: cover;
        border: 0.4rem solid var(--stroke-elements);
      }

      .avatar__block h6 {
        margin-bottom: 1.6rem;
        line-height: 1.4;
      }

      .avatar__block h6 small.top {
        display: block;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--t-muted);
        margin-bottom: 0.4rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      .socials-square {
        list-style: none;
        margin: 0 0 2.4rem 0;
        padding: 0;
        gap: 0.8rem;
      }

      .socials-square__item {
        margin: 0;
      }

      .socials-square__link {
        width: 4.8rem;
        height: 4.8rem;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--_radius-m);
        font-size: 2rem;
      }

      .avatar__btnholder .btn {
        margin: 0;
      }

      /* Hide on mobile */
      @media (max-width: 1199px) {
        .avatar {
          display: none;
        }
      }

      /* Adjust content margin when avatar is visible */
      @media (min-width: 1200px) {
        :host {
          padding-left: 36rem;
        }
      }
    `,
  ],
})
export class AvatarSidebarComponent {
  personalInfo = {
    name: 'Alex Walker',
    specialization: 'UI/UX designer<br>and frontend developer',
    location: 'Odesa, Ukraine',
    avatar: '/img/avatars/1024x1024_a01.webp',
  };

  socialLinks = [
    { icon: 'ph-bold ph-dribbble-logo', url: 'https://dribbble.com/' },
    { icon: 'ph-bold ph-behance-logo', url: 'https://www.behance.net/' },
    { icon: 'ph-bold ph-instagram-logo', url: 'https://www.instagram.com/' },
    { icon: 'ph-bold ph-twitch-logo', url: 'https://www.twitch.tv/' },
    { icon: 'ph-bold ph-pinterest-logo', url: 'https://www.pinterest.com/' },
  ];

  ngOnInit(): void {
    // Add loaded class after a delay
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        const avatarElement = document.getElementById('avatar');
        if (avatarElement) {
          avatarElement.classList.add('loaded');
        }
      }
    }, 2000);
  }
}
