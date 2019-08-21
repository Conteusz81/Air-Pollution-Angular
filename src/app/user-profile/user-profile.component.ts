import { Component, OnInit, } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [
    trigger('rotatedForm', [
      state('loginForm', style({ transform: 'rotateY(0)' })),
      state('registerForm', style({ transform: 'rotateY(0)' })),
      transition('loginForm => registerForm', animate('600ms', keyframes([
        style({transform: 'rotateY(0)', offset: 0}),
        style({transform: 'rotateY(90deg)', offset: 0.5}),
        style({transform: 'rotateY(0)', offset: 1.0})
      ]))),
      transition('registerForm => loginForm', animate('600ms', keyframes([
        style({transform: 'rotateY(0)', offset: 0}),
        style({transform: 'rotateY(90deg)', offset: 0.5}),
        style({transform: 'rotateY(0)', offset: 1.0})
      ])))
    ])
  ]
})
export class UserProfileComponent implements OnInit {

  formFlag = true;
  state = 'loginForm';

  constructor() { }

  ngOnInit() {
  }

  rotate() {
    this.state = (this.state === 'loginForm' ? 'registerForm' : 'loginForm');
  }

  formFlagTimeout() {
    setTimeout(() => this.formFlag = !this.formFlag, 300);
  }

}
