import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplaySmallComponent } from './weather-display-small.component';

describe('WeatherDisplaySmallComponent', () => {
  let component: WeatherDisplaySmallComponent;
  let fixture: ComponentFixture<WeatherDisplaySmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDisplaySmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplaySmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
