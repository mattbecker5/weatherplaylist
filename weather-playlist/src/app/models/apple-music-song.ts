export class AppleMusicSong {
    attributes: {
        albumName: string;
        artistName: string;
        artwork: {
            width: number;
            height: number;
            url: string;
        };
        composerName: string;
        discNumber: number;
        durationInMillis: number;
        genreNames: string[];
        hasLyrics: boolean;
        isrc: string;
        name: string;
        playParams: {
            id: string;
            kind: string;
        }
        previews: [{
            url:string;
        }]
        releaseDate: string;
        trackNumber: number;
        url: string;
    };
    href: string;
    id: string;
    type: string;

    constructor(song:any){
        this.attributes = song.attributes;
        this.href = song.href;
        this.id = song.id;
        this.type = song.type;
    }
}
