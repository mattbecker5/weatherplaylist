import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';
import { AppleMusicNewService } from 'src/app/services/apple-music-new.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  @Input() song: Song;

  public status: Boolean = false;

  constructor(
    private app: AppComponent,
    public songService: SongService
    ) {}

  ngOnInit(): void {

    let state = this.app.musicGlobal.getAholdOfMediaState();
    state.addEventListener(MusicKit.Events.playbackStateDidChange, () => {
      
      let player: MusicKit.Player = state.player;
      let nowPlayingItem: MusicKit.MediaItem;
      nowPlayingItem = player.nowPlayingItem;
      // console.log("going to switch color to this: " + nowPlayingItem.id);
      if(nowPlayingItem.id == this.song.trackId.toString()){
        this.status = true;
      } else {
        this.status = false;
      }
    });

  }

  public over() {
    this.songService.setSong(this.song);
  }

  public leaveHover(){
    this.status = false;
  }

  public onClickSong(){
    //playing song by index
    this.app.musicGlobal.playSongById(this.song.trackId);
  }
}
