import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }
  weatherForm : FormGroup;
  weathers : Weather[]=[
    {
      cityName : "Delhi",
      temperature : 38
    },
    {
      cityName : "Patna",
      temperature : 42
    }
  ]
  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      cityName: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    })
  }

  searchCity(){
    console.log(this.weatherForm.value.cityName);
  }
}
