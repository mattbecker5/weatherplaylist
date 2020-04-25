import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
declare const MusicKit:any;

@Injectable({
  providedIn: 'root'
})
export class AppleMusicNewService {

  private jwtToken = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkwyUzlSNEEyRzMifQ.eyJpYXQiOjE1ODc3NTYyMDUsImV4cCI6MTYwMzMwODIwNSwiaXNzIjoiWkZIQjlVNURIOSJ9.zsGtXrqpSnvd3d4F63jJiNvTWiYrFEN7O8UCr_BXKhQ0impJVzW-T3qsvCagryj8UM8XSBgggNITckmTX08-Dw";
  

  constructor(private http: HttpClient) { 
    this.getGenres();
  }

  public getAppleApi(){
    let music: MusicKit.MusicKitInstance;

    let appConfig: MusicKit.AppConfiguration = {
      build: '1.0',
      icon: 'icon.png',
      name: 'music-weather-playlist',
      version: '1.0.0',
    };

    music = MusicKit.configure({
      app: appConfig,
      developerToken: this.jwtToken,
      storefrontId: 'us',
      declarativeMarkup: true,
      bitrate: MusicKit.PlaybackBitrate.HIGH,
    });

    let api: MusicKit.API = music.api;
    let playbackState: MusicKit.PlaybackStates = music.playbackState;
    let player: MusicKit.Player = music.player;

    


    // api.charts(['1']).then(data => {
    //   console.log('the data'+data);
    // });
   
    let url = 'https://itunes.apple.com/us/album/hamilton-original-broadway-cast-recording/1025210938';

    music.setQueue({ url: url }).then(function(queue) {
      // Queue is instantiated and set on music player.
      // queue.play();

    });

    // https://api.music.apple.com/v1/catalog/{storefront}/genres

    // let results = music.api.search('james brown', { limit: 2, types: 'artists,albums' });
    // let results = music.api.search('genres');
    // console.log(results); 

    // Playback Controls
    music.play();
    // music.pause();
    // music.stop();

    api.genre('15').then(reply => {
      console.log(reply);
    });

    // api.charts(['rap','country']).then(reply => {
    //   console.log(reply);
    // });
    
  }

  /** GET songs from the server */
  public getGenres(){
    
  }
}
