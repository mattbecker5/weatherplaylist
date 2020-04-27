import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  public song: Song; //song that was passed in from mediaPlayerService

  constructor(
    public songService: SongService,
    private app: AppComponent
    ) {}

  ngOnInit(): void {
    this.songService.songSelected$.subscribe(track => {
      // console.log('the sonngggg: ' + track.trackViewUrl);
      this.song = track;
      // console.log('Track: ' + this.song.trackName);
      // console.log('preview url: ' + this.song.previewUrl);
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

}
