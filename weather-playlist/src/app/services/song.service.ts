import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  // Observable string sources
  private selectedSong = new Subject<Song>();

  // Observable string streams
  public songSelected$ = this.selectedSong.asObservable();

  constructor() { }

  // Service commands
  public setSong(song: Song) {
    this.selectedSong.next(song);
  }
}
