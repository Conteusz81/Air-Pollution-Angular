import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { PARAMETERS } from '../mock-parameters';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ParametersListComponent implements OnInit {
  pollutionParameters = PARAMETERS;
  selectedParameter;
  constructor(
    private parameterService: ApiResponseService
  ) { }

  ngOnInit() {
  }
  onParameterSelect(param: string) {
    this.selectedParameter = param;
    this.parameterService.getLatestMeasurements(param);
  }
}
