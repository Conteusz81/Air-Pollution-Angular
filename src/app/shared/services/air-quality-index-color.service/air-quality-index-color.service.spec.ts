import { TestBed } from '@angular/core/testing';

import { AirQualityIndexColorService } from './air-quality-index-color.service';

describe('AirQualityIndexColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirQualityIndexColorService = TestBed.get(AirQualityIndexColorService);
    expect(service).toBeTruthy();
  });
});
