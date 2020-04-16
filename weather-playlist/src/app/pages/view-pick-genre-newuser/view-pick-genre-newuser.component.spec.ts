import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPickGenreNewuserComponent } from './view-pick-genre-newuser.component';

describe('ViewPickGenreNewuserComponent', () => {
  let component: ViewPickGenreNewuserComponent;
  let fixture: ComponentFixture<ViewPickGenreNewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPickGenreNewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPickGenreNewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
