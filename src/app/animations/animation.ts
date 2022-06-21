import {
  style,
  transition,
  trigger,
  animate,
  stagger,
  query,
} from '@angular/animations';

export let slide = trigger('slide', [
  transition(':enter', [style({ backgroundColor: 'red' }), animate(2000)]),
  transition(':leave', [
    animate(500, style({ transform: 'translateX(-100%)' })),
  ]),
]);

export let fade = trigger('fade', [
  transition(':enter', [
    query('li', [
      style({ opacity: 0 }),
      stagger(50, animate(300, style({ opacity: 1 }))),
    ]),
  ]),
]);
