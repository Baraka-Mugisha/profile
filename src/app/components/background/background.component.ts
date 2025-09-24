import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  template: `
    <div id="svgBackground" class="svg-background">
      <!-- Top SVG item -->
      <div class="background__svg01" data-speed="0.8">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="1000px"
          height="1000px"
          viewBox="0 0 1000 1000"
          style="enable-background:new 0 0 1000 1000;"
          xml:space="preserve"
        >
          <defs>
            <radialGradient
              id="color-gradient"
              cx="418.5665"
              cy="225.9685"
              r="499.9326"
              fx="866.8251"
              fy="4.6162"
              gradientTransform="matrix(-0.6935 0.7207 -0.7207 -0.6935 953.1126 355.0528)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" style="stop-color:var(--gradient-one)" />
              <stop offset="1" style="stop-color:var(--gradient-one);stop-opacity:0" />
            </radialGradient>
          </defs>
          <circle fill="url(#color-gradient)" cx="500" cy="500" r="500" />
        </svg>
      </div>

      <!-- Bottom SVG item -->
      <div class="background__svg02" data-speed="0.4">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="429.6px"
          height="429.6px"
          viewBox="0 0 429.6 429.6"
          style="enable-background:new 0 0 429.6 429.6;"
          xml:space="preserve"
        >
          <defs>
            <radialGradient
              id="color-gradient-2"
              cx="2213.9312"
              cy="-11537.4219"
              r="214.85"
              fx="2393.6191"
              fy="-11419.6494"
              gradientTransform="matrix(1.902285e-02 0.9998 0.9998 -1.954636e-02 11706.5303 -2223.4016)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" style="stop-color:var(--gradient-one)" />
              <stop offset="1" style="stop-color:var(--gradient-one);stop-opacity:0" />
            </radialGradient>
          </defs>
          <path
            fill="url(#color-gradient-2)"
            d="M63,63C146.9-21,282.9-21,366.8,62.9s83.8,219.9-0.1,303.8s-219.9,83.9-303.8,0.1S-20.9,146.9,63,63z"
          />
        </svg>
      </div>
    </div>
  `,
  styles: [
    `
      .svg-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0;
        transition: opacity 1s ease;
      }

      .svg-background.loaded {
        opacity: 1;
      }

      .background__svg01 {
        position: absolute;
        top: -25%;
        right: -25%;
        width: 100rem;
        height: 100rem;
        animation: float 20s ease-in-out infinite;
      }

      .background__svg02 {
        position: absolute;
        bottom: -15%;
        left: -15%;
        width: 42.96rem;
        height: 42.96rem;
        animation: float 15s ease-in-out infinite reverse;
      }

      @keyframes float {
        0%,
        100% {
          transform: translate(0, 0) rotate(0deg);
        }
        25% {
          transform: translate(2rem, -2rem) rotate(90deg);
        }
        50% {
          transform: translate(0, -4rem) rotate(180deg);
        }
        75% {
          transform: translate(-2rem, -2rem) rotate(270deg);
        }
      }

      @media (max-width: 768px) {
        .background__svg01 {
          width: 60rem;
          height: 60rem;
          top: -15%;
          right: -30%;
        }

        .background__svg02 {
          width: 30rem;
          height: 30rem;
          bottom: -10%;
          left: -20%;
        }
      }
    `,
  ],
})
export class BackgroundComponent {
  ngOnInit(): void {
    // Add loaded class after a delay to trigger opacity animation
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        const bgElement = document.getElementById('svgBackground');
        if (bgElement) {
          bgElement.classList.add('loaded');
        }
      }
    }, 1500);
  }
}
