import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';//Import HttpClient to service
import { Observable } from 'rxjs'; //

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient,) { }

  getWeatherData(): Observable<any>
  {
    let lat = 42.9832406;
    let lon = -81.243372;
    let apiId = '5276290338834bcaf97995c74dab83ca';
    let queryString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiId}`;
    return this.http.get(queryString); //Return http get call to call the query string
  }
}
