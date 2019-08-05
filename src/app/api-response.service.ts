import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PollutionMeasurementsSortService} from './pollution-measurements-sort.service';
import {ApiResponse} from './model/api-response.model';
import {Observable, Subject} from 'rxjs';
import {GetAllLocationsApiResponse} from './model/get-all-locations-api-response.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {

  resond: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient,
    private pollutionMeasurementsService: PollutionMeasurementsSortService
  ) { }

  getLatestMeasurements(parameterId: string) {
    const latestMeasurementsUrl = `https://api.openaq.org/v1/latest?country=PL&parameter=${parameterId}&limit=10000`;
    this.http.get<ApiResponse>(latestMeasurementsUrl)
      .pipe(map(data => {
        console.log('DATA', data)
        this.pollutionMeasurementsService.sortMostPollutedCities(data.results);
        this.resond.next(this.pollutionMeasurementsService.sortedTopCities);
      })).subscribe()

  }

  getCityPollutionData(cityId: string): Observable<ApiResponse> {
    const cityDataUrl = `https://api.openaq.org/v1/latest?country=PL&city=${cityId}`;
    return this.http.get<ApiResponse>(cityDataUrl);
  }

  getAllLocationsData(): Observable<GetAllLocationsApiResponse> {
    const locationsDataUrl = 'https://api.openaq.org/v1/locations?country=PL&limit=300';
    return this.http.get<GetAllLocationsApiResponse>(locationsDataUrl);
  }

  getLocationPollutionData(location: string): Observable<ApiResponse> {
    const locationPollutionDataUrl = `https://api.openaq.org/v1/latest?country=PL&location=${location}`;
    return this.http.get<ApiResponse>(locationPollutionDataUrl);
  }
}
