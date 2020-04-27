export class Song {
    trackId: number;
    trackName: string;
    artistName: string;
    artworkUrl100: string;
    previewUrl: string;
    trackViewUrl: string;
    albumName: string;
    releaseDate: string;



    constructor(song:any){
        this.trackId = song.trackId;
        this.trackName = song.trackName;
        this.artistName = song.artistName;
        this.artworkUrl100 = song.artworkUrl100;
        this.previewUrl = song.previewUrl;
        this.trackViewUrl = song.trackViewUrl;
        this.albumName = song.albumName;
        this.releaseDate = song.releaseDate;
    }
}
