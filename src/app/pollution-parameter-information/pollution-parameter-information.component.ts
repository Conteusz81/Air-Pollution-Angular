import {Component, Input, OnInit} from '@angular/core';
import {PollutionParameter} from '../model/pollution-parameter.model';

@Component({
  selector: 'app-page-information',
  templateUrl: './pollution-parameter-information.component.html',
  styleUrls: ['./pollution-parameter-information.component.scss']
})
export class PollutionParameterInformationComponent implements OnInit {

  @Input() pollutionParameterInfo: PollutionParameter[];

  constructor() { }

  ngOnInit() {
  }

}
