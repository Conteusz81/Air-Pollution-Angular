import { TestBed } from '@angular/core/testing';

import { TopCitiesChoiceService } from './top-cities-choice.service';

describe('TopCityChoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopCitiesChoiceService = TestBed.get(TopCitiesChoiceService);
    expect(service).toBeTruthy();
  });
});
