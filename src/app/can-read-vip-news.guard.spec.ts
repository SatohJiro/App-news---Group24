import { TestBed } from '@angular/core/testing';

import { CanReadVipNewsGuard } from './can-read-vip-news.guard';

describe('CanReadVipNewsGuard', () => {
  let guard: CanReadVipNewsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanReadVipNewsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
