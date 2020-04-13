import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PickSelectedGenreService {

  private pickedGenre: Genre[] = [];

  // Observable string sources
  private selectedGenresSource = new Subject<Genre[]>();

  // Observable string streams
  public genresSelected$ = this.selectedGenresSource.asObservable();

  constructor() { }

  // Service commands
  public createGenreList(genre: Genre) {
    if(!this.pickedGenre.includes(genre)){
      this.pickedGenre.push(genre);
    }
    this.selectedGenresSource.next(this.pickedGenre);
  }
}
