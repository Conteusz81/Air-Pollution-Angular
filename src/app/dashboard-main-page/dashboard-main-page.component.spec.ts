import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainPageComponent } from './dashboard-main-page.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TopCitiesChoiceService} from '../shared/services/top-cities-choice.service/top-cities-choice.service';

describe('DashboardMainPageComponent', () => {
  let component: DashboardMainPageComponent;
  let fixture: ComponentFixture<DashboardMainPageComponent>;

  class MockTopCitiesChoiceService {
    cityChoice() {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMainPageComponent ],
      providers: [{provide: TopCitiesChoiceService, useClass: MockTopCitiesChoiceService}],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
