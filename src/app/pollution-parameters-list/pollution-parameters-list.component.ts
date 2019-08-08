import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { PARAMETERS } from '../mock-parameters';
import { PollutionParameter } from '../model/pollution-parameter.model';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './pollution-parameters-list.component.html',
  styleUrls: ['./pollution-parameters-list.component.scss']
})
export class PollutionParametersListComponent implements OnInit {

  private pollutionParameters: PollutionParameter[] = PARAMETERS;
  private selectedParameter: string;
  pollutionParameterInformation: PollutionParameter[];

  constructor( private apiResponseService: ApiResponseService ) { }

  ngOnInit() {
  }

  private onParameterSelect(pollutionParameterName: string) {
    this.selectedParameter = pollutionParameterName;
    this.apiResponseService.getLatestMeasurements(pollutionParameterName)
    // #solutionOnMostPolluted nie wiedziałem, że next może ustawiać wartość zmiennej gdzie indziej z wykorzystaniem Subject
    // miałęm przy tym pomoc
      .subscribe(response => this.apiResponseService.sortedTopCitiesData.next(response));
    this.pollutionParameterInformation = this.getPollutionParameterInfo();
  }

  private getPollutionParameterInfo(): PollutionParameter[] {
    return this.pollutionParameters.filter(element => element.id === this.selectedParameter);
  }
}
