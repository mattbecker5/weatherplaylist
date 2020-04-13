import { Component, OnInit } from '@angular/core';
import { AppleMusicAPIService } from 'src/app/service/apple-music-api.service';
import { Song } from '../../model/song';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public searchTerm: string;
  songs: Song[] = [];

  constructor(private appleMusicAPIService: AppleMusicAPIService) { }

  ngOnInit(): void {
  }

  private getAll(term: string) {
    this.appleMusicAPIService.getSongs(this.searchTerm)
      .subscribe( songs => this.songs = songs );
      console.log(this.songs);
  }

  onClick(term: string){
    this.getAll(this.searchTerm);
    console.log("Searching for " + this.searchTerm);
  }

}
