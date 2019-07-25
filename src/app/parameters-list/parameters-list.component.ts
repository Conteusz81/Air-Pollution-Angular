import {Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { PARAMETERS } from '../mock-parameters';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.scss']
})
export class ParametersListComponent implements OnInit {
  pollutionParameters = PARAMETERS;
  selectedParameter;
  constructor(
    private apiResponseService: ApiResponseService
  ) { }

  ngOnInit() {
  }
  onParameterSelect(pollutionParameterName: string) {
    this.selectedParameter = pollutionParameterName;
    this.apiResponseService.getLatestMeasurements(pollutionParameterName);
  }
}
