import { Component, OnInit } from '@angular/core';
import { AppleMusicAPIService } from 'src/app/services/apple-music-api.service';
import { Song } from '../../models/song';
import { GenerateMusicSearchService } from 'src/app/services/generate-music-search.service';
import { UserService } from 'src/app/services/user.service';
import { DatabaseService } from 'src/app/services/database.service';
import { SearchHistory } from 'src/app/models/search-history';
import { AppleMusicNewService } from 'src/app/services/apple-music-new.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public hideShowMenu: boolean = false;
  public searchTerm: string;
  songs: Song[] = [];
  public currentPath: string;

  constructor(
    public app: AppComponent,
    private appleMusicAPIService: AppleMusicAPIService, 
    private generateMusicSearch: GenerateMusicSearchService, 
    public userService: UserService, 
    private database: DatabaseService
    ) { }

  ngOnInit(): void {
  }

  //function to call getAll() and pass the search term that user entered
  public searchButton(term: string){
    // console.log("Searching for " + this.searchTerm); //logging to console

    //getting the length of songs in queue
    // let queueLength = this.app.musicGlobal.getCurrentQueueLength();
    // console.log("queue lenght: " + queueLength)


    this.appleMusicAPIService.getSongs(this.searchTerm)
    .subscribe( songs => {

      //update queue index on each searched song
      // songs.forEach(song => {
      //   song.currentIndex = queueLength;
      //   queueLength = queueLength + 1;
      // });

      //save seached song list to this.songs
      this.songs = songs;

      //sending seached song list to make avaiable to other components
      this.generateMusicSearch.createSongList(this.songs);
    });

    this.userService.user$.subscribe( data => {
      let searchObj = {userID: data.uid, term: this.searchTerm};
      let newTerm = new SearchHistory(searchObj);

      this.database.addSearchHistory(newTerm);
    });
  }

  public getPath() {
    this.currentPath = window.location.pathname;
    return this.currentPath;
  }

  public showHideMenu(){
    this.hideShowMenu = !this.hideShowMenu;
    console.log("Drop down menu" + this.hideShowMenu);
  }
}
