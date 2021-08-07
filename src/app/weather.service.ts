import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  searchWeatherData(cityName: string): Observable<any>{
    return this.http
    .get('http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=fde9c7af959670357dc9d2161d99d3fc')
    .pipe(map(response=> response));
  }
}
