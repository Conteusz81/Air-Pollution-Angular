import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { MainNavigationListComponent } from './main-navigation-list.component';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('MainNavigationListComponent', () => {
  let component: MainNavigationListComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<MainNavigationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainNavigationListComponent
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationListComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check if menuNav routerLink have correct path name', () => {
    const pathName = ['home', 'city', 'parameters', 'map', 'profile'];
    const menuNavListElements = debugElement.queryAll(By.css('a'));
    for (let i = 0; i < pathName.length; i++) {
     const menuNavListEl = menuNavListElements[i].nativeElement.getAttribute('routerlink');
     expect(menuNavListEl).toBe(pathName[i]);
   }
  });
});
