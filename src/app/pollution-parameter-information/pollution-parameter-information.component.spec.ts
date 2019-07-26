import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionParameterInformationComponent } from './pollution-parameter-information.component';

describe('PollutionParameterInformationComponent', () => {
  let component: PollutionParameterInformationComponent;
  let fixture: ComponentFixture<PollutionParameterInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollutionParameterInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionParameterInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
