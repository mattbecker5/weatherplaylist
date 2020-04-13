import { TestBed } from '@angular/core/testing';

import { SelectMonthYearService } from './select-month-year.service';

describe('SelectMonthYearService', () => {
  let service: SelectMonthYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectMonthYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
