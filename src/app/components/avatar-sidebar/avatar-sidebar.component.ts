import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo, socialLinks } from '../../data/personal';
import { PersonalInfo, SocialLink } from '../../types';

@Component({
  selector: 'app-avatar-sidebar',
  imports: [CommonModule],
  templateUrl: './avatar-sidebar.component.html',
})
export class AvatarSidebarComponent implements OnInit {
  personalInfo: PersonalInfo = personalInfo;
  socialLinks: SocialLink[] = socialLinks;

  ngOnInit(): void {
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
