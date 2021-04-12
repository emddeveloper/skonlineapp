import { TestBed } from '@angular/core/testing';

import { SkonlineService } from './skonline.service';

describe('SkonlineService', () => {
  let service: SkonlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkonlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
