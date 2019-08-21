import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewComponent } from './map-view.component';
import {ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TopCitiesChoiceService} from '../shared/services/top-cities-choice.service/top-cities-choice.service';
import {PollutionMeasurementsSortService} from '../shared/services/pollution-measurement-sort.service/pollution-measurements-sort.service';
import {PollutionApiService} from '../shared/services/pollution-api.service/pollution-api.service';

describe('MapViewComponent', () => {
  let component: MapViewComponent;
  let fixture: ComponentFixture<MapViewComponent>;

  class MockTopCitiesChoiceService {
    cityChoice() {}
  }

  class MockPollutionApiService  {
    getAllLocationCoordinates() {
      return {subscribe: () => {}};
    }
  }

  class MockPollutionMeasurementsSortService {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapViewComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        ChangeDetectorRef,
        {provide: TopCitiesChoiceService, useClass: MockTopCitiesChoiceService},
        {provide: PollutionApiService, useClass: MockPollutionApiService},
        {provide: PollutionMeasurementsSortService, useClass: MockPollutionMeasurementsSortService}

        ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
