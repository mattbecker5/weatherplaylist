import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Song } from '../model/song';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppleMusicResponse } from '../model/apple-music-response';

@Injectable({
  providedIn: 'root'
})
export class AppleMusicAPIService {

  private applemusicURL = "https://itunes.apple.com/search?entity=song&limit=15&term=";

  constructor(private http: HttpClient) { }

/** GET songs from the server */
  getSongs (searchTerm: string): Observable<Song[]> {
    return this.http.get<AppleMusicResponse>(this.applemusicURL + searchTerm)
      .pipe(
        map( reply => {
          let songs: Song[] = [];
          songs = reply.results.map( song => new Song(song) );
          console.log(songs);
          return songs;
        }),
        catchError(this.handleError<Song[]>('getSongs', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return(error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }
}
