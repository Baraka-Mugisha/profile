import { Component } from '@angular/core';
import { experiences } from '../../data/experience';
import { caseStudies } from '../../data/case-studies';
import { personalInfo, socialLinks } from '../../data/personal';

@Component({
  selector: 'app-dark-page',
  templateUrl: './dark-page.component.html',
  styleUrl: './dark-page.component.scss',
})
export class DarkPageComponent {
  readonly info = personalInfo;
  readonly links = socialLinks;
  readonly experiences = experiences;
  readonly cases = caseStudies;
}
