import { Component, OnInit } from '@angular/core';
import experience from '../data/resume/experience';
import { EventEmitter } from '@angular/core';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  contractType: string;
  timestamp: string;
  duties: string[];
  isActive: boolean;
  // stacks: String[];
}
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor() {}

  experiences: Experience[] = experience;
  highlighterPosition = 0;

  openTab(exp: Experience) {
    this.experiences = this.experiences.map((item) => {
      var isActive = (exp.id === item.id && true) || false;
      this.highlighterPosition = exp.id - 1;
      return {
        ...item,
        isActive,
      };
    });
  }

  trackBy(index, item) {
    return item ? item.id : undefined;
  }
  ngOnInit(): void {}
}
