import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// declare const MusicKit:any;

@Injectable({
  providedIn: 'root'
})
export class AppleMusicNewService {

  private jwtToken = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkwyUzlSNEEyRzMifQ.eyJpYXQiOjE1ODc3NTYyMDUsImV4cCI6MTYwMzMwODIwNSwiaXNzIjoiWkZIQjlVNURIOSJ9.zsGtXrqpSnvd3d4F63jJiNvTWiYrFEN7O8UCr_BXKhQ0impJVzW-T3qsvCagryj8UM8XSBgggNITckmTX08-Dw";
  
  // let playbackState: MusicKit.PlaybackStates = music.playbackState;
  // let player: MusicKit.Player = music.player;

  private music: MusicKit.MusicKitInstance;

  constructor() {
    //this stuff only get called once in the app: Its a Singleton!
    let appConfig: MusicKit.AppConfiguration = {
      build: '1.0',
      icon: 'icon.png',
      name: 'music-weather-playlist',
      version: '1.0.0',
    };

    this.music = MusicKit.configure({
      app: appConfig,
      developerToken: this.jwtToken,
      storefrontId: 'us',
      declarativeMarkup: true,
      bitrate: MusicKit.PlaybackBitrate.HIGH,
    });

    this.music = MusicKit.getInstance();

  }

  public playSongByid(songId: string, startPosition: number){

    // let music = this.getAppleApi();
    let player: MusicKit.Player = this.music.player;

    // let url = 'https://itunes.apple.com/us/album/hamilton-original-broadway-cast-recording/1025210938';

    const items = [new MusicKit.MediaItem({attributes:"", id:songId, type:"song"})];

    this.music.setQueue({items}).then(queue => {
      if (queue.nextPlayableItem) {
        console.log(queue.nextPlayableItem.title);
      }
      if (queue.previousPlayableItem) {
        console.log(queue.previousPlayableItem);
      }
    });

    // Playback Controls
    this.music.play();
    this.music.pause();
  }

  public getGenreById(id:string){

    // let music = this.getAppleApi();
    let api: MusicKit.API = this.music.api;

    api.genre(id).then(reply => {
      console.log(reply);
    });
  }

  public getChartsByTypeAndGenre(type:string[], genre:string){
    // let music = this.getAppleApi();
    // let api: MusicKit.API = music.api;

    this.music.api.charts(type, { limit: 30, genre: genre }).then(reply => {
      console.log(reply);
    });
  }

  public searchByTerm(term:string){
    // let music = this.getAppleApi();
    let results = this.music.api.search('post', { limit: 30, types: 'artists,albums' });
    console.log(results); 
  }

  public stopPlaying(){
    // let music = this.getAppleApi();
    let player: MusicKit.Player = this.music.player;
    player.stop();
  }
}
