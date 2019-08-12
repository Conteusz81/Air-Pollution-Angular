import { TestBed } from '@angular/core/testing';

import { DashboardTopCitiesService } from './dashboard-top-cities.service';

describe('TopCitySearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardTopCitiesService = TestBed.get(DashboardTopCitiesService);
    expect(service).toBeTruthy();
  });
});
