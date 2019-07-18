import { Component, OnInit } from '@angular/core';
import { ParameterService } from '../parameter.service';
import { PARAMETERS } from '../mock-parameters';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.css']
})
export class ParametersListComponent implements OnInit {
  pollutionParameters = PARAMETERS;
  constructor(
    private parameterService: ParameterService
  ) { }

  ngOnInit() {
  }
  onParameterSelect(param: string) {
    this.parameterService.getLatestMeasurements(param);
  }
}
