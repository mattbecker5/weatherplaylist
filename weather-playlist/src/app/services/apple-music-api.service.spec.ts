import { TestBed } from '@angular/core/testing';

import { AppleMusicAPIService } from './apple-music-api.service';

describe('AppleMusicAPIService', () => {
  let service: AppleMusicAPIService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppleMusicAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
