import { TestBed } from '@angular/core/testing';

import { ServefirebaseService } from './servefirebase.service';

describe('ServefirebaseService', () => {
  let service: ServefirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServefirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
