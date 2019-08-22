import { TestBed } from '@angular/core/testing';

import {AirQualityDegree, AirQualityIndexColorService} from './air-quality-index-color.service';

describe('AirQualityIndexColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirQualityIndexColorService = TestBed.get(AirQualityIndexColorService);
    expect(service).toBeTruthy();
  });

  it('#getAirQualityIndexColor() should return correct AirQualityDegree color', () => {
    const service: AirQualityIndexColorService = TestBed.get(AirQualityIndexColorService);
    expect(service.getAirQualityIndexColor('pm10', 1000)).toEqual({background: AirQualityDegree.VeryHigh});
    expect(service.getAirQualityIndexColor('so2', 52.66)).toEqual({background: AirQualityDegree.Low});
    expect(service.getAirQualityIndexColor('bc', 3.4)).toEqual({background: AirQualityDegree.Undefined});
  });
});
