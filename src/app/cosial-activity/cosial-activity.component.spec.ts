import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosialActivityComponent } from './cosial-activity.component';

describe('CosialActivityComponent', () => {
  let component: CosialActivityComponent;
  let fixture: ComponentFixture<CosialActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosialActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosialActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
