import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityIndexComponent } from './air-quality-index.component';

describe('AirQualityIndexComponent', () => {
  let component: AirQualityIndexComponent;
  let fixture: ComponentFixture<AirQualityIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirQualityIndexComponent ]
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
