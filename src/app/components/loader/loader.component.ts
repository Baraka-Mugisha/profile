import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div id="loader" class="loader" [class.loaded]="isLoaded">
      <div id="loaderContent" class="loader__content" [class.fade-out]="fadeOut">
        <div class="loader__shadow"></div>
        <div class="loader__box"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--base);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity var(--_animspeed-slow) ease, visibility var(--_animspeed-slow) ease;
      }

      .loader.loaded {
        opacity: 0;
        visibility: hidden;
      }

      .loader__content {
        position: relative;
        width: 8rem;
        height: 8rem;
        transition: opacity var(--_animspeed-medium) ease;
      }

      .loader__content.fade-out {
        opacity: 0;
      }

      .loader__box {
        width: 100%;
        height: 100%;
        background: var(--accent);
        border-radius: var(--_radius-s);
        animation: loaderBox 2s ease-in-out infinite;
      }

      .loader__shadow {
        position: absolute;
        bottom: -2rem;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 0.4rem;
        background: var(--base-shade);
        border-radius: 50%;
        animation: loaderShadow 2s ease-in-out infinite;
      }

      @keyframes loaderBox {
        0%,
        100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-3rem) rotate(180deg);
        }
      }

      @keyframes loaderShadow {
        0%,
        100% {
          transform: translateX(-50%) scale(1);
          opacity: 0.8;
        }
        50% {
          transform: translateX(-50%) scale(0.7);
          opacity: 0.4;
        }
      }
    `,
  ],
})
export class LoaderComponent implements OnInit {
  isLoaded = false;
  fadeOut = false;

  ngOnInit(): void {
    // Simulate loading time
    setTimeout(() => {
      this.fadeOut = true;
      setTimeout(() => {
        this.isLoaded = true;
      }, 300);
    }, 1000);
  }
}
