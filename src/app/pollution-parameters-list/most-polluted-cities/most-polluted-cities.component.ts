import {Component, OnInit} from '@angular/core';
import {
  PollutionMeasurementsSortService
} from '../../shared/services/pollution-measurement-sort.service/pollution-measurements-sort.service';
import {TopCitiesChoiceService} from '../../shared/services/top-cities-choice.service/top-cities-choice.service';
import {PollutionApiService} from '../../shared/services/pollution-api.service/pollution-api.service';
import {MostPollutedCities} from '../../shared/models/most-polluted-cities.model';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';
import {AirQualityIndexColorService} from '../../shared/services/air-quality-index-color.service/air-quality-index-color.service';

@Component({
  selector: 'app-most-polluted-cities',
  templateUrl: './most-polluted-cities.component.html',
  styleUrls: ['./most-polluted-cities.component.scss']
})
export class MostPollutedCitiesComponent implements OnInit {

  private pollutionParameterId: string;
  private loadingFlag = false;
  mostPollutedByParameter: MostPollutedCities[];

  constructor(
    private topCitiesChoiceService: TopCitiesChoiceService,
    private pollutionApiService: PollutionApiService,
    private aqiColorService: AirQualityIndexColorService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.observeRouteParamMapChange();
  }

  private observeRouteParamMapChange() {
    this.route.paramMap
      .pipe(
        tap(() => this.loadingFlag = false),
        switchMap((ParamsMap: Params) => {
          this.pollutionParameterId = ParamsMap.params.id;
          return this.pollutionApiService.getLatestMeasurements(this.pollutionParameterId);
        }))
      .subscribe(response => {
        console.log('response', response);
        this.mostPollutedByParameter = response;
        this.loadingFlag = true;
      }, error => console.log(error.message, error.status));
  }

}
