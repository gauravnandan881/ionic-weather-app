import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../Model/weather';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})

export class WeatherPage implements OnInit {
  weatherForm: FormGroup;
  weather: Weather;
  city: string;
  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { }
  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      search: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
    // this.fetch();
  }
  fetch(){
    if(!this.weatherForm.value.search){
      this.city = 'Delhi';
    }else{
      this.city = this.weatherForm.value.search;
    }
    this.weatherService.weatherData(this.city).subscribe({
      next: async (response) => {
        const data: any = response;
        this.weather = data;
        console.log(this.weather);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
