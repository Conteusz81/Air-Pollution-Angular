import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageNavigationComponent } from './main-page-navigation.component';

describe('MainPageNavigationComponent', () => {
  let component: MainPageNavigationComponent;
  let fixture: ComponentFixture<MainPageNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
