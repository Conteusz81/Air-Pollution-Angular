import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PollutionParametersListComponent } from './pollution-parameters-list.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';

describe('ParametersListComponent', () => {
  let component: PollutionParametersListComponent;
  let fixture: ComponentFixture<PollutionParametersListComponent>;

  const router = {
    navigate: jasmine.createSpy('navigate'),
    url: 'testUrl'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollutionParametersListComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: Router, useValue: router}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionParametersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
