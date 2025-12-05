import { Component, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundComponent } from './components/background/background.component';
import { AvatarSidebarComponent } from './components/avatar-sidebar/avatar-sidebar.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    BackgroundComponent,
    AvatarSidebarComponent,
    HeroComponent,
    PortfolioComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-portfolio');
  protected readonly currentTheme = signal<'light' | 'dark'>('light');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) {
        this.currentTheme.set(savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.currentTheme.set(prefersDark ? 'dark' : 'light');
      }

      effect(() => {
        document.documentElement.setAttribute('data-theme', this.currentTheme());
        localStorage.setItem('theme', this.currentTheme());
      });
    }
  }

  toggleTheme(): void {
    this.currentTheme.update((theme) => (theme === 'light' ? 'dark' : 'light'));
  }
}
