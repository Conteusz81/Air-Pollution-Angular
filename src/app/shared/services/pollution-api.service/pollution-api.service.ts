import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PollutionMeasurementsSortService} from '../pollution-measurement-sort.service/pollution-measurements-sort.service';
import {PollutionApiResponse} from '../../models/pollution-api.model/pollution-api.model';
import {Observable} from 'rxjs';
import {GetAllLocationsApiResponse} from '../models/get-all-locations-api.model';
import {map} from 'rxjs/operators';
import {MostPollutedCities} from '../../models/most-polluted-cities.model';

@Injectable({
  providedIn: 'root'
})
export class PollutionApiService {

  constructor(
    private http: HttpClient,
    private pollutionSortService: PollutionMeasurementsSortService
  ) { }

  getLatestMeasurements(parameterId: string): Observable<MostPollutedCities[]> {
    const latestMeasurementsUrl = `https://api.openaq.org/v1/latest?country=PL&parameter=${parameterId}&limit=10000`;
    return this.http.get<PollutionApiResponse>(latestMeasurementsUrl)
      .pipe(map(response => {
        console.log(response);
        return this.pollutionSortService.sortMostPollutedCities(response.results);
      }));
  }

  getCityPollutionData(cityId: string): Observable<PollutionApiResponse> {
    const cityDataUrl = `https://api.openaq.org/v1/latest?country=PL&city=${cityId}`;
    return this.http.get<PollutionApiResponse>(cityDataUrl);
  }

  getAllLocationCoordinates(): Observable<GetAllLocationsApiResponse> {
    const locationsDataUrl = 'https://api.openaq.org/v1/locations?country=PL&limit=300';
    return this.http.get<GetAllLocationsApiResponse>(locationsDataUrl);
  }

  getLocationPollutionData(location: string): Observable<PollutionApiResponse> {
    const locationPollutionDataUrl = `https://api.openaq.org/v1/latest?country=PL&location=${location}`;
    return this.http.get<PollutionApiResponse>(locationPollutionDataUrl);
  }
}
