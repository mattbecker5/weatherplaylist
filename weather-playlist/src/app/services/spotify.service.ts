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
    private tracks: any = [];
    private currentSong: any = null;

    constructor(private http: HttpClient) { 

    }

    //NOTE: very first step in getting our spotify code.
    public CodeInit(): string{
        let url: string = "https://accounts.spotify.com/authorize?client_id=" + this.client_id + "&response_type=" + this.response_type + "&redirect_uri=" + this.redirect_uri;
        return url;
        //debugger
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

        //debugger

        //NOTE if we get the access token back this way, this is fine too
        this.http.post(url, BODY2).subscribe((data: any) => {
            this.token = data.access_token;
            //debugger
            this.GetPlaylist();
            //this.GetUserProfile();
        }, error => {
            debugger
        });
    }

    public SetToken(token: string){

    }

    public GetToken(): string{
        return this.token;
    }

    //NOTE: currently not being used, thought we might need it for something though
    public GetUserProfile(){
        const HEADERS = { 
            headers: new HttpHeaders( { 
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + this.token,
                })
        };
        this.http.get("https://api.spotify.com/v1/me", HEADERS).subscribe((data) => {
            debugger
        }, error => {
            debugger
        });
    }

    public GetPlaylist(){
        const HEADERS = { 
            headers: new HttpHeaders( { 
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + this.token,
                })
        };
        //debugger
        this.http.get("https://api.spotify.com/v1/me/playlists", HEADERS).subscribe((data: any) => {
            var path = data.items[0].tracks.href;
            debugger

            //NOTE: get playlist data for individual tracks
            this.http.get(path, HEADERS).subscribe((playlistData: any) => {
                localStorage.setItem("playListLength", playlistData.items.length);
                for(var i=0; i < playlistData.items.length; i++){
                    //debugger
                    var trackID = playlistData.items[i].track.id;
                    this.GetTrack(trackID);
                    //debugger
                }
            }, e => {
                debugger
            });
        }, error => {
            debugger
        });
    }
    
    //NOTE: pass in track?
    public GetTrack(trackID: string){
        const HEADERS = { 
            headers: new HttpHeaders( { 
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.token,
            })
        };

        this.http.get("https://api.spotify.com/v1/audio-features/" + trackID, HEADERS).subscribe((data) => {
            this.tracks.push(data);
            console.log("adding");
            if(this.tracks.length == localStorage.getItem("playListLength")){
                this.WeatherToSong();    
            }
        }, error =>{
            debugger
        });
    }

    public WeatherToSong(){
            this.tracks;
            debugger
            switch(localStorage.getItem("weatherDescription")){
                case "clear sky":{
                    debugger
                    this.SelectSong(0);
                    break;
                }
                case "few clouds":{
                    debugger
                    this.SelectSong(1);
                    break;
                }
                case "scattered clouds":{
                    debugger
                    this.SelectSong(2);
                    break;
                }
                case "broken clouds":{
                    debugger
                    this.SelectSong(3);
                    break;
                }
                case "shower rain":{
                    debugger
                    this.SelectSong(4);
                    break;
                }
                case "rain":{
                    debugger
                    this.SelectSong(5);
                    break;
                }
                case "thunder storm":{
                    debugger
                    this.SelectSong(6);
                    break;
                }
                case "snow":{
                    debugger
                    this.SelectSong(7);
                    break;
                }
                case "mist":{
                    debugger
                    this.SelectSong(8);
                    break;
                }default:{
                    debugger
                    localStorage.setItem("trackID", this.tracks[0].id);
                }
            }
    }

    private SelectSong(key: number){
        //NOTE: if we can't find a song based on weather, we just pick the first song and play it
        localStorage.setItem("trackID", this.tracks[0].id);
        debugger

        for(var i=0; i < this.tracks.length; i++){
            if(this.tracks[i].key == key){
                localStorage.setItem("trackID", this.tracks[i].id);
                localStorage.setItem("play", "false");
                break;
            }
        }
    }


    public GetCurrentSong(): number{
       return this.currentSong.id; 
    }
}
