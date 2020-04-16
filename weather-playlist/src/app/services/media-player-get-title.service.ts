import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class MediaPlayerGetTitleService {

  // Observable string sources
  private selectedTitleSource = new Subject<Song>();

  // Observable string streams
  public titleSelected$ = this.selectedTitleSource.asObservable();

  constructor() { }

  // Service commands
  public getSongTitles(title: Song) {
    this.selectedTitleSource.next(title);
  }
}
