import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherEvent } from './models/weather-event';
import { Router } from '@angular/router';
import { AppleMusicNewService } from './services/apple-music-new.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public router: Router, private appleNew: AppleMusicNewService){

  }

  ngOnInit(){
    this.appleNew.getAppleApi();
  }
}