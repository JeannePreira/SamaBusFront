import { TestBed } from '@angular/core/testing';

import { InfoBusService } from './info-bus.service';

describe('InfoBusService', () => {
  let service: InfoBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
