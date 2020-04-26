import { Component, OnInit, Input } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { PickSelectedGenreService } from 'src/app/services/pick-selected-genre.service';

@Component({
  selector: 'app-pick-genre-button',
  templateUrl: './pick-genre-button.component.html',
  styleUrls: ['./pick-genre-button.component.scss']
})
export class PickGenreButtonComponent implements OnInit {
  @Input() pickGenre: Genre;

  constructor(private pickSelectedGenreService: PickSelectedGenreService) { }

  ngOnInit(): void {
  }

  delete(){
    // console.log("Deleting " + this.pickGenre.name);
    this.pickSelectedGenreService.deleteGenre(this.pickGenre);
  }
}
