import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickGenresNewuserComponent } from './pick-genres-newuser.component';

describe('PickGenresNewuserComponent', () => {
  let component: PickGenresNewuserComponent;
  let fixture: ComponentFixture<PickGenresNewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickGenresNewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickGenresNewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
