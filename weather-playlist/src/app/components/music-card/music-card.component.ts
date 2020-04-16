import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/models/song';
import { MediaPlayerGetTitleService } from 'src/app/services/media-player-get-title.service';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  @Input() song: Song;

  constructor(public mediaPlayerGetTitleService: MediaPlayerGetTitleService) { }

  ngOnInit(): void {
  }

  public over() {
    this.mediaPlayerGetTitleService.getSongTitles(this.song);
  }
}
