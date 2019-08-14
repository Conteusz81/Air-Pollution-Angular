import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [
    trigger('rotatedForm', [
      state('start', style({ transform: 'rotateY(0)' })),
      state('rotate', style({ transform: 'rotateY(0)' })),
      transition('start => rotate', animate('1000ms', keyframes([
        style({transform: 'rotateY(0)', offset: 0}),
        style({transform: 'rotateY(90deg)', offset: 0.5}),
        style({transform: 'rotateY(0)', offset: 1.0})
      ]))),
      transition('rotate => start', animate('1000ms', keyframes([
        style({transform: 'rotateY(0)', offset: 0}),
        style({transform: 'rotateY(90deg)', offset: 0.5}),
        style({transform: 'rotateY(0)', offset: 1.0})
      ])))
    ])
  ]
})
export class UserProfileComponent implements OnInit {

  private formFlag = true;
  private state = 'start';

  constructor() { }

  ngOnInit() {
  }

  rotate() {
    this.state = (this.state === 'start' ? 'rotate' : 'start');
  }

  formFlagTimeout() {
    setTimeout(() => this.formFlag = !this.formFlag, 500);
  }

}
