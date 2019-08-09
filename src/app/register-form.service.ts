import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  private jsonServerUrl = 'http://localhost:3002/users';

  constructor(private http: HttpClient) { }

  checkIfUserExist(userName: string) {
    return this.http.get(`${this.jsonServerUrl}?userName=${userName}`);
  }

  checkIfEmailExist(email: string) {
    return this.http.get(`${this.jsonServerUrl}?email=${email}`);
  }

  onRegisterSubmit(registerForm: FormGroup) {
    if (registerForm.pending) {
      const test = registerForm.statusChanges.subscribe( registerFormStatus => {
        test.unsubscribe();
        if ( registerFormStatus === 'VALID') {
          this.ngSubmitPostValidation(registerForm);
        }
      });
    } else {
      this.ngSubmitPostValidation(registerForm);
      console.log('else');
    }
  }

  private ngSubmitPostValidation(registerForm) {
    if (!registerForm.valid) {
      console.log('invalid1');
      // console.log(registerForm.value);
    } else {
      this.addNewUser(registerForm);
      console.log('valid1');
    }
  }

  private addNewUser(registerForm) {
    this.http.post(this.jsonServerUrl, registerForm.value).subscribe( rFv => {}, error => console.log(error.message, error.status));
  }
}
