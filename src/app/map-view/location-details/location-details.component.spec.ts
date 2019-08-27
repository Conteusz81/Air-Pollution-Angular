import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailsComponent } from './location-details.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {
  PollutionMeasurementsSortService
} from '../../shared/services/pollution-measurement-sort.service/pollution-measurements-sort.service';
import {AirQualityIndexColorService} from '../../shared/services/air-quality-index-color.service/air-quality-index-color.service';

describe('LocationDetailsComponent', () => {
  let component: LocationDetailsComponent;
  let fixture: ComponentFixture<LocationDetailsComponent>;

  class MockPollutionMeasurementsSortService {}

  class MockAirQualityIndexColorService {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDetailsComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: PollutionMeasurementsSortService, useClass: MockPollutionMeasurementsSortService},
        {provide: AirQualityIndexColorService, useClass: MockAirQualityIndexColorService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'Setting loadingFlag to true, enable the component', () => {
    component.loadingFlag = true;
    fixture.detectChanges();
    expect(component.loadingFlag).toBeTruthy();
  });
});
