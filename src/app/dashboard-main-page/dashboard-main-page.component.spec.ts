import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainPageComponent } from './dashboard-main-page.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('DashboardMainPageComponent', () => {
  let component: DashboardMainPageComponent;
  let fixture: ComponentFixture<DashboardMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMainPageComponent ],
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
