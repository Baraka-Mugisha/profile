import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import projects from '../data/resume/projects';

interface Project {
  id: Number;
  name: String;
  image: String;
  demo?: String;
  stacks: String[];
  tags: String[];
  website?: String;
  github?: String;
  design?: String;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(200),
      ]),
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(
          '800ms cubic-bezier(.8,-0.1,.15,1.33)',
          style({ transform: 'translateX(0%)' })
        ),
      ]),
      // transition(':leave', [
      //   animate('100ms ease-out', style({ transform: 'translateY(-100%)' })),
      // ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  projects: Project[] = projects;

  activeTab = 'all';
  categories = ['all', 'web', 'mobile', 'design'];
  // fadeTrigger = false;
  hovered: {};

  onProjectHover($event, project) {
    this.hovered = project
  }
  onProjectLeave($event, project) {
    this.hovered = {}
  }
  hasAppeared: boolean = false;
  onAppear() {
    this.hasAppeared = true;
    console.log('I have appeared!'); // This is a good idea for debugging
  }

  changeCategories(category: string) {
    this.activeTab = category;
  }

  ngOnInit(): void {}
}
