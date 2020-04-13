import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { PickSelectedGenreService } from 'src/app/services/pick-selected-genre.service';

@Component({
  selector: 'app-pick-category',
  templateUrl: './pick-category.component.html',
  styleUrls: ['./pick-category.component.scss']
})
export class PickCategoryComponent implements OnInit {

  private genresList = ["Rock", "Pop", "Jazz", "Country", "Blues", "Classical", "Funk", "Heavy Metal"];
  public genres: Genre[] = [];
  public pickGenres: Genre[] = [];

  constructor(private pickSelectedGenreService: PickSelectedGenreService) { 
    //populating genres array with genresList
    for(let i = 0; i < this.genresList.length; i++){
      this.genres.push(new Genre(this.genresList[i]));
      console.log();
    }
  }

  ngOnInit(): void {
    this.pickSelectedGenreService.genresSelected$.subscribe( genres => this.pickGenres = genres);
  }

}
