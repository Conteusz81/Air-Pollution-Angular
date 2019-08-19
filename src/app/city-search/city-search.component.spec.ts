import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchComponent } from './city-search.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {InputAutocompleteService} from './input-autocomplete.service/input-autocomplete.service';
import {TopCitiesChoiceService} from '../shared/services/top-cities-choice.service/top-cities-choice.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

class MockInputAutocompleteService {
  getCitiesNames() {}
}

class MockTopCitiesChoiceService {
  cityChoice() { }
}

class MockFormBuilder {

}


describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatAutocompleteModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ CitySearchComponent ],
      providers: [
        FormBuilder,
        {provide: InputAutocompleteService, useClass: MockInputAutocompleteService },
        {provide: TopCitiesChoiceService, useClass: MockTopCitiesChoiceService }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
