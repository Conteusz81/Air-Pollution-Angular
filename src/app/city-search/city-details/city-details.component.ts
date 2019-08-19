import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PollutionApiService } from '../../shared/services/pollution-api.service/pollution-api.service';
import { LocationApiResponse } from '../../shared/models/pollution-api.model/location-api.model';
import {
  PollutionMeasurementsSortService
} from '../../shared/services/pollution-measurement-sort.service/pollution-measurements-sort.service';
import {switchMap, tap} from 'rxjs/operators';
import {AirQualityIndexColorService} from '../../shared/services/air-quality-index-color.service/air-quality-index-color.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit  {
  private cityData: LocationApiResponse[];
  private cityId: string;
  private noMeasurementsAlertFlag = false;
  private loadingFlag = false;

  constructor(
    private route: ActivatedRoute,
    private pollutionApiService: PollutionApiService,
    private router: Router,
    private pollutionSortService: PollutionMeasurementsSortService,
    private aqiColorService: AirQualityIndexColorService
  ) { }

  ngOnInit() {
    this.getCityPollutionData();
   }

  private getCityPollutionData() {
      this.route.paramMap
        .pipe(
          tap(() => this.loadingFlag = false),
          switchMap((ParamsMap: Params) => {
            this.cityId = ParamsMap.params.id;
            return this.pollutionApiService.getCityPollutionData(this.cityId);
          }))
        .subscribe(cityData => {
          console.log('response', cityData);
          this.cityData = this.pollutionSortService.sortParameterByName(cityData.results);
          this.loadingFlag = true;
          this.displayNoMeasurementsAlert();
        }, error => console.log(error.message, error.status));
    }

  private displayNoMeasurementsAlert() {
    this.cityData.length === 0 ? this.noMeasurementsAlertFlag = true : this.noMeasurementsAlertFlag = false;
  }
}
