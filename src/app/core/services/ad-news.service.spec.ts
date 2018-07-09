import { TestBed, inject } from '@angular/core/testing';

import { AdNewsService } from './ad-news.service';

describe('AdNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdNewsService]
    });
  });

  it('should be created', inject([AdNewsService], (service: AdNewsService) => {
    expect(service).toBeTruthy();
  }));
});
