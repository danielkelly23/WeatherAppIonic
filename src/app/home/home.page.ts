import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';//import weather service from weather.service
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public res: any;

  constructor(private weatherAPI:WeatherService) {}

  ngOnInit(){
      this.getWeatherData();
  }

  getWeatherData(){
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response;
      console.log(this.res);
    });
  }
 
  

}
