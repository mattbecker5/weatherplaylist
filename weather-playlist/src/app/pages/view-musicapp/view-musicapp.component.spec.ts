import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMusicappComponent } from './view-musicapp.component';

describe('ViewMusicappComponent', () => {
  let component: ViewMusicappComponent;
  let fixture: ComponentFixture<ViewMusicappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMusicappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMusicappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
