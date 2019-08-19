import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityIndexComponent } from './air-quality-index.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {MatMenuModule} from '@angular/material';

describe('AirQualityIndexComponent', () => {
  let component: AirQualityIndexComponent;
  let fixture: ComponentFixture<AirQualityIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirQualityIndexComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatMenuModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirQualityIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
