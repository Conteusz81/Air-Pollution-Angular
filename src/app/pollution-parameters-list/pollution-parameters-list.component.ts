import {Component, OnInit} from '@angular/core';
import {PollutionApiService} from '../shared/services/pollution-api.service/pollution-api.service';
import {PARAMETERS} from '../../assets/mocks/mock-parameters-information';
import {PollutionParameter} from './models/pollution-parameter.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pollution-parameters-list',
  templateUrl: './pollution-parameters-list.component.html',
  styleUrls: ['./pollution-parameters-list.component.scss']
})
export class PollutionParametersListComponent implements OnInit {

  private pollutionParameters: PollutionParameter[] = PARAMETERS;
  private selectedParameter: string;
  pollutionParameter: PollutionParameter;

  constructor(
    private pollutionApiService: PollutionApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/parameters']);
  }

  private onParameterSelect(pollutionParameterName: string) {
    this.selectedParameter = pollutionParameterName;
    this.pollutionParameter = this.getPollutionParameterData();
  }

  private getPollutionParameterData(): PollutionParameter {
    return this.pollutionParameters.find(pollutionParameter => pollutionParameter.id === this.selectedParameter);
  }
}

