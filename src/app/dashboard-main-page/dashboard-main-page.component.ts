import { Component, OnInit } from '@angular/core';
import {CityCounter} from '../model/city-counter.model';
import {TopCitySearchService} from '../top-city-search.service';

@Component({
  selector: 'app-main-page-navigation',
  templateUrl: './dashboard-main-page-.component.html',
  styleUrls: ['./dashboard-main-page-.component.scss']
})
export class DashboardMainPageComponent implements OnInit {

  private cityCounter: CityCounter[];
  constructor( private topCitySearchService: TopCitySearchService ) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('cityCounter')) !== null) {
      this.cityCounter = JSON.parse(localStorage.getItem('cityCounter')).slice(0, 5);
    }
    console.log(this.cityCounter);
  }

}
