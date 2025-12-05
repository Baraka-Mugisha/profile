import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styles: [
    `
      #svgBackground.loaded { opacity: 1; }
      @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(2rem, -2rem) rotate(90deg); }
        50% { transform: translate(0, -4rem) rotate(180deg); }
        75% { transform: translate(-2rem, -2rem) rotate(270deg); }
      }
    `,
  ],
})
export class BackgroundComponent {
  ngOnInit(): void {
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
