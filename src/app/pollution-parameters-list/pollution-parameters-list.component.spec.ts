import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionParametersListComponent } from './pollution-parameters-list.component';

describe('ParametersListComponent', () => {
  let component: PollutionParametersListComponent;
  let fixture: ComponentFixture<PollutionParametersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollutionParametersListComponent ]
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
