import { TestBed } from '@angular/core/testing';

import { IsDriverService } from './is-driver.service';

describe('IsDriverService', () => {
  let service: IsDriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsDriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
