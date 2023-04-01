import { TestBed } from '@angular/core/testing';

import { SpinnerIncepterService } from './spinner-incepter.service';

describe('SpinnerIncepterService', () => {
  let service: SpinnerIncepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerIncepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
