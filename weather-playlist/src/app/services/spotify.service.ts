import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

    //NOTE: very first step in getting our spotify code.
    public CodeInit(): string{
        let url: string = "https://accounts.spotify.com/authorize?client_id=" + this.client_id + "&response_type=" + this.response_type + "&redirect_uri=" + this.redirect_uri;
        return url;
    }

    public SetCode(code: string){
        this.code = code;
    }

    public GetCode(): string{
        return this.code;
    }

    //NOTE: once we have our spotify code, we can make a request for a token
    public TokenInit(){
        this.code; 
        let b64Client_id: string = btoa(this.client_id);
        let b64Client_secret: string = btoa(this.client_secret);
        let auth: string = "Basic " + b64Client_id + ":" + b64Client_secret;
        var url: string = "https://accounts.spotify.com/api/token";
        const HEADERS = { 
            headers: new HttpHeaders( { 
                    "Authorization": auth,
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
        };
        const BODY = new HttpParams()
            .append("grant_type", "authorization_code")
            .append("code", this.code)
            .append("redirect_uri", this.redirect_uri);

        const BODY2 = new HttpParams()
            .append("grant_type", "authorization_code")
            .append("code", this.code)
            .append("redirect_uri", this.redirect_uri)
            .append("client_id", this.client_id)
            .append("client_secret", this.client_secret);

        debugger

        //NOTE if we get the access token back this way, this is fine too
        this.http.post(url, BODY2).subscribe((data: any) => {
            this.token = data.access_token;
            debugger
            this.GetPlaylist();
        }, error => {
            debugger
        });
    }

    public SetToken(token: string){

    }

    public GetToken(): string{
        return this.token;
    }

    public GetPlaylist(){
        const HEADERS = { 
            headers: new HttpHeaders( { 
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + this.token,
                })
        };
        debugger
        this.http.get("https://api.spotify.com/v1/tracks/6rPO02ozF3bM7NnOV4h6s2", HEADERS).subscribe((data) => {
            debugger
        }, error => {
            debugger
        });
    }
    
    public GetSong(){
        //this.GetToken();

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
