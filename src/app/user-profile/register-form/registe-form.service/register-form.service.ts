import { Injectable } from '@angular/core';
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

  ngSubmitPostValidation(registerForm) {
    if (!registerForm.valid) {
      console.log('Form is', registerForm.status);
    } else {
      this.addNewUser(registerForm);
      console.log('Form is', registerForm.status);
    }
  }

  private addNewUser(registerForm) {
    this.http.post(this.jsonServerUrl, registerForm.value).subscribe( rFv => {}, error => console.log(error.message, error.status));
  }
}
