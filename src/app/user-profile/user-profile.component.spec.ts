import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#rotate() should toggle state', () => {
    expect(component.state).toBe('loginForm', 'state = loginForm at first');
    component.rotate();
    expect(component.state).toBe('registerForm', 'state = registerForm after first click');
    component.rotate();
    expect(component.state).toBe('loginForm', 'state = loginForm after second click');
  });

  it('#formFlagTimeout() should toggle formFlag', fakeAsync(() => {
    expect(component.formFlag).toBe(true, 'formFlag = true at first');
    component.formFlagTimeout();
    tick(300);
    expect(component.formFlag).toBe(false, 'formFlag = false after first click');
    component.formFlagTimeout();
    tick(300);
    expect(component.formFlag).toBe(true, 'formFlag = true after second click');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
