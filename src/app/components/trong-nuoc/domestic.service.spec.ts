import {TestBed} from '@angular/core/testing';

import {DomesticService} from './domestic.service';

describe('DomesticService', () => {
  let service: DomesticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomesticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
