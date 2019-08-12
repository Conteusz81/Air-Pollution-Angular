import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { PollutionApiService } from '../../shared/services/pollution-api.service/pollution-api.service';
import { LocationApiResponse } from '../../shared/models/pollution-api.model/location-api.model';
import {
  PollutionMeasurementsSortService
} from '../../shared/services/pollution-measurement-sort.service/pollution-measurements-sort.service';
import {filter} from 'rxjs/operators';

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
    private pollutionSortService: PollutionMeasurementsSortService
  ) { }

  ngOnInit() {
    this.observeRouteParamMapChange();
    this.getCityPollutionData();
   }

  private observeRouteParamMapChange() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.loadingFlag = false;
        this.getCityPollutionData();
      });
  }

  private getCityPollutionData() {
    this.cityId = this.route.snapshot.paramMap.get('id');
    this.pollutionApiService.getCityPollutionData(this.cityId)
      .subscribe(cityData => {
        this.cityData = this.pollutionSortService.sortParameterByName(cityData.results);
        this.displayNoMeasurementsAlert();
        this.loadingFlag = true;
      });
    }

  private displayNoMeasurementsAlert() {
    this.cityData.length === 0 ? this.noMeasurementsAlertFlag = true : this.noMeasurementsAlertFlag = false;
  }
}
