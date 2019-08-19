import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsComponent } from './city-details.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {ActivatedRoute, convertToParamMap, Router} from '@angular/router';
import {of} from 'rxjs';
import {PollutionApiService} from '../../shared/services/pollution-api.service/pollution-api.service';
import {
  PollutionMeasurementsSortService
  } from '../../shared/services/pollution-measurement-sort.service/pollution-measurements-sort.service';
import {AirQualityIndexColorService} from '../../shared/services/air-quality-index-color.service/air-quality-index-color.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('CityDetailsComponent', () => {
  let component: CityDetailsComponent;
  let fixture: ComponentFixture<CityDetailsComponent>;

  class MockPollutionApiService {
    getCityPollutionData() {}
  }
  class MockPollutionMeasurementsSortService {
    sortParameterByName() {}
  }
  class MockAirQualityIndexColorService {
    getAirQualityIndexColor() {}
  }
  const router = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailsComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
      providers: [
        {provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({id: 1}))}},
        {provide: Router, useValue: router},
        {provide: PollutionApiService, useClass: MockPollutionApiService},
        {provide: PollutionMeasurementsSortService, useClass: MockPollutionMeasurementsSortService},
        {provide: AirQualityIndexColorService, useClass: MockAirQualityIndexColorService},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
