import { Injectable } from '@angular/core';
import { PollutionParameter } from './pollution-parameter';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {ParametersApiResponse} from './parameters-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {
    // private parametersUrl = 'https://api.openaq.org/v1/parameters';
  constructor(
    private http: HttpClient
  ) { }

  //  getParameters(): Observable<PollutionParameter[]> {
  //   return this.http.get<ParametersApiResponse>(this.parametersUrl).pipe(
  //     map(response => response.results)
  //   );
  // }
  getLatestMeasurements(id: string) {
    return this.http.get(`https://api.openaq.org/v1/latest?country=PL&parameter=${id}&limit=10000`).pipe(
      map(response => console.log(response) )
    );
  }
}
