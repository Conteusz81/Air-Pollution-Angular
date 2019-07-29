import {Injectable} from '@angular/core';
import {LocationApiResponse} from './model/location-api-response.model';
import {MostPollutedCities} from './model/most-polluted-cities.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollutionMeasurementsSortService {
  sortedByCities: {} = {};
  currentMonth = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`;
  responseResult: LocationApiResponse[];
  currentMonthMeasurements: LocationApiResponse[];
  sortedTopCities: MostPollutedCities[];

  constructor() { }

  sortMostPollutedCities(serviceResponse: LocationApiResponse[]) {
    this.responseResult = serviceResponse;

    this.filterMeasurementsByDate();

    this.createSortedByCitiesObject();

    this.sortCitiesByAverageValue();
  }

  private filterMeasurementsByDate() {
    this.currentMonthMeasurements = this.responseResult.filter(element => element.measurements[0].lastUpdated
      .startsWith(this.currentMonth));
  }

  private createSortedByCitiesObject() {
    this.sortedByCities = this.currentMonthMeasurements.reduce((r, a) => {
      r[a.city] = r[a.city] || [];
      r[a.city].push(a.measurements[0].value);
      return r;
    }, Object.create({}));
  }

  private sortCitiesByAverageValue() {
    const sortedByCitiesAvgValue: MostPollutedCities[] = [];
    for (const city in this.sortedByCities) {
      if (this.sortedByCities.hasOwnProperty(city)) {
        const measurementSum: number = this.sortedByCities[city].reduce((total, val) => total + val);
        const measurementAvgValue: number = (measurementSum / this.sortedByCities[city].length);
        sortedByCitiesAvgValue.push({name: city, measurementAvg: measurementAvgValue});
      }
    }
    this.sortedTopCities = sortedByCitiesAvgValue.sort((a, b) => (a.measurementAvg > b.measurementAvg) ?
      -1 : ((b.measurementAvg > a.measurementAvg) ? 1 : 0)).slice(0, 10);
  }

  mostPollutedCities(): MostPollutedCities[] {
    // console.log(this.sortedTopCities);
    return this.sortedTopCities;
  }

  sortCityData(cityDataResults: LocationApiResponse[]): LocationApiResponse[] {
    const sortedCityData = cityDataResults.filter( element => element.measurements[0].lastUpdated.startsWith(this.currentMonth));
    sortedCityData.map(el => el.measurements.sort((a, b) => (a.parameter < b.parameter) ?
      -1 : ((b.parameter < a.parameter) ? 1 : 0)));
    return sortedCityData;
  }
}
