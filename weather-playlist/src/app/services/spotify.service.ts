import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) { 

    }
    
    public GetSong(){
        this.http.get("https://api.spotify.com/v1/browse/new-releases").subscribe((data) => {
            console.log("yay");
            console.log(data);
        }, error =>{
            console.log("error error");
            console.log(error);
        });
    }
}
