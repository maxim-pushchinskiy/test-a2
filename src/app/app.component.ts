import { Component } from '@angular/core';
import RESORTS from "../api/resorts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Hot Weather Widget';
  public selectedResort:Resort = RESORTS[0];
  public resorts:Resort[] = RESORTS;
}
