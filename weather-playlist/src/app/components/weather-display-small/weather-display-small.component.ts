import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-weather-display-small',
  templateUrl: './weather-display-small.component.html',
  styleUrls: ['./weather-display-small.component.scss']
})
export class WeatherDisplaySmallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      console.log(latitude, longitude);
      } );
    } else { 
      console.log("Geolocation is not supported by this browser.")
    }
  }

}
