import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

    private token: string = "";
    private client_id: string = "743070f3cb68481c96dd92fcd2f78d70";
    private client_secret: string = "d94ab2eb6c9844daad577d4c758bdff8";
    private redirect_uri: string = "http://localhost:4200/create-account";
    private response_type: string = "code";
    private code: string = "";

    constructor(private http: HttpClient) { 

    }

    public GetToken(): string{
        let url: string = "https://accounts.spotify.com/authorize?client_id=" + this.client_id + "&response_type=" + this.response_type + "&redirect_uri=" + this.redirect_uri;
        return url;
    }

    public SetCode(code: string){
        this.code = code;
    }

    public GetCode(): string{
        return this.code;
    }
    
    public GetSong(){
        this.GetToken();

        //const headers = {
        //    
        //}

        //this.http.get("https://api.spotify.com/v1/audio-features/{id}").subscribe((data) => {
        //    console.log("yay");
        //    console.log(data);
        //}, error =>{
        //    console.log("error error");
        //    console.log(error);
        //});
    }
}
