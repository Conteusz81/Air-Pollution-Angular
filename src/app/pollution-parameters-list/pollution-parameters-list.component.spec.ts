import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { PollutionParametersListComponent } from './pollution-parameters-list.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';

describe('ParametersListComponent', () => {
  let component: PollutionParametersListComponent;
  let fixture: ComponentFixture<PollutionParametersListComponent>;
  let debugElement: DebugElement;
  let parameterButtonsEL;
  let routerStub;

  beforeEach(async(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    TestBed.configureTestingModule({
      declarations: [PollutionParametersListComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: Router, useValue: routerStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionParametersListComponent);
    component = fixture.componentInstance;
    spyOn(component, 'onParameterSelect');
    debugElement = fixture.debugElement;
    component.ngOnInit();
    fixture.detectChanges();
    parameterButtonsEL = debugElement.nativeElement.querySelectorAll('.pollution-parameter-name');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('tracks all the arguments of #onParameterSelect was called', () => {
    parameterButtonsEL.forEach(el => el.click());
    fixture.detectChanges();
    expect(component.onParameterSelect).toHaveBeenCalledWith('pm25');
    expect(component.onParameterSelect).toHaveBeenCalledWith('pm10');
    expect(component.onParameterSelect).toHaveBeenCalledWith('co');
    expect(component.onParameterSelect).toHaveBeenCalledWith('no2');
    expect(component.onParameterSelect).toHaveBeenCalledWith('o3');
    expect(component.onParameterSelect).toHaveBeenCalledWith('so2');
    expect(component.onParameterSelect).toHaveBeenCalledWith('bc');
    expect(component.onParameterSelect).toHaveBeenCalledTimes(parameterButtonsEL.length);
  });

  it('router navigate test', () => {
    expect(routerStub.navigate).toHaveBeenCalledWith(['/parameters']);
  });

});
