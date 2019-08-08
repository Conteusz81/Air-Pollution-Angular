import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PollutionMeasurementsSortService} from './pollution-measurements-sort.service';
import {ApiResponse} from './model/api-response.model';
import {Observable, Subject} from 'rxjs';
import {GetAllLocationsApiResponse} from './model/get-all-locations-api-response.model';
import {map} from 'rxjs/operators';
import {MostPollutedCities} from './model/most-polluted-cities.model';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {
  // #solutionOnMostPolluted z wykorzystaniem Subject
  sortedTopCitiesData: Subject<MostPollutedCities[]> = new Subject<MostPollutedCities[]>();

  constructor(
    private http: HttpClient,
    private pollutionMeasurementsService: PollutionMeasurementsSortService
  ) { }

  getLatestMeasurements(parameterId: string): Observable<MostPollutedCities[]> {
    const latestMeasurementsUrl = `https://api.openaq.org/v1/latest?country=PL&parameter=${parameterId}&limit=10000`;
    return this.http.get<ApiResponse>(latestMeasurementsUrl)
      .pipe(map(response => {
        this.pollutionMeasurementsService.sortMostPollutedCities(response.results);
        // #solutionOnMostPolluted
        return this.pollutionMeasurementsService.sortedTopCities;
      }));
  }

  getCityPollutionData(cityId: string): Observable<ApiResponse> {
    const cityDataUrl = `https://api.openaq.org/v1/latest?country=PL&city=${cityId}`;
    return this.http.get<ApiResponse>(cityDataUrl);
  }

  getAllLocationsCoordinate(): Observable<GetAllLocationsApiResponse> {
    const locationsDataUrl = 'https://api.openaq.org/v1/locations?country=PL&limit=300';
    return this.http.get<GetAllLocationsApiResponse>(locationsDataUrl);
  }

  getLocationPollutionData(location: string): Observable<ApiResponse> {
    const locationPollutionDataUrl = `https://api.openaq.org/v1/latest?country=PL&location=${location}`;
    return this.http.get<ApiResponse>(locationPollutionDataUrl);
  }
}
