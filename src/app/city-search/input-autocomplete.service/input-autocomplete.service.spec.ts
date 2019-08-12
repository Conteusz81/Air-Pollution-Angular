import { TestBed } from '@angular/core/testing';

import { InputAutocompleteService } from './input-autocomplete.service';

describe('InputAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputAutocompleteService = TestBed.get(InputAutocompleteService);
    expect(service).toBeTruthy();
  });
});
