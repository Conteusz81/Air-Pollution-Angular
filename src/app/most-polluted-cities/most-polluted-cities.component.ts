import {Component, OnInit} from '@angular/core';
import {PollutionMeasurementsSortService} from '../pollution-measurements-sort.service';
import {TopCitySearchService} from '../top-city-search.service';

@Component({
  selector: 'app-most-polluted-cities',
  templateUrl: './most-polluted-cities.component.html',
  styleUrls: ['./most-polluted-cities.component.scss']
})
export class MostPollutedCitiesComponent implements OnInit {

  constructor(
    private pollutionSortService: PollutionMeasurementsSortService,
    private topCitySearchService: TopCitySearchService
  ) { }

  ngOnInit() {
  }
}
