import { TestBed } from '@angular/core/testing';

import { PickSelectedGenreService } from './pick-selected-genre.service';

describe('PickSelectedGenreService', () => {
  let service: PickSelectedGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickSelectedGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
