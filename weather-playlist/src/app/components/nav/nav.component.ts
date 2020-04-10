import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public searchTerm: string;
  private searchURL: string = "https://itunes.apple.com/search?entity=song&limit=15&term=";

  constructor() { }

  ngOnInit(): void {
  }

  //fetch list of songs from api with search term
  fetchTrackList(term: string){
    console.log("Fetching track list from API");
    
    
  }

}
