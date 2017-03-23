import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  @Input()
  public city:string;
  @Input()
  public temperatureAir:string;
  @Input()
  public temperatureWater:string;
}
