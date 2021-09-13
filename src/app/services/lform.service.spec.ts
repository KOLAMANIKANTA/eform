import { TestBed } from '@angular/core/testing';

import { LformService } from './lform.service';

describe('LformService', () => {
  let service: LformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
