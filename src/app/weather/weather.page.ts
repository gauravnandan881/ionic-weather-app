import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../weather.service';

interface Weather {
  cityName: string;
  temperature: number;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})

export class WeatherPage implements OnInit {

  weatherForm: FormGroup;
  weathers: Weather[]=[
    {
      cityName : 'Delhi',
      temperature : 38
    },
    {
      cityName : 'Patna',
      temperature : 42
    }
  ];
  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { }
  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      cityName: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

  searchCity(){
    console.log(this.weatherForm.value.cityName);
    this.weatherService.searchWeatherData(this.weatherForm.value.cityName);
  }
}
