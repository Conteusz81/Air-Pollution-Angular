import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationListComponent } from './main-navigation-list.component';

describe('MainNavigationListComponent', () => {
  let component: MainNavigationListComponent;
  let fixture: ComponentFixture<MainNavigationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavigationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
