import { Injectable } from '@angular/core';
import { AppleMusicChart } from '../models/apple-music-chart';
import { Song } from '../models/song';
// declare const MusicKit:any;

@Injectable({
  providedIn: 'root'
})
export class AppleMusicNewService {

  private jwtToken = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IktXRDM3RlZBQzYifQ.eyJpYXQiOjE2OTUyNTk5NDksImV4cCI6MTcxMDgxMTk0OSwiaXNzIjoic21hcnR3ZWF0aGVyMiJ9.8WEhz1EQMgFNGPkFkKX1NdBNIdOBvaTimK8EdptzFFFBXaEfp9Go-Wuq-Bxl02UvgSZRUqTm8hK3FtxIpfbc9w";
  private music: MusicKit.MusicKitInstance;

  constructor() {

    //this stuff only get called once in the app: Its a Singleton!
    let appConfig: MusicKit.AppConfiguration = {
      build: '1.0',
      icon: 'https://pacmotor.com/img/smart-weather/smart-icon.png',
      name: 'smart-weather-playlist',
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

    //set default value
    this.setVolume(.5);

  }

  public getAholdOfMediaState(){
    return this.music;
  }

  public playSongById(song: Song){

    let songId = song.trackId

    //will make edits here for checking if Spotify or apple music or iTunes

    if(this.music.isAuthorized){
        console.log("made it here");
        this.music.authorize().then(token => token.charCodeAt(0));
        const queue: MusicKit.Queue = this.music.player.queue;
        let index = queue.indexForItem(songId.toString());
        this.playSongByIndex(index);
    } else {
        console.log("the user has not been auth by apple music!");
        console.log(song.previewUrl);
        var myaudio = new Audio(song.previewUrl);
        myaudio.play(); //- This will play the music.
    }

  }

  public setVolume(volume: number){
    let player: MusicKit.Player = this.music.player;
    player.volume = volume;
    console.log(player.volume);
  }

  public playSongByIndex(index: number){
    let player: MusicKit.Player = this.music.player;
    player.changeToMediaAtIndex(index);
  }

  public getCurrentQueueLength():number{
    const queue: MusicKit.Queue = this.music.player.queue;
    return queue.length;
  }

  public setSongsToQueue(itemsObj: Song[]){

    let items: MusicKit.MediaItem[] = [];

    itemsObj.forEach(song => {
      items.push(new MusicKit.MediaItem({attributes:"", id:song.trackId.toString(), type:"song"}))
    });

    this.music.setQueue({items}).then(queue => {
      if (queue.nextPlayableItem) {
        // console.log(queue.nextPlayableItem.title);
      }
      if (queue.previousPlayableItem) {
        // console.log(queue.previousPlayableItem);
      }
      // this.music.play();
    });
  }

  public play(){
    this.music.play();
  }

  public pause(){
    this.music.pause();
  }

  public next(){
    this.music.skipToNextItem();
  }

  public previous(){
    this.music.skipToPreviousItem();
  }

  public getGenreById(id:string){
    let api: MusicKit.API = this.music.api;
    api.genre(id).then(reply => {
      // console.log(reply);
    });
  }

  public getChartsByTypeAndGenre(type:string[], genre:string): Promise<any>{
    return this.music.api.charts(type, { limit: 30, genre: genre }).then(results => {
      // console.log(results.songs[0]);
      let songs: AppleMusicChart[] = [];
      songs = results.songs.map( song => new AppleMusicChart(song) );
      return songs;
    });
  }

  public searchByTerm(term:string){
    let results = this.music.api.search('post', { limit: 30, types: 'artists,albums' });
    console.log(results); 
  }

  public stopPlaying(){
    let player: MusicKit.Player = this.music.player;
    player.stop();
  }
}
