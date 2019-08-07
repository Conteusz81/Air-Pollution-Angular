import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

export const checkPasswordMatch = (control: AbstractControl): {[key: string]: boolean} => {
  const primaryPassword = control.get('password').value;
  const secondaryPassword = control.get('confirmPassword').value;
  if (!primaryPassword || !secondaryPassword) {
    return null;
  }
  return primaryPassword === secondaryPassword ? null : { notSame: true };
};

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  private registerForm: FormGroup;
  private hidePrimary = true;
  private hideSecondary = true;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('.*[a-z].*'),
        Validators.pattern('.*[A-Z].*'), Validators.pattern('.*[0-9].*')]],
      confirmPassword: ['']
    }, {validator: checkPasswordMatch});
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.registerForm.get('email').hasError('required') ? 'You must enter a value' :
      this.registerForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  getUserNameErrorMessage() {
    return this.registerForm.get('userName').hasError('required') ? 'You must enter a value' :
      this.registerForm.get('userName').hasError('minlength') ? 'User name must have at least 4 characters' : '';
  }

  getPasswordErrorMessage() {
    return this.registerForm.get('password').hasError('required') ? 'You must enter a value' :
      this.registerForm.get('password').hasError('minlength') ? 'Password must have at least 8 characters' :
        this.registerForm.get('password').hasError('pattern') ?
          'Password must have at least one small letter, one uppercase letter and one number' : '';
  }
}
