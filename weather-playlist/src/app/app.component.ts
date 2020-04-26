import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherEvent } from './models/weather-event';
import { Router } from '@angular/router';
import { AppleMusicNewService } from './services/apple-music-new.service';
import { AppleMusicChart } from './models/apple-music-chart';
import { AppleMusicSong } from './models/apple-music-song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public musicGlobal: AppleMusicNewService;
  
  constructor(public router: Router, private appleNew: AppleMusicNewService){

  }


  ngOnInit(){
    //get ahold of the music api instance! we can only do this once in the app
    this.musicGlobal = new AppleMusicNewService();

    // this.appleNew.playSongByid("1488408568");
    // this.appleNew.playSongByid("1486263180");
    // this.appleNew.getGenreById('11');
    // this.musicGlobal.getChartsByTypeAndGenre(['songs'], '15').then(results => {
    //   // console.log(results);
    //   let charts: AppleMusicChart[] = [];
    //   let topSongs: AppleMusicSong[] = [];

    //   results.forEach(topChart => {
    //     // console.log(song)
    //     charts.push(new AppleMusicChart(topChart));
    //   });

    //   charts.forEach(elem =>{
    //     console.log(elem);
    //     elem.data.forEach(song =>{
    //       topSongs.push(new AppleMusicSong(song));
    //     })
    //   })

    //   topSongs.forEach(song => {
    //     console.log(song);
    //   });
      
    // });
  }
}