export class WeatherEvent {
    coord: {
        lon: String;
        lat: String;
    };
    weather: {
        id: number;
        main: String;
        description: String;
    };
    main:{
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    }
    visibility: number;
    wind: {
        speed: number;
    }
    clouds: {
        all: number;
    }
    id: number;
    name: String;

    constructor(weatherEvent:any){
        this.coord.lon = weatherEvent.coord.lon;
        this.coord.lat = weatherEvent.coord.lat;

        this.weather.id = weatherEvent.weather.id;
        this.weather.main = weatherEvent.weather.main;
        this.weather.description = weatherEvent.weather.description;
        
        this.main.temp = weatherEvent.main.temp;
        this.main.pressure = weatherEvent.main.pressure;
        this.main.humidity = weatherEvent.main.humidity;
        this.main.temp_min = weatherEvent.main.temp_min;
        this.main.temp_max = weatherEvent.main.temp_max;
        
        this.visibility = weatherEvent.visibility;
        this.wind = weatherEvent.wind.speed;
        this.clouds = weatherEvent.clouds.all;

        this.id = weatherEvent.id;
        this.name = weatherEvent.name;

    }
}
