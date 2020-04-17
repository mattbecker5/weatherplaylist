import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCalendarCardComponent } from './large-calendar-card.component';

describe('LargeCalendarCardComponent', () => {
  let component: LargeCalendarCardComponent;
  let fixture: ComponentFixture<LargeCalendarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeCalendarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeCalendarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
