import {Component, OnInit} from '@angular/core';
import {PollutionMeasurementsSortService} from '../pollution-measurements-sort.service';
import {TopCitySearchService} from '../top-city-search.service';
import {ApiResponseService} from '../api-response.service';

@Component({
  selector: 'app-most-polluted-cities',
  templateUrl: './most-polluted-cities.component.html',
  styleUrls: ['./most-polluted-cities.component.scss']
})
export class MostPollutedCitiesComponent implements OnInit {
  cites;
  constructor(
    private pollutionSortService: PollutionMeasurementsSortService,
    private topCitySearchService: TopCitySearchService,
    private apiRe: ApiResponseService,
  ) { }

  ngOnInit() {
    this.apiRe.resond.subscribe(s => this.cites = s);
    this.getT();
  }

  getT() {
    // this.apiRe.getLatestMeasurements('pm10').subscribe();
    // this.cites = this.pollutionSortService.mostPollutedCities();
  }
}
