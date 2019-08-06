import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  private email = new FormControl('', [Validators.required, Validators.email]);
  private userName = new FormControl('', [Validators.required, Validators.minLength(4)]);
  private password = new FormControl('',
    [Validators.required, Validators.minLength(8), Validators.pattern('.*[a-z].*'),
      Validators.pattern('.*[A-Z].*'), Validators.pattern('.*[0-9].*')]);
  private hidePrimary = true;
  private hideSecondary = true;
  constructor() { }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getUserNameErrorMessage() {
    return this.userName.hasError('required') ? 'You must enter a value' :
      this.userName.hasError('minlength') ? 'Your user name has to have at least 4 characters' :
        '';
  }

  getPasswordErrorMessage() {
    console.log(this.password.errors);
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('minlength') ? 'Password has to have at least 8 characters' :
        this.password.hasError('pattern') ? 'Password is invalid' :
          '';
  }
}
