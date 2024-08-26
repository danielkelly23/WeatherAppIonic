import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Import HttpClient to service
import { Observable } from 'rxjs'; //

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient,) { }

  getWeatherData(): Observable<any>
  {
    let lat = 53.350140;//This is the Latitude for Dublin
    let lon = -6.266155;//This is the Longitude for Dublin
    let apiId = '5276290338834bcaf97995c74dab83ca';
    let queryString = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiId}&units=metric`;
    return this.http.get(queryString); //Return http get call to call the query string
  }
}
