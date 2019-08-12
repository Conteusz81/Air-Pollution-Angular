import { TestBed } from '@angular/core/testing';

import { PollutionApiResponseService } from './pollution-api-response.service';

describe('ApiResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollutionApiResponseService = TestBed.get(PollutionApiResponseService);
    expect(service).toBeTruthy();
  });
});
