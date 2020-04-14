import { Component, OnInit } from '@angular/core';
import { AppleMusicAPIService } from 'src/app/services/apple-music-api.service';
import { Song } from '../../models/song';
import { GenerateMusicSearchService } from 'src/app/services/generate-music-search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public searchTerm: string;
  songs: Song[] = [];

  constructor(private appleMusicAPIService: AppleMusicAPIService, private generateMusicSearch: GenerateMusicSearchService) { }

  ngOnInit(): void {
  }

  //function to call getAll() and pass the search term that user entered
  public searchButton(term: string){
    console.log("Searching for " + this.searchTerm); //logging to console
    this.appleMusicAPIService.getSongs(this.searchTerm)
    .subscribe( songs => {
      this.songs = songs;
      this.generateMusicSearch.createSongList(this.songs);
      console.log(this.songs);
    });
  }

  // clearSearchInput(){
  //    this.searchTerm = null;
  //    console.log('test');
  // }

}
