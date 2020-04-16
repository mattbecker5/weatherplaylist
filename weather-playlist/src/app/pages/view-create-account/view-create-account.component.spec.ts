import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreateAccountComponent } from './view-create-account.component';

describe('ViewCreateAccountComponent', () => {
  let component: ViewCreateAccountComponent;
  let fixture: ComponentFixture<ViewCreateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCreateAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
