import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  @Input() song: Song;

  constructor() { }

  ngOnInit(): void {
  }

}
