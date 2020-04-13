import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickCategoryButtonComponent } from './pick-category-button.component';

describe('PickCategoryButtonComponent', () => {
  let component: PickCategoryButtonComponent;
  let fixture: ComponentFixture<PickCategoryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickCategoryButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickCategoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
