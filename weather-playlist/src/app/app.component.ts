import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherEvent } from './models/weather-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private weatherApi: WeatherApiService){

  }

  ngOnInit(){
    this.testApi();
  }

  //function to call getAll() and pass the search term that user entered
  public testApi(){
    this.weatherApi.getWeather().subscribe(weather => {
      console.log(weather);
    })
  }

}