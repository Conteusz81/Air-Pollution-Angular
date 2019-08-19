import { TestBed } from '@angular/core/testing';

import { InputAutocompleteService } from './input-autocomplete.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('InputAutocompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: InputAutocompleteService = TestBed.get(InputAutocompleteService);
    expect(service).toBeTruthy();
  });
});
