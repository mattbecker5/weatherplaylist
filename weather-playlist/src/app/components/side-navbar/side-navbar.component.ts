import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-side-navbar',
    templateUrl: './side-navbar.component.html',
    styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  public currentPath: string;

    constructor(public app: AppComponent) { }

    ngOnInit(): void {
    }

    appleMusicSignout() {
        console.log("tryin to signout of apple music");
        this.app.musicGlobal.getAholdOfMediaState().unauthorize();
    }

  public getPath() {
    this.currentPath = window.location.pathname;
    return this.currentPath;
  }

}
