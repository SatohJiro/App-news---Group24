import {TestBed} from '@angular/core/testing';

import {BoxNewsDetailService} from './box-news-detail.service';

describe('BoxNewsDetailService', () => {
  let service: BoxNewsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxNewsDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
