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

  private startPosition = 0;
  constructor(
    private app: AppComponent,
    public songService: SongService, 
    private appleNew: AppleMusicNewService
    ) {}

  ngOnInit(): void {
  }

  public over() {
    this.songService.setSong(this.song);
  }

  public onClickSong(){
    //playing song by index
    this.app.musicGlobal.playSongById(this.song.trackId);
    this.app.musicGlobal.setVolume(0.2);
  }
}
