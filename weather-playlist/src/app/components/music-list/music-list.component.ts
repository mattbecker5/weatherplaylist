import { Component, OnInit } from '@angular/core';
import { GenerateMusicSearchService } from 'src/app/services/generate-music-search.service';
import { Song } from 'src/app/models/song';
import { AppComponent } from 'src/app/app.component';
import { AppleMusicChart } from 'src/app/models/apple-music-chart';
import { AppleMusicSong } from 'src/app/models/apple-music-song';
import { PickSelectedGenreService } from 'src/app/services/pick-selected-genre.service';
import { Genre } from 'src/app/models/genre';
import { SongService } from 'src/app/services/song.service';


@Component({
    selector: 'app-music-list',
    templateUrl: './music-list.component.html',
    styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

    public songs: Song[] = [];
    public pickGenres: Genre[] = [];
    public song: Song;

    constructor(
        public app: AppComponent,
        public generateMusicSearch: GenerateMusicSearchService,
        private pickSelectedGenreService: PickSelectedGenreService,
        public songService: SongService
    ) { }

    ngOnInit(): void {

        // Getting title for song from songService
        this.songService.songSelected$.subscribe(track => {
            this.song = track;
        });

        // Generating song from search
        //will add option to play song for 30 second
        this.generateMusicSearch.songsSelected$.subscribe(songs => {
            //load all generated songs to queue here
            this.songs = songs
            this.app.musicGlobal.setSongsToQueue(this.songs);
            // this.songs.forEach(song => {
            //     console.log(song.previewUrl);
            // });
        });

        this.pickSelectedGenreService.genresSelected$.subscribe(genres => {

            if( this.app.musicGlobal.getAholdOfMediaState().isAuthorized){
                console.log("music-list component: " + genres.length);
            this.songs = [];
            this.pickGenres = genres

            this.pickGenres.forEach(genre => {
                // console.log(genre.name)

                this.app.musicGlobal.getChartsByTypeAndGenre(['songs'], genre.id.toString()).then(results => {

                    let charts: AppleMusicChart[] = [];
                    let topSongs: AppleMusicSong[] = [];

                    //converting API respnose to ApplMusicChart Class Objects
                    results.forEach(topChart => {
                        charts.push(new AppleMusicChart(topChart));
                    });

                    //converting AppleMusicChart Objects to AppleMusicSong Objects
                    charts.forEach(elem => {
                        elem.data.forEach(song => {
                            topSongs.push(new AppleMusicSong(song));
                        })
                    })

                    //converting AppleMusicSong objects to Song class to feed into this.song array

                    // let queueLength = this.app.musicGlobal.getCurrentQueueLength();
                    // console.log("queue lenght: " + queueLength)

                    for (let i = 0; i < topSongs.length; i++) {
                        let artworkURL1 = topSongs[i].attributes.artwork.url.replace("{w}", "100");
                        let artworkURL2 = artworkURL1.replace("{h}", "100");
                        let songConvert = {
                            trackId: topSongs[i].id,
                            trackName: topSongs[i].attributes.name,
                            artistName: topSongs[i].attributes.artistName,
                            artworkUrl100: artworkURL2,
                            previewUrl: topSongs[i].attributes.previews[0].url,
                            trackViewUrl: topSongs[i].attributes.url,
                            albumName: topSongs[i].attributes.albumName,
                            releaseDate: topSongs[i].attributes.releaseDate
                        }
                        let itunesSong = new Song(songConvert);

                        //pushing to this.songs array here
                        this.songs.push(itunesSong);
                    }

                    //load all generated songs to queue here
                    this.app.musicGlobal.setSongsToQueue(this.songs);
                });
            });
            } else {
                this.app.musicGlobal.getAholdOfMediaState().authorize().then(token => token.charCodeAt(0));
            }
        });

    }

}
