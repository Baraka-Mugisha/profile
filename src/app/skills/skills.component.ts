import { Observable } from 'rxjs';
import { ContentfulService } from './../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import skills from 'src/app/data/resume/skills';
// import { fade } from '../animations/animation';
import {
  style,
  transition,
  trigger,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fade', [
      state('false', style({ background: 'none' })),
      state('true', style({ background: '$secondary' })),
      transition('false => true', animate(500)),
      transition('true => false', animate(500)),
    ]),
  ],
})
export class SkillsComponent implements OnInit {
  constructor(private contentful: ContentfulService) {}

  skills$: Observable<any>;
  activeTab = 'all';
  categories = ['all', 'frontend', 'backend', 'mobile', 'devops', 'design'];
  // fadeTrigger = false;

  changeCategories(category: string) {
    this.activeTab = category;
  }

  ngOnInit(): void {
    this.skills$ = this.contentful.getContent('skills');
  }
}
