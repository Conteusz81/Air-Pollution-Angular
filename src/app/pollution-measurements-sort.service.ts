import {Injectable} from '@angular/core';
import {ApiResponse} from './api-response.model';
import {LocationApiResponse} from './location-api-response.model';
import {MostPollutedCities} from './most-polluted-cities.model';

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

  sortMostPollutedCities(serviceResponse: ApiResponse) {
    this.responseResult = serviceResponse.results;
    console.log(this.responseResult);

    this.filterMeasurementsByDate();
    console.log(this.currentMonthMeasurements);

    this.createSortedByCitiesObject();
    // console.log(this.sortedByCities);

    this.sortCitiesByAverageValue();
    // console.log(sortedByCitiesAvgValue);
    // console.log(this.sortedTopCities);
  }

  filterMeasurementsByDate() {
    this.currentMonthMeasurements = this.responseResult.filter(element => {
      if (element.measurements[0].lastUpdated.startsWith(this.currentMonth)) {
        return element;
      }
    });
  }

  private createSortedByCitiesObject() {
    this.sortedByCities = this.currentMonthMeasurements.reduce((r, a) => {
      r[a.city] = r[a.city] || [];
      r[a.city].push(a.measurements[0].value);
      return r;
    }, Object.create({}));
  }

  private sortCitiesByAverageValue() {
    const sortedByCitiesAvgValue = [];
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

  mostPollutedCities() {
    return this.sortedTopCities;
  }
}
