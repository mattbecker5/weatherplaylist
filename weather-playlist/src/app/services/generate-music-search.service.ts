import { Injectable } from '@angular/core';
import { Song } from '../models/song';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateMusicSearchService {

  // Observable string sources
  private selectedSongsSource = new Subject<Song[]>();

  // Observable string streams
  public songsSelected$ = this.selectedSongsSource.asObservable();

  constructor() { }

  // Service commands
  public createSongList(songs: Song[]) {
    this.selectedSongsSource.next(songs);
  }
}
