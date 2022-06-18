import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import projects from '../data/resume/projects';

interface Project {
  id: Number;
  name: String;
  image: String;
  altImage: String;
  stacks: String[];
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
        animate(2000),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  projects: Project[] = projects;

  onProjectHover($event) {
    console.log('hovered...', $event);
  }

  hasAppeared: boolean = false;
  onAppear() {
    this.hasAppeared = true;
    console.log('I have appeared!'); // This is a good idea for debugging
  }

  ngOnInit(): void {}
}
