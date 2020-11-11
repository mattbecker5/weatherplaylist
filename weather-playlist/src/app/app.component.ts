import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppleMusicNewService } from './services/apple-music-new.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public musicGlobal: AppleMusicNewService;
  
  constructor(public router: Router, private appleNew: AppleMusicNewService){

  }


  ngOnInit(){
    //get ahold of the music api instance! we can only do this once in the app
    this.musicGlobal = new AppleMusicNewService();

    // this.appleNew.playSongByid("1488408568");
    // this.appleNew.playSongByid("1486263180");
    // this.appleNew.getGenreById('11');

  }
}