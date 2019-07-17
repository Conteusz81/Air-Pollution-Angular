import { Component, OnInit } from '@angular/core';
import { PollutionParameter } from '../pollution-parameter';
import { ParameterService } from '../parameter.service';
import { PARAMETERS } from '../mock-parameters';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.css']
})
export class ParametersListComponent implements OnInit {
  // parameters: PollutionParameter[];
  // private parametersMock = './mock-parameters';
  pollutionParameters = PARAMETERS;
  constructor(
    private parameterService: ParameterService
  ) { }

  ngOnInit() {
   // this.getParam();
  }
  // getParam(): void {
  //   this.parameterService.getParameters().subscribe(param => this.parameters = param );
  // }
  onParameterSelect(param: string) {
    this.parameterService.getLatestMeasurements(param);
    this.getMostPollutedCities();
  }
  getMostPollutedCities() {
    // @ts-ignore
    this.parameterService.getLatestMeasurements().subscribe(response => console.log(response));
  }

}
