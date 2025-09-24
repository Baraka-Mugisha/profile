import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  @Input() currentTheme: 'light' | 'dark' = 'light';
  @Output() themeToggled = new EventEmitter<void>();

  menuItems = [
    { href: '#home', caption: 'Home', icon: 'ph-bold ph-house-simple' },
    { href: '#portfolio', caption: 'Portfolio', icon: 'ph-bold ph-squares-four' },
    { href: '#about', caption: 'About Me', icon: 'ph-bold ph-user' },
    { href: '#resume', caption: 'Resume', icon: 'ph-bold ph-article' },
    { href: '#contact', caption: 'Contact', icon: 'ph-bold ph-envelope' },
  ];

  onThemeToggle(): void {
    this.themeToggled.emit();
  }
}
