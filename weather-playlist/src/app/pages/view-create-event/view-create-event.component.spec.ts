import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreateEventComponent } from './view-create-event.component';

describe('ViewCreateEventComponent', () => {
  let component: ViewCreateEventComponent;
  let fixture: ComponentFixture<ViewCreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCreateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
