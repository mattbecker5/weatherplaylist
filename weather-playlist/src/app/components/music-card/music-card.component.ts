import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  @Input() song: Song;

  constructor(public songService: SongService) { }

  ngOnInit(): void {
  }

  public over() {
    this.songService.setSong(this.song);
  }
}
