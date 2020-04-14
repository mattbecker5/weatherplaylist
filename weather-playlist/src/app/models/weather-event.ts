import { WeatherResponse } from '../interfaces/weather-response';

export class WeatherEvent {
    lon: number;
    lat: number;
    weatherId: number;
    weatherMain: String;
    description: String;
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    visibility: number;
    windSpeed: number;
    clouds: number;
    id: number;
    location: String;

    constructor(weatherEvent:WeatherResponse){
        this.lon = weatherEvent.coord.lon;
        this.lat = weatherEvent.coord.lat;

        this.weatherId = weatherEvent.weather.id;
        this.weatherMain = weatherEvent.weather.main;
        this.description = weatherEvent.weather.description;
        
        this.temp = weatherEvent.main.temp;
        this.pressure = weatherEvent.main.pressure;
        this.humidity = weatherEvent.main.humidity;
        this.temp_min = weatherEvent.main.temp_min;
        this.temp_max = weatherEvent.main.temp_max;
        
        this.visibility = weatherEvent.visibility;
        this.windSpeed = weatherEvent.wind.speed;
        this.clouds = weatherEvent.clouds.all;

        this.id = weatherEvent.id;
        this.location = weatherEvent.name;

    }
}
