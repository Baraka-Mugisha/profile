import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './../services/contentful.service';
import { map, Observable } from 'rxjs';

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
  constructor(private contentful: ContentfulService) {}
  projects$: Observable<any[]>;

  activeTab = 'all';
  categories = ['all', 'web', 'mobile', 'design'];
  // fadeTrigger = false;
  hovered: {};
  expandedProject: any;

  onProjectHover($event, project: Project) {
    this.hovered = project;
  }
  onProjectLeave($event, project: Project) {
    this.hovered = {};
    this.expandedProject = null;
  }
  hasAppeared: boolean = false;
  onAppear() {
    this.hasAppeared = true;
    console.log('I have appeared!'); // This is a good idea for debugging
  }

  changeCategories(category: string) {
    this.activeTab = category;
  }

  setExpanded(project: Project) {
    if (this.expandedProject === project.id) this.expandedProject = null;
    else this.expandedProject = project.id;
  }

  ngOnInit(): void {
    this.projects$ = this.contentful.getContent('projects');
  }
}
