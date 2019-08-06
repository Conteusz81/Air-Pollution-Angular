import {Component, OnInit} from '@angular/core';
import {PollutionMeasurementsSortService} from '../pollution-measurements-sort.service';
import {TopCitySearchService} from '../top-city-search.service';
import {ApiResponseService} from '../api-response.service';
import {MostPollutedCities} from '../model/most-polluted-cities.model';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-most-polluted-cities',
  templateUrl: './most-polluted-cities.component.html',
  styleUrls: ['./most-polluted-cities.component.scss']
})
export class MostPollutedCitiesComponent implements OnInit {

  private cityId: string;
  private apiResponseFlag = false;
  mostPollutedByParameter: MostPollutedCities[];

  constructor(
    private pollutionSortService: PollutionMeasurementsSortService,
    private topCitySearchService: TopCitySearchService,
    private apiResponseService: ApiResponseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMostPollutedByParameter();
    this.observeRouteParamMapChange();
  }

  private getMostPollutedByParameter() {
    this.apiResponseService.sortedTopCitiesData.subscribe(response => {
      this.mostPollutedByParameter = response;
      this.apiResponseFlag = true;
    });
  }

  private observeRouteParamMapChange() {
    this.cityId = this.route.snapshot.paramMap.get('id');
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.cityId = this.route.snapshot.paramMap.get('id');
        this.apiResponseFlag = false;
      });
  }

}
