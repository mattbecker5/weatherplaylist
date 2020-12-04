import { TestBed } from '@angular/core/testing';

import { AppleMusicNewService } from './apple-music-new.service';

describe('AppleMusicNewService', () => {
  let service: AppleMusicNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppleMusicNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    
  });
});
