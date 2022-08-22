import {TestBed} from '@angular/core/testing';

import {CatNewsPageService} from './cat-news-page.service';

describe('CatNewsPageService', () => {
  let service: CatNewsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatNewsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
