import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppleMusicNewService } from './services/apple-music-new.service';
import { SpotifyService } from './services/spotify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public musicGlobal: AppleMusicNewService;
  public spotify: SpotifyService;
  
  constructor(public router: Router, private appleNew: AppleMusicNewService, private http: HttpClient){

  }


  ngOnInit(){
    //get ahold of the music api instance! we can only do this once in the app
    this.musicGlobal = new AppleMusicNewService();
    this.spotify = new SpotifyService(this.http);
    this.spotify.GetSong();
    
    // this.appleNew.playSongByid("1488408568");
    // this.appleNew.playSongByid("1486263180");
    // this.appleNew.getGenreById('11');
  }
}
