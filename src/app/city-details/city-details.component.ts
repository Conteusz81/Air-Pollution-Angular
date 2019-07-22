import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { ParameterService } from '../parameter.service';
import { LocationApiResponse } from '../location-api-response.model';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit  {
  cityData: LocationApiResponse[];
  cityId: string;

  constructor(
    private route: ActivatedRoute,
    private parameterService: ParameterService,
    private router: Router
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
        this.cityData = cityData.results;
        console.log(this.cityData);
      });
  }

  private getColor(parameter: string, value: number) {
    switch (parameter) {
      case 'no2':
        if (value < 50) {
          return {border: '1px solid green'};
        } else if (value < 100) {
          return {border: '1px solid lightgreen'};
        } else if (value < 200) {
          return {border: '1px solid yellow'};
        } else if (value < 400) {
          return {border: '1px solid orange'};
        } else {
          return {border: '1px solid red'};
        }
        case 'pm10':
        if (value < 25) {
          return {border: '1px solid green'};
        } else if (value < 50) {
          return {border: '1px solid lightgreen'};
        } else if (value < 90) {
          return {border: '1px solid yellow'};
        } else if (value < 180) {
          return {border: '1px solid orange'};
        } else {
          return {border: '1px solid red'};
        }
        case 'pm25':
        if (value < 15) {
          return {border: '1px solid green'};
        } else if (value < 30) {
          return {border: '1px solid lightgreen'};
        } else if (value < 55) {
          return {border: '1px solid yellow'};
        } else if (value < 110) {
          return {border: '1px solid orange'};
        } else {
          return {border: '1px solid red'};
        }
        case 'o3':
        if (value < 60) {
          return {border: '1px solid green'};
        } else if (value < 120) {
          return {border: '1px solid lightgreen'};
        } else if (value < 180) {
          return {border: '1px solid yellow'};
        } else if (value < 240) {
          return {border: '1px solid orange'};
        } else {
          return {border: '1px solid red'};
        }
    }
  }
}
