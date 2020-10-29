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

        this.http.post(url, BODY, HEADERS).subscribe((data) => {
            console.log(data);
            debugger
        }, error => {
            console.log(error);
            debugger
        });
    }

    public SetToken(token: string){

    }

    public GetToken(): string{
        return this.token;
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
