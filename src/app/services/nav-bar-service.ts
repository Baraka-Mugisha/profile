import { Injectable } from '@angular/core';
import navBarItems from "../data/navBarItems"

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  constructor() {}
  getAll() {
    return navBarItems;
  }
}
