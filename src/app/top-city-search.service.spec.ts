import { TestBed } from '@angular/core/testing';

import { TopCitySearchService } from './top-city-search.service';

describe('TopCitySearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopCitySearchService = TestBed.get(TopCitySearchService);
    expect(service).toBeTruthy();
  });
});
