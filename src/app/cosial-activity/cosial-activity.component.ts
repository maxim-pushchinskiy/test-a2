import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cosial-activity',
  templateUrl: './cosial-activity.component.html',
  styleUrls: ['./cosial-activity.component.css']
})
export class CosialActivityComponent {

  @Input()
  public city:string;
  @Input()
  public avatarSrc:string;
  @Input()
  public followers:number;
  @Input()
  public following:number;
}
