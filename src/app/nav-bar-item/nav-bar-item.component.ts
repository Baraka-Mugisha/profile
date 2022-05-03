import { Component, OnInit, Input } from '@angular/core';

interface Item {
  id: Number;
  name: String;
  to: String;
  icon: String;
}

@Component({
  selector: 'nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss'],
})
export class NavBarItemComponent implements OnInit {
  constructor() {}

  @Input() navItem: Item;

  ngOnInit(): void {}
}
