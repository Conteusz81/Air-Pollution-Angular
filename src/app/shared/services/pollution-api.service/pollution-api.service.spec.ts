import {TestBed} from '@angular/core/testing';

import { PollutionApiService } from './pollution-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';


describe('PollutionApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }));

  it('should be created', () => {
    const service: PollutionApiService = TestBed.get(PollutionApiService);
    expect(service).toBeTruthy();
  });
});
