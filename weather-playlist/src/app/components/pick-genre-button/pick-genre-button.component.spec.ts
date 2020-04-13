import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickGenreButtonComponent } from './pick-genre-button.component';

describe('PickGenreButtonComponent', () => {
  let component: PickGenreButtonComponent;
  let fixture: ComponentFixture<PickGenreButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickGenreButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickGenreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
