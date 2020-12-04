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
//   private applemusicURL = "https://itunes.apple.com/search?entity=song&limit=30&attribute=genreTerm";

  constructor(
    private http: HttpClient
    ) { }

/** GET songs from the server */
  public getSongs (searchTerm: string): Observable<Song[]> {

    return this.http.get<AppleMusicResponse>(this.applemusicURL + searchTerm)
    // return this.http.get<AppleMusicResponse>(this.applemusicURL)
      .pipe(
        map( reply => {
          let songs: Song[] = [];
          songs = reply.results.map( song => {
            let newSong = new Song(song);
            return newSong;
          });
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
