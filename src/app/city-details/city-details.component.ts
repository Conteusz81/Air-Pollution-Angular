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
  cityData: LocationApiResponse[];
  cityId: string;
  noMeasurementsAlertFlag = false;

  constructor(
    private route: ActivatedRoute,
    private parameterService: ApiResponseService,
    private router: Router,
    private pollutionSortService: PollutionMeasurementsSortService
  ) { }

  ngOnInit() {
    this.observeRouteParamMapChange();
    this.getCityPollutionData();
   }

  private observeRouteParamMapChange() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe( () => this.getCityPollutionData());
  }

  private getCityPollutionData() {
    this.cityId = this.route.snapshot.paramMap.get('id');
    this.parameterService.getCityPollutionData(this.cityId)
      .subscribe(cityData => {
        this.cityData = this.pollutionSortService.sortCityData(cityData.results);
        this.displayNoMeasurementsAlert();
      });
  }

  private displayNoMeasurementsAlert() {
    this.cityData.length === 0 ? this.noMeasurementsAlertFlag = true : this.noMeasurementsAlertFlag = false;
  }

  private getColor(parameter: string, value: number) {
    switch (parameter) {
      case 'no2':
        if (value < 50) {
          return {border: '1px solid #79bc6a', background: '#79bc6a'};
        } else if (value < 100) {
          return {border: '1px solid #bbcf4c', background: '#bbcf4c'};
        } else if (value < 200) {
          return {border: '1px solid #eec20b', background: '#eec20b'};
        } else if (value < 400) {
          return {border: '1px solid #f29305', background: '#f29305'};
        } else {
          return {border: '1px solid #e8416f', background: '#e8416f'};
        }
        case 'pm10':
        if (value < 25) {
          return {border: '1px solid #79bc6a', background: '#79bc6a'};
        } else if (value < 50) {
          return {border: '1px solid #bbcf4c', background: '#bbcf4c'};
        } else if (value < 90) {
          return {border: '1px solid #eec20b', background: '#eec20b'};
        } else if (value < 180) {
          return {border: '1px solid #f29305', background: '#f29305'};
        } else {
          return {border: '1px solid #e8416f', background: '#e8416f'};
        }
        case 'pm25':
        if (value < 15) {
          return {border: '1px solid #79bc6a', background: '#79bc6a'};
        } else if (value < 30) {
          return {border: '1px solid #bbcf4c', background: '#bbcf4c'};
        } else if (value < 55) {
          return {border: '1px solid #eec20b', background: '#eec20b'};
        } else if (value < 110) {
          return {border: '1px solid #f29305', background: '#f29305'};
        } else {
          return {border: '1px solid #e8416f', background: '#e8416f'};
        }
        case 'o3':
        if (value < 60) {
          return {border: '1px solid #79bc6a', background: '#79bc6a'};
        } else if (value < 120) {
          return {border: '1px solid #bbcf4c', background: '#bbcf4c'};
        } else if (value < 180) {
          return {border: '1px solid #eec20b', background: '#eec20b'};
        } else if (value < 240) {
          return {border: '1px solid #f29305', background: '#f29305'};
        } else {
          return {border: '1px solid #e8416f', background: '#e8416f'};
        }
        case 'co':
        if (value < 5000) {
          return {border: '1px solid #79bc6a', background: '#79bc6a'};
        } else if (value < 7500) {
          return {border: '1px solid #bbcf4c', background: '#bbcf4c'};
        } else if (value < 10000) {
          return {border: '1px solid #eec20b', background: '#eec20b'};
        } else if (value < 20000) {
          return {border: '1px solid #f29305', background: '#f29305'};
        } else {
          return {border: '1px solid #e8416f', background: '#e8416f'};
        }
        case 'so2':
        if (value < 50) {
          return {border: '1px solid #79bc6a', background: '#79bc6a'};
        } else if (value < 100) {
          return {border: '1px solid #bbcf4c', background: '#bbcf4c'};
        } else if (value < 350) {
          return {border: '1px solid #eec20b', background: '#eec20b'};
        } else if (value < 500) {
          return {border: '1px solid #f29305', background: '#f29305'};
        } else {
          return {border: '1px solid #e8416f', background: '#e8416f'};
        }
    }
  }
}
