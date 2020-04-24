import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Song } from '../models/song';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppleMusicResponse } from '../interfaces/apple-music-response';

@Injectable({
  providedIn: 'root'
})
export class AppleMusicAPIService {

  private applemusicURL = "https://itunes.apple.com/search?entity=song&limit=15&term=";

  constructor(private http: HttpClient) { }

/** GET songs from the server */
  public getSongs (searchTerm: string): Observable<Song[]> {
    return this.http.get<AppleMusicResponse>(this.applemusicURL + searchTerm)
      .pipe(
        map( reply => {
          console.log(reply);
          let songs: Song[] = [];
          songs = reply.results.map( song => new Song(song) );
          console.log(songs);
          return songs;
        }),
        catchError(this.handleError<Song[]>('getSongs', []))
      );
  }

  /* Handle Http operation that failed */ 
  private handleError<T>(operation = 'operation', result?: T){
    return(error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }
}
