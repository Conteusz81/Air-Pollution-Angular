import { Component, OnInit } from '@angular/core';
import {CityCounter} from '../shared/models/city-counter.model';
import { TopCitiesChoiceService } from '../shared/services/top-cities-choice.service/top-cities-choice.service';

@Component({
  selector: 'app-dashboard-main-page',
  templateUrl: './dashboard-main-page-.component.html',
  styleUrls: ['./dashboard-main-page-.component.scss']
})
export class DashboardMainPageComponent implements OnInit {

  private cityCounter: CityCounter[];
  constructor( private topCitiesChoiceService: TopCitiesChoiceService ) { }

  ngOnInit() {
    if ( JSON.parse(localStorage.getItem('cityCounter')) !== null ) {
      this.cityCounter = JSON.parse(localStorage.getItem('cityCounter')).slice(0, 5);
    }
  }

}
