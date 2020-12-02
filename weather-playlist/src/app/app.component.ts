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
    public spotify_url: string = "";
  
  constructor(public router: Router, private appleNew: AppleMusicNewService, private http: HttpClient){

  }

  //NOTE: the appleMusicApi service is busted, i think the token is old
  ngOnInit(){
        //NOTE: this spotify code checks the page for url parameters to pull back the code query so we can trade it for a token
        if(localStorage.play == true){
            localStorage.play = false;
        }
        this.spotify = new SpotifyService(this.http);
        const urlParams = new URLSearchParams(window.location.search);
        const CODE = urlParams.get('code');

        if(CODE){
            this.spotify.SetCode(CODE);
            this.spotify.TokenInit();
        }
      //debugger

    //get ahold of the music api instance! we can only do this once in the app
    this.musicGlobal = new AppleMusicNewService();
    
    // this.appleNew.playSongByid("1488408568");
    // this.appleNew.playSongByid("1486263180");
    // this.appleNew.getGenreById('11');

  }
 
    //NOTE: before we get a token, we need a code
    public GetSpotifyCode(){
        this.spotify_url = this.spotify.CodeInit();
    }
}
