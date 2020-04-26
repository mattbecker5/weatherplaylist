import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from '../interfaces/weather-response';
import { Observable, of } from 'rxjs';
import { WeatherEvent } from '../models/weather-event';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  

  constructor(private http: HttpClient) { }

  /** GET songs from the server */
  public getWeatherByZip(zip: String): Observable<WeatherEvent> {
    let weatherUrlApi = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=4f6b2e6b7dcccf97559cf33e7208bad0&units=imperial`;
    return this.http.get<WeatherResponse>(weatherUrlApi)
      .pipe(
        map( reply => {
          console.log(reply);
          // let weather: WeatherEvent;

          let weather = new WeatherEvent(reply);
          // weather = reply.results.map( weather => new WeatherEvent(weather) );
          
          // console.log(weather.coord.lon);
          return weather;
        }),
        catchError(this.handleError<WeatherEvent>('getWeather'))
      );
  }

    /** GET songs from the server */
    public getWeatherByLatLon(lat:string, lon:string): Observable<WeatherEvent> {
      // console.log("here");
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4f6b2e6b7dcccf97559cf33e7208bad0&units=imperial`;

      return this.http.get<WeatherResponse>(url)
        .pipe(
          map( reply => {
            // console.log(reply.coord.lon);
            // let weather: WeatherEvent;
  
            let weather = new WeatherEvent(reply);
            // weather = reply.results.map( weather => new WeatherEvent(weather) );
            
            // console.log(weather.coord.lon);
            return weather;
          }),
          catchError(this.handleError<WeatherEvent>('getWeather'))
        );
    }

  /* Handle Http operation that failed */ 
  private handleError<T>(operation = 'operation', result?: T){
    return(error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
