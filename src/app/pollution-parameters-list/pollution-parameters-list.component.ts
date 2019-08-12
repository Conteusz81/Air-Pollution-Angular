import { Component, OnInit } from '@angular/core';
import { PollutionApiService } from '../shared/services/pollution-api.service/pollution-api.service';
import { PARAMETERS } from '../../assets/mocks/mock-parameters-information';
import { PollutionParameter } from './models/pollution-parameter.model';

@Component({
  selector: 'app-pollution-parameters-list',
  templateUrl: './pollution-parameters-list.component.html',
  styleUrls: ['./pollution-parameters-list.component.scss']
})
export class PollutionParametersListComponent implements OnInit {

  private pollutionParameters: PollutionParameter[] = PARAMETERS;
  private selectedParameter: string;
  pollutionParameterInformation: PollutionParameter[];

  constructor( private apiResponseService: PollutionApiService ) { }

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
