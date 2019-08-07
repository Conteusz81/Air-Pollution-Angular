import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty
      && control.parent.hasError('notSame'));
    return (invalidParent);
  }
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  private registerForm: FormGroup;
  private matcher = new MyErrorStateMatcher();
  private hidePrimary = true;
  private hideSecondary = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['',
       [Validators.required,
        Validators.minLength(8),
        Validators.pattern('.*[a-z].*'),
        Validators.pattern('.*[A-Z].*'),
        Validators.pattern('.*[0-9].*')]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.checkPasswordMatch});
  }

   checkPasswordMatch(control: AbstractControl): {[key: string]: boolean} {
    const primaryPassword = control.get('password').value;
    const secondaryPassword = control.get('confirmPassword').value;
    return primaryPassword === secondaryPassword ? null : { notSame: true };
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

  getCheckPasswordErrorMessage() {
    return this.registerForm.get('confirmPassword').hasError('required') ? 'You must enter a value' :
    this.registerForm.hasError('notSame') ? 'Passwords must be the same' : '';
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Valid');
    } else {
      console.log('Invalid');
    }
  }
}
