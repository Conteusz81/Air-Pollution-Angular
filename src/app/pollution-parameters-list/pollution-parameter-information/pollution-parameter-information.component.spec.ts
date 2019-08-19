import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionParameterInformationComponent } from './pollution-parameter-information.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {PollutionParameter} from '../models/pollution-parameter.model';

describe('PollutionParameterInformationComponent', () => {
  let component: PollutionParameterInformationComponent;
  let fixture: ComponentFixture<PollutionParameterInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollutionParameterInformationComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionParameterInformationComponent);
    component = fixture.componentInstance;
    component.pollutionParameter = {} as PollutionParameter;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.pollutionParameter = {description: 'Test'} as PollutionParameter;
    expect(component).toBeTruthy();
  });
});
