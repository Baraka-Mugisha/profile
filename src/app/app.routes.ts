import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'swiss',
    loadComponent: () =>
      import('./pages/swiss/swiss-page.component').then((m) => m.SwissPageComponent),
  },
  { path: '**', redirectTo: '' },
];
