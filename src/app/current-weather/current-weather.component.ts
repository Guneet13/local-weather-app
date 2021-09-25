import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor() { //inject dummy data for now
    this.current = {
      city: 'Redmond',
      country: 'US',
      date: new Date(),
      image: '',
      temperature: 73,
      description: 'Sunny'
    }

  }

  ngOnInit(): void {
  }

}
