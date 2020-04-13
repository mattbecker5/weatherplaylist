import { Component, OnInit, Input } from '@angular/core';
import { Genre } from 'src/app/models/genre';

@Component({
  selector: 'app-pick-genre-button',
  templateUrl: './pick-genre-button.component.html',
  styleUrls: ['./pick-genre-button.component.scss']
})
export class PickGenreButtonComponent implements OnInit {
  @Input() pickGenre: Genre;

  constructor() { }

  ngOnInit(): void {
  }

}
