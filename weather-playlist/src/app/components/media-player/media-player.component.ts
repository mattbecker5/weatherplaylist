import { Component, OnInit, Input } from '@angular/core';
import { MediaPlayerGetTitleService } from 'src/app/services/media-player-get-title.service';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  public song: Song; //song that was passed in from mediaPlayerService
  public trackName: string; 

  constructor(public mediaPlayerGetTitleService: MediaPlayerGetTitleService) { }

  ngOnInit(): void {
    this.mediaPlayerGetTitleService.titleSelected$.subscribe(track => {
      this.song = track;
      this.trackName = this.song.trackName
      console.log('Track: ' + this.song.trackName);
    });
  }

}
