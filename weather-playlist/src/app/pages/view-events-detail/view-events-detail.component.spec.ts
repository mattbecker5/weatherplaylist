import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventsDetailComponent } from './view-events-detail.component';

describe('ViewEventsDetailComponent', () => {
  let component: ViewEventsDetailComponent;
  let fixture: ComponentFixture<ViewEventsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEventsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEventsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
