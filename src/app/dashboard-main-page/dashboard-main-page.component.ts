import { Component, OnInit } from '@angular/core';
import {CityCounter} from '../shared/models/city-counter.model';
import { DashboardTopCitiesService } from '../shared/top-cities-choice.service/dashboard-top-cities.service';

@Component({
  selector: 'app-main-page-navigation',
  templateUrl: './dashboard-main-page-.component.html',
  styleUrls: ['./dashboard-main-page-.component.scss']
})
export class DashboardMainPageComponent implements OnInit {

  private cityCounter: CityCounter[];
  constructor( private dashboardTopCitiesService: DashboardTopCitiesService ) { }

  ngOnInit() {
    if ( JSON.parse(localStorage.getItem('cityCounter')) !== null ) {
      this.cityCounter = JSON.parse(localStorage.getItem('cityCounter')).slice(0, 5);
    }
  }

}
