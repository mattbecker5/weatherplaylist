import { TestBed } from '@angular/core/testing';

import { MediaPlayerGetTitleService } from './media-player-get-title.service';

describe('MediaPlayerGetTitleService', () => {
  let service: MediaPlayerGetTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaPlayerGetTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
