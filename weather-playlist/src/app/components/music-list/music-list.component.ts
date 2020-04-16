import { Component, OnInit } from '@angular/core';
import { GenerateMusicSearchService } from 'src/app/services/generate-music-search.service';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  public songs: Song[] = [];
  constructor(public generateMusicSearch: GenerateMusicSearchService) { }

  ngOnInit(): void {
    this.generateMusicSearch.songsSelected$.subscribe(songs => this.songs = songs);
  }

  over(event: any) {
    console.log('Hovering over ' + event.target.id);
  }

}
