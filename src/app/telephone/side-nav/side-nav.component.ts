import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  openMap = {
    sub1: true,
    sub2: false,
    sub3: false
  };
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
