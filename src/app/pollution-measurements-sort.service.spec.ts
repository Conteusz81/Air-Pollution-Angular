import { TestBed } from '@angular/core/testing';

import { PollutionMeasurementsSortService } from './pollution-measurements-sort.service';

describe('PollutionMeasurementsSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollutionMeasurementsSortService = TestBed.get(PollutionMeasurementsSortService);
    expect(service).toBeTruthy();
  });
});
