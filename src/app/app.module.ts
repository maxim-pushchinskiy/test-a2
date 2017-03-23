import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ResortComponent } from './resort/resort.component';
import { CosialActivityComponent } from './cosial-activity/cosial-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ResortComponent,
    CosialActivityComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
