import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPollutedCitiesComponent } from './most-polluted-cities.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {of} from 'rxjs';
import {PollutionApiService} from '../../shared/services/pollution-api.service/pollution-api.service';
import {TopCitiesChoiceService} from '../../shared/services/top-cities-choice.service/top-cities-choice.service';
import {AirQualityIndexColorService} from '../../shared/services/air-quality-index-color.service/air-quality-index-color.service';

class MockTopCitiesChoiceService {}

class MockPollutionApiService {
  getLatestMeasurements() {}
}
class MockAirQualityIndexColorService {}

describe('MostPollutedCitiesComponent', () => {
  let component: MostPollutedCitiesComponent;
  let fixture: ComponentFixture<MostPollutedCitiesComponent>;
  let pollutionApiService: PollutionApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPollutedCitiesComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({id: 1}))}},
        {provide: TopCitiesChoiceService, useClass: MockTopCitiesChoiceService},
        {provide: PollutionApiService, useClass: MockPollutionApiService},
        {provide: AirQualityIndexColorService, useClass: MockAirQualityIndexColorService},
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPollutedCitiesComponent);
    pollutionApiService = TestBed.get(PollutionApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(pollutionApiService, 'getLatestMeasurements').and.returnValue(of([{  name: '', measurementAvg: 1}]));
    expect(component).toBeTruthy();
  });
});
