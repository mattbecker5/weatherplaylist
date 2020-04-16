import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
  selector: 'app-weather-display-small',
  templateUrl: './weather-display-small.component.html',
  styleUrls: ['./weather-display-small.component.scss']
})
export class WeatherDisplaySmallComponent implements OnInit {

  public temp: number;

  constructor(private weatherApi: WeatherApiService) { }

  ngOnInit(): void {
    this.getLocation();
    // this.getWeatherByZip();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      console.log(latitude, longitude);
      this.getWeatherByLatLon(latitude.toString(), longitude.toString());
      } );
    } else { 
      console.log("Geolocation is not supported by this browser.")
    }
  }

  //function to call getAll() and pass the search term that user entered
  public getWeatherByLatLon(lat: string, lon: string){
    this.weatherApi.getWeatherByLatLon(lat, lon).subscribe(weather => {
      console.log(weather);
      this.temp = Math.floor(weather.temp);
    })
  }

  public getWeatherByZip(){
    this.weatherApi.getWeatherByZip().subscribe(weather => {
      console.log(weather);
      this.temp = Math.floor(weather.temp);
    })
  }

}
