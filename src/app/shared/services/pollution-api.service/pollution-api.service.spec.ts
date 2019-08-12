import { TestBed } from '@angular/core/testing';

import { PollutionApiService } from './pollution-api.service';

describe('ApiResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollutionApiService = TestBed.get(PollutionApiService);
    expect(service).toBeTruthy();
  });
});
