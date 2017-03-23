import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.css']
})
export class ResortComponent {
  @Input()
  public resort: Resort;

  @Output()
  public selectResort: EventEmitter<Resort> = new EventEmitter();
}
