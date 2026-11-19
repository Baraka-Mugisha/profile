import { Component } from '@angular/core';
import { experiences } from '../../data/experience';
import { caseStudies } from '../../data/case-studies';
import { personalInfo, socialLinks } from '../../data/personal';

@Component({
  selector: 'app-swiss-page',
  templateUrl: './swiss-page.component.html',
  styleUrl: './swiss-page.component.scss',
})
export class SwissPageComponent {
  readonly info = personalInfo;
  readonly links = socialLinks;
  readonly experiences = experiences;
  readonly cases = caseStudies;
}
