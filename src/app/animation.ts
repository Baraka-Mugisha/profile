import { style, transition, trigger, animate } from '@angular/animations';

export let slide = trigger('slide', [
  transition(':enter', [style({ backgroundColor: 'red' }), animate(2000)]),
  transition(':leave', [
    animate(500, style({ transform: 'translateX(-100%)' })),
  ]),
]);

export let fade = trigger('fade', [
  transition('true', [style({ backgroundColor: '#64f5e0' }), animate(2000)]),
  transition('false', [
    animate(500, style({ transform: 'translateX(-100%)' })),
  ]),
]);
