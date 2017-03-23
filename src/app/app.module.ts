import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
