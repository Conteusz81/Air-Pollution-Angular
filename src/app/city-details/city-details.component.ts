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
}
