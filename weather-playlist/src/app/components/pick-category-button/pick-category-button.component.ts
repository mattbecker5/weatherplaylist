import { Component, OnInit, Input } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { PickSelectedGenreService } from 'src/app/services/pick-selected-genre.service';

@Component({
  selector: 'app-pick-category-button',
  templateUrl: './pick-category-button.component.html',
  styleUrls: ['./pick-category-button.component.scss']
})
export class PickCategoryButtonComponent implements OnInit {
  @Input() genre: Genre;
  private pickedGenre: Genre[] = [];

  constructor(private pickSelectedGenreService: PickSelectedGenreService) { }

  ngOnInit(): void {
  }

  public createGenreButton(){
    console.log('Genre Selected: ' + this.genre.name);
    this.pickedGenre.push(this.genre);
    this.pickSelectedGenreService.createGenreList(this.pickedGenre);
  }

}
