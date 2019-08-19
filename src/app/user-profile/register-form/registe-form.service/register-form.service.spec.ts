import { TestBed } from '@angular/core/testing';

import { RegisterFormService } from './register-form.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RegisterFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: RegisterFormService = TestBed.get(RegisterFormService);
    expect(service).toBeTruthy();
  });
});
