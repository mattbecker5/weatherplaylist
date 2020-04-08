import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCalenderComponent } from './large-calender.component';

describe('LargeCalenderComponent', () => {
  let component: LargeCalenderComponent;
  let fixture: ComponentFixture<LargeCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
