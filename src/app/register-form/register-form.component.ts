import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterFormService } from '../register-form.service';
import { map } from 'rxjs/operators';

// #solution it's required for {validator: this.checkPasswordMatch} this method validate password match
// without this validation works but mat-error doesn't show up
// no idea how it works but it works
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty
      && control.parent.hasError('passwordNotSame'));
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
  private startDate = new Date(1992, 0, 1);

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private registerFormService: RegisterFormService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      birthDate: [''],
      transport: [''],
      homeTown: [''],
      email: ['', { updateOn: 'submit', validators: [Validators.required, Validators.email],
        asyncValidators: [this.validateEmailNotTaken.bind(this)]}],
      userName: ['', { updateOn: 'submit', validators: [Validators.required, Validators.minLength(4)],
        asyncValidators: [this.validateUserNameNotTaken.bind(this)]}],
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
    return primaryPassword === secondaryPassword ? null : { passwordNotSame: true };
  }

  validateUserNameNotTaken(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.registerFormService.checkIfUserExist(control.value).pipe(map(byUser => {
      console.log(byUser);
      return Object.keys(byUser).length ? {userTaken: true} : null;
    }));
  }

  validateEmailNotTaken(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.registerFormService.checkIfEmailExist(control.value).pipe(map(byEmail => {
      console.log(byEmail);
      return Object.keys(byEmail).length ? {emailTaken: true} : null;
    }));
  }

  // #solution clever way to shorten entry to controlled form fields
  get form() { return this.registerForm.controls; }

  // #canDoBetter muszę sprawdzić, czy te metody mogę odpalać w serwisie
  getEmailErrorMessage() {
    return this.form.email.hasError('required') ? 'You must enter a value' :
      this.form.email.hasError('email') ? 'Not a valid email' :
        this.form.email.hasError('emailTaken') ? 'Email is taken' : '';
  }

  getUserNameErrorMessage() {
    return this.form.userName.hasError('required') ? 'You must enter a value' :
      this.form.userName.hasError('minlength') ? 'User name must have at least 4 characters' :
        this.form.userName.hasError('userTaken') ? 'User Name is taken' : '';
  }

  getPasswordErrorMessage() {
    return this.form.password.hasError('required') ? 'You must enter a value' :
      this.form.password.hasError('minlength') ? 'Password must have at least 8 characters' :
        this.form.password.hasError('pattern') ?
          'Password must have at least one small letter, one uppercase letter and one number' : '';
  }

  getConfirmPasswordErrorMessage() {
    return this.form.confirmPassword.hasError('required') ? 'You must enter a value' :
    this.registerForm.hasError('passwordNotSame') ? 'Passwords must be the same' : '';
  }
}
