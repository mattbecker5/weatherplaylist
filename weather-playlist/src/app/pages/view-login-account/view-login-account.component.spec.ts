import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoginAccountComponent } from './view-login-account.component';

describe('ViewLoginAccountComponent', () => {
  let component: ViewLoginAccountComponent;
  let fixture: ComponentFixture<ViewLoginAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoginAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoginAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
