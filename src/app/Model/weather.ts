/* eslint-disable @typescript-eslint/naming-convention */
export interface Weather {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: 'stations';
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

// export interface Weather {
//   lon: number;
//   lat: number;
//   id: number;
//   main: string;
//   description: string;
//   icon: string;
//   base: string;

//   temp: number;
//   feels_like: number;
//   temp_min: number;
//   temp_max: number;
//   pressure: number;
//   humidity: number;

//   visibility: number;
//   speed: number;
//   deg: number;
//   gust: number;
//   all: number;
//   dt: number;

//   type: number;
//   // id: number;
//   country: string;
//   sunrise: number;
//   sunset: number;

//   timezone: number;
//   // id: number;
//   name: string;
//   cod: number;
// }
