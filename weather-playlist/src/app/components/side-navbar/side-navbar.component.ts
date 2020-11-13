import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  public currentPath: string;

  constructor() { }

  ngOnInit(): void {
  }

  public getPath() {
    this.currentPath = window.location.pathname;
    return this.currentPath;
  }

}
