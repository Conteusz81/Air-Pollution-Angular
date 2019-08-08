import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { ApiResponseService } from '../api-response.service';
import { LocationApiResponse } from '../model/location-api-response.model';
import { PollutionMeasurementsSortService } from '../pollution-measurements-sort.service';
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
  private apiResponseFlag = false;

  constructor(
    private route: ActivatedRoute,
    private apiResponseService: ApiResponseService,
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
        this.apiResponseFlag = false;
        this.getCityPollutionData();
      });
  }

  private getCityPollutionData() {
    this.cityId = this.route.snapshot.paramMap.get('id');
    this.apiResponseService.getCityPollutionData(this.cityId)
      .subscribe(cityData => {
        this.cityData = this.pollutionSortService.sortParameterByName(cityData.results);
        this.displayNoMeasurementsAlert();
        this.apiResponseFlag = true;
      });
    }

  private displayNoMeasurementsAlert() {
    this.cityData.length === 0 ? this.noMeasurementsAlertFlag = true : this.noMeasurementsAlertFlag = false;
  }
}
