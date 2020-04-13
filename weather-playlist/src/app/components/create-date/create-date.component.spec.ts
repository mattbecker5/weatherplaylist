import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDateComponent } from './create-date.component';

describe('EventDateComponent', () => {
  let component: CreateDateComponent;
  let fixture: ComponentFixture<CreateDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
