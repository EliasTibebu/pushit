import { TestBed } from '@angular/core/testing';

import { SpinnerIndictorService } from './spinner-indictor.service';

describe('SpinnerIndictorService', () => {
  let service: SpinnerIndictorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerIndictorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
