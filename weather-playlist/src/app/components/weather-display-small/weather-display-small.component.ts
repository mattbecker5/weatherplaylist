import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-display-small',
  templateUrl: './weather-display-small.component.html',
  styleUrls: ['./weather-display-small.component.scss']
})
export class WeatherDisplaySmallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var x = document.getElementById("demo");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }
  }

}
