import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppFunctionalityComponent } from './view-app-functionality.component';

describe('ViewAppFunctionalityComponent', () => {
  let component: ViewAppFunctionalityComponent;
  let fixture: ComponentFixture<ViewAppFunctionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppFunctionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
