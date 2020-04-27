import { Component, OnInit } from '@angular/core';
import { GenerateMusicSearchService } from 'src/app/services/generate-music-search.service';
import { Song } from 'src/app/models/song';
import { AppComponent } from 'src/app/app.component';
import { AppleMusicChart } from 'src/app/models/apple-music-chart';
import { AppleMusicSong } from 'src/app/models/apple-music-song';
import { PickSelectedGenreService } from 'src/app/services/pick-selected-genre.service';
import { Genre } from 'src/app/models/genre';


@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  public songs: Song[] = [];
  public pickGenres: Genre[] = [];
  
  constructor(
    public app: AppComponent,
    public generateMusicSearch: GenerateMusicSearchService,
    private pickSelectedGenreService: PickSelectedGenreService
    ) { }

  ngOnInit(): void {
    this.generateMusicSearch.songsSelected$.subscribe(songs => this.songs = songs);

    this.pickSelectedGenreService.genresSelected$.subscribe( genres => {
      this.pickGenres = genres

      console.log(this.pickGenres);
      this.pickGenres.forEach(genre => {
        console.log(genre.name)

        this.app.musicGlobal.getChartsByTypeAndGenre(['songs'], genre.id.toString()).then(results => {
          
          let charts: AppleMusicChart[] = [];
          let topSongs: AppleMusicSong[] = [];
    
          results.forEach(topChart => {
            charts.push(new AppleMusicChart(topChart));
          });
    
          charts.forEach(elem =>{
            elem.data.forEach(song =>{
              topSongs.push(new AppleMusicSong(song));
            })
          })
    
          for(let i = 0; i < topSongs.length; i++){
            let artworkURL1 = topSongs[i].attributes.artwork.url.replace("{w}", "100");
            let artworkURL2 = artworkURL1.replace("{h}", "100");
            let songConvert = {
              trackId: topSongs[i].id,
              trackName: topSongs[i].attributes.name,
              artistName: topSongs[i].attributes.artistName,
              artworkUrl100: artworkURL2,
              previewUrl: topSongs[i].attributes.previews[0].url,
              trackViewUrl: topSongs[i].attributes.url,
              currentIndex: i
            }
            let itunesSong = new Song(songConvert);
            this.songs.push(itunesSong);
          }

          //load all generated songs to queue here
          this.app.musicGlobal.setSongsToQueue(this.songs);
        });
      });
    });

  }

}
