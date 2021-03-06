import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';
import { AppComponent } from 'src/app/app.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  public song: Song; //song that was passed in from mediaPlayerService
  public playOrPause: boolean = false;
  public loadingIcon: boolean = false;
    //public spotifyTrackID: string = "1DFixLWuPkv3KT3TnV35m3";
    public spotifyTrackIDBase: string = "https://open.spotify.com/embed/track/"
    public spotifyTrackID: string = "";
    public showSpotify: boolean = false;

  constructor(
    private app: AppComponent,
    public songService: SongService,
    private sanitizer:DomSanitizer
    ) {}

    ngOnInit(): void {
        this.songService.songSelected$.subscribe(track => {
        this.song = track;
        this.getTrack();
        debugger
        //console.log('Track: ' + this.song.trackName);
        //console.log('preview url: ' + this.song.previewUrl);
    });

    let state = this.app.musicGlobal.getAholdOfMediaState();

    state.addEventListener(MusicKit.Events.playbackStateDidChange, () => {
      let player: MusicKit.Player = state.player;
      // state = MusicKit.PlaybackStates.loading;
      // state = MusicKit.PlaybackStates.playing;
      // state = MusicKit.PlaybackStates.paused;
      // state = MusicKit.PlaybackStates.stopped;
      // state = MusicKit.PlaybackStates.ended;
      // state = MusicKit.PlaybackStates.seeking;
      // state = MusicKit.PlaybackStates.waiting;
      // state = MusicKit.PlaybackStates.stalled;
      // state = MusicKit.PlaybackStates.completed;

      if(player.playbackState === MusicKit.PlaybackStates.loading){
        console.log("loading the track now");
        this.loadingIcon = true;
      }
      if(player.playbackState === MusicKit.PlaybackStates.playing){
        console.log("playing the track now");
        this.playOrPause = true;
        this.loadingIcon = false;
      }
      if(player.playbackState === MusicKit.PlaybackStates.paused){
        console.log("paused the track now");
        this.playOrPause = false;
      }
    });
  }

  public playSong(){
    this.app.musicGlobal.play();
  }

  public pauseSong(){
    this.app.musicGlobal.pause();
  }

  public nextSong(){
    this.app.musicGlobal.next();
  }

  public previousSong(){
    this.app.musicGlobal.previous();
  }

  public volumeChanged(e){
    console.log('volume', e);
    this.app.musicGlobal.setVolume(e);
  }

    //public getTrack(): string{
    public getTrack() {
        //this.showSpotify = true;
        //this.spotifyTrackID = this.DomSanitizer.bypassSecurityTrustUrl(this.spotifyTrackIDBase + localStorage.getItem("trackID"));
        //debugger
        //return this.spotifyTrackID;
    }

  public likeSong(){
    console.log("Saving to favorite songs playlist.");
  }
}
