import { Component, OnInit } from '@angular/core';
import {
  PollutionMeasurementsSortService
} from '../../shared/services/pollution-measurement-sort.service/pollution-measurements-sort.service';
import { TopCitiesChoiceService } from '../../shared/services/top-cities-choice.service/top-cities-choice.service';
import { PollutionApiService } from '../../shared/services/pollution-api.service/pollution-api.service';
import { MostPollutedCities } from '../../shared/models/most-polluted-cities.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-most-polluted-cities',
  templateUrl: './most-polluted-cities.component.html',
  styleUrls: ['./most-polluted-cities.component.scss']
})
export class MostPollutedCitiesComponent implements OnInit {

  private cityId: string;
  private loadingFlag = false;
  mostPollutedByParameter: MostPollutedCities[];

  constructor(
    private pollutionSortService: PollutionMeasurementsSortService,
    private dashboardTopCitiesService: TopCitiesChoiceService,
    private apiResponseService: PollutionApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMostPollutedByParameter();
    this.observeRouteParamMapChange();
  }

  private getMostPollutedByParameter() {
    // #solutionOnMostPolluted a w tym komponenecie pobierać obserwowane dane
    this.apiResponseService.sortedTopCitiesData.subscribe(response => {
      this.mostPollutedByParameter = response;
      this.loadingFlag = true;
    });
  }

  // #canDoBetter stworzone tylko dlatego, że na początku nie przewidziałem potrzeby nazwy parametru pod jakimś Id
  // w nowo stworzonej liscie MostPollutedCities[]
  // pobieram parametr w dziwny sposób, by udało się kolorować listę i odpalić metodę getAirQualityIndexColor
  // ale przy okazji mogę to wykorzystać do flagi dla spinnera
  private observeRouteParamMapChange() {
    this.cityId = this.route.snapshot.paramMap.get('id');
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.cityId = this.route.snapshot.paramMap.get('id');
        this.loadingFlag = false;
      });
  }

}
