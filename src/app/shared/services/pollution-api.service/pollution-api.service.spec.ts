import {TestBed} from '@angular/core/testing';

import { PollutionApiService } from './pollution-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PollutionMeasurementsSortService} from '../pollution-measurement-sort.service/pollution-measurements-sort.service';

class MockPollutionMeasurementsSortService {}

describe('PollutionApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: PollutionMeasurementsSortService, useClass: MockPollutionMeasurementsSortService}]
    }));

  it('should be created', () => {
    const service: PollutionApiService = TestBed.get(PollutionApiService);
    expect(service).toBeTruthy();
  });
});
