import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() type: string;
  @Input() text: string;
  @Input() href: string;
}
