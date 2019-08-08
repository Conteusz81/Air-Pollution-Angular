import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  constructor(private http: HttpClient) { }

  onRegisterSubmit(registerForm: FormGroup) {
    if (registerForm.valid) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  }

  checkIfUserOrEmailExist(userName: string) {
    return this.http.get(`http://localhost:3000/users?userName=${userName}`);
  }

}
