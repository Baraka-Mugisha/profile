import { fade } from '../animations/animation';
import { ContentfulService } from './../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import experience from '../data/resume/experience';
import { map, Observable } from 'rxjs';

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
  animations: [fade],
})
export class ExperienceComponent implements OnInit {
  constructor(private contentful: ContentfulService) {}

  experiences$: Observable<any[]>;
  highlighterPosition = 0;

  openTab(exp: Experience) {
    this.experiences$ = this.experiences$.pipe(
      map((items) =>
        items.map((item, index) => {
          var isActive = (exp.id === item.id && true) || false;
          this.highlighterPosition = items.map((pos) => pos.id).indexOf(exp.id);
          return {
            ...item,
            isActive,
          };
        })
      )
    );
  }

  trackBy(index, item) {
    return item ? item.id : undefined;
  }
  ngOnInit(): void {
    this.experiences$ = this.contentful.getContent('experience');
  }
}
