import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { PickSelectedGenreService } from 'src/app/services/pick-selected-genre.service';

@Component({
  selector: 'app-pick-category',
  templateUrl: './pick-category.component.html',
  styleUrls: ['./pick-category.component.scss']
})
export class PickCategoryComponent implements OnInit {

  private genresList = [{name:"R&B/Soul", id:15},  
                        {name:"Latino", id:12},
                        {name:"Pop", id:14}, 
                        {name:"Jazz", id:11},
                        {name:"SoundTrack", id:16},
                        {name:"Dance/House", id:17},
                        {name:"Electronic", id:7},
                        {name:"Hip-Hop/Rap", id:18},
                        {name:"Alternative", id:20},
                        {name:"Rock", id:21},
                        {name:"Christian", id:22},
                        {name:"Reggae", id:24},
                        {name:"Country", id:6}, 
                        {name:"Blues", id:2},
                        {name:"Classical", id:5}, 
                        {name:"Holiday", id:8}
                      ];
  public genres: Genre[] = [];
  public pickGenres: Genre[] = [];

  constructor(private pickSelectedGenreService: PickSelectedGenreService) { 
    //populating genres array with genresList
    for(let i = 0; i < this.genresList.length; i++){
      this.genres.push(new Genre(this.genresList[i].name, this.genresList[i].id));
      // console.log();
    }
  }

  ngOnInit(): void {
    this.pickSelectedGenreService.genresSelected$.subscribe( genres => this.pickGenres = genres);
  }

  public enableSubmitButton(){
    // console.log("Enabling submit genre button");
    let element = document.getElementById('submit-picked');
    // console.log(element);
    element.classList.remove('submit-button-hidden');
  }
}
