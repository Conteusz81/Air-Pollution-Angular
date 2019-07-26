import {Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { PARAMETERS } from '../mock-parameters';
import {PollutionParameter} from '../pollution.parameter';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.scss']
})
export class ParametersListComponent implements OnInit {
  pollutionParameters: PollutionParameter[] = PARAMETERS;
  selectedParameter: string;
  pollutionParameterInformation: PollutionParameter[];

  constructor(
    private apiResponseService: ApiResponseService
  ) { }

  ngOnInit() {
  }

  private onParameterSelect(pollutionParameterName: string) {
    this.selectedParameter = pollutionParameterName;
    this.apiResponseService.getLatestMeasurements(pollutionParameterName);
    this.pollutionParameterInformation = this.getPollutionParameterInfo();
  }

  private getPollutionParameterInfo(): PollutionParameter[] {
    return this.pollutionParameters.filter(element => element.id === this.selectedParameter);
  }
}
