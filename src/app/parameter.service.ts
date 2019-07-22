import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PollutionMeasurementsSortService} from './pollution-measurements-sort.service';
import {ApiResponse} from './api-response.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor(
    private http: HttpClient,
    private pollutionMeasurementsService: PollutionMeasurementsSortService
  ) { }

  getLatestMeasurements(parameterId: string) {
    const latestMeasurementsUrl = `https://api.openaq.org/v1/latest?country=PL&parameter=${parameterId}&limit=10000`;
    this.http.get<ApiResponse>(latestMeasurementsUrl).subscribe(response => {
      this.pollutionMeasurementsService.sortMostPollutedCities(response);
    });
  }

  getCityPollutionData(cityId): Observable<ApiResponse> {
    const cityDataUrl = `https://api.openaq.org/v1/latest?country=PL&city=${cityId}`;
    return this.http.get<ApiResponse>(cityDataUrl);
  }
}
