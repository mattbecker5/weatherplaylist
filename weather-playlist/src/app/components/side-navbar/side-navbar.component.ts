import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-side-navbar',
    templateUrl: './side-navbar.component.html',
    styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
    public currentPath: string;
    public spotify: SpotifyService;
    public spotify_url: string = "";
    public showSpotify: boolean = false;

    constructor(public app: AppComponent, public http: HttpClient) { }

    ngOnInit(): void {
        this.spotify = new SpotifyService(this.http);
        const urlParams = new URLSearchParams(window.location.search);
        const CODE = urlParams.get('code');

        if(CODE){
            this.spotify.SetCode(CODE);
            this.spotify.TokenInit();
        }
    }

    appleMusicSignout() {
        console.log("tryin to signout of apple music");
        this.app.musicGlobal.getAholdOfMediaState().unauthorize();
    }

  public getPath() {
    this.currentPath = window.location.pathname;
    return this.currentPath;
  }

    public GetSpotifyCode(){
        this.spotify_url = this.spotify.CodeInit();
    }

    public TrackToWeather(){
        this.showSpotify = true;
        localStorage.setItem("play", true);
        debugger
        //this.spotify.WeatherToSong(localStorage.getItem("weatherDescription"));
    }

}
