export class Song {
    trackId: number;
    trackName: string;
    artistName: string;
    artworkUrl100: string;

    constructor(song:any){
        this.trackId = song.trackId;
        this.trackName = song.trackName;
        this.artistName = song.artistName;
        this.artworkUrl100 = song.artworkUrl100;
    }
}
