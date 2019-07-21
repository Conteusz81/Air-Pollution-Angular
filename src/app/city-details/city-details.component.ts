import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParameterService } from '../parameter.service';
import { LocationApiResponse } from '../location-api-response.model';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  cityData: LocationApiResponse[];

  constructor(
    private route: ActivatedRoute,
    private parameterService: ParameterService
  ) { }

  ngOnInit() {
    this.getCityPollutionData();
  }

  getCityPollutionData() {
    const cityId = this.route.snapshot.paramMap.get('id');
    this.parameterService.getCityPollutionData(cityId)
      .subscribe(cityData => {
        this.cityData = cityData.results;
        console.log(this.cityData);
      });
  }
}
