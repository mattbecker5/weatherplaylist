import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
    public trackURL: string = ""

    constructor(public app: AppComponent, public http: HttpClient, public sanitizer: DomSanitizer) { }

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
        var url = "https://open.spotify.com/embed/track/" + localStorage.getItem("trackID")
        this.trackURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        localStorage.setItem("play", true);
        debugger
    }

}
