import { TestBed } from '@angular/core/testing';

import { GenerateMusicSearchService } from './generate-music-search.service';

describe('GenerateMusicSearchService', () => {
  let service: GenerateMusicSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateMusicSearchService);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
