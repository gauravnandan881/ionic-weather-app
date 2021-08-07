import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WeatherPageRoutingModule } from './weather-routing.module';
import { WeatherPage } from './weather.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    WeatherPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [WeatherPage]
})
export class WeatherPageModule {


}
