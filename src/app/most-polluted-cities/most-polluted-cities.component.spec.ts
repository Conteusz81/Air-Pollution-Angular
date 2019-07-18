import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPollutedCitiesComponent } from './most-polluted-cities.component';

describe('MostPollutedCitiesComponent', () => {
  let component: MostPollutedCitiesComponent;
  let fixture: ComponentFixture<MostPollutedCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPollutedCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPollutedCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
