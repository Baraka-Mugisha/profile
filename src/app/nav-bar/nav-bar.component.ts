import { Component, OnInit } from '@angular/core';
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
  constructor(private service: NavBarService) {}
  navBarItems: Item[];

  ngOnInit(): void {
    this.navBarItems = this.service.getAll();
  }
}
