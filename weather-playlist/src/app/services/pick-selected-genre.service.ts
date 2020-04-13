import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PickSelectedGenreService {


  // Observable string sources
  private selectedGenresSource = new Subject<Genre[]>();

  // Observable string streams
  public genresSelected$ = this.selectedGenresSource.asObservable();

  constructor() { }

  // Service commands
  public createGenreList(genres: Genre[]) {
    this.selectedGenresSource.next(genres);
  }
}
