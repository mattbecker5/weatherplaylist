export interface WeatherResponse {
    coord: {
        lon: number;
        lat: number;
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
}

