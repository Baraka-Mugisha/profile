import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs';
import { NavBarService } from '../services/nav-bar-service';

interface Item {
  id: Number;
  name: String;
  to: String;
  icon: String;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private service: NavBarService, public route: ActivatedRoute) {}

  activeFragment = this.route.fragment.pipe(share());
  navBarItems: Item[];

  ngOnInit(): void {
    this.navBarItems = this.service.getAll();
  }

  @Input() hover: boolean = false;

  onHover() {
    this.hover = true;
  }
  onLeave() {
    this.hover = false;
  }
}
