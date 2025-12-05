import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SECTION_IDS } from '../../shared/constants';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements AfterViewInit {
  @Input() currentTheme: 'light' | 'dark' = 'light';
  @Output() themeToggled = new EventEmitter<void>();

  menuItems = [
    { href: '#home', caption: 'Home', icon: 'fa-solid fa-house', sectionId: 'home' },
    {
      href: '#portfolio',
      caption: 'Portfolio',
      icon: 'fa-solid fa-layer-group',
      sectionId: 'portfolio',
    },
    { href: '#about', caption: 'About Me', icon: 'fa-solid fa-user', sectionId: 'about' },
    { href: '#resume', caption: 'Resume', icon: 'fa-solid fa-file-lines', sectionId: 'resume' },
    { href: '#contact', caption: 'Contact', icon: 'fa-solid fa-envelope', sectionId: 'contact' },
  ];

  activeSection = signal<string>('home');
  private observer?: IntersectionObserver;

  readonly navBaseClasses =
    'flex justify-center items-center w-[4.4rem] h-[4.4rem] rounded-full border-none text-base transition-all duration-300 ease-in-out hover:!text-t-bright lg:w-auto lg:h-20 lg:px-8 lg:mr-4 lg:rounded-m lg:font-bold lg:text-2xl lg:leading-[5rem] lg:backdrop-blur-[10px] lg:last:mr-0 3xl:h-24 3xl:px-10 3xl:text-3xl 3xl:leading-[6rem] lg:btn lg:btn-square cursor-pointer';

  isActive(id: string): boolean {
    return this.activeSection() === id;
  }

  itemClasses(id: string): string {
    return (
      this.navBaseClasses +
      (this.isActive(id)
        ? ' bg-accent text-white'
        : ' bg-transparent lg:bg-transparent text-t-muted lg:text-t-disabled')
    );
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
        (el): el is HTMLElement => !!el
      );

      this.observer = new IntersectionObserver(
        (entries) => {
          let best: { id: string; ratio: number } | null = null;
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const id = (entry.target as HTMLElement).id;
              const ratio = entry.intersectionRatio;
              if (!best || ratio > best.ratio) {
                best = { id, ratio };
              }
            }
          }
          if (best && this.activeSection() !== best.id) {
            this.activeSection.set(best.id);
          }
        },
        {
          root: null,
          rootMargin: '0px 0px -40% 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      sections.forEach((el) => this.observer!.observe(el));
    }
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection.set(sectionId);
    }
  }

  onThemeToggle(): void {
    this.themeToggled.emit();
  }
}
