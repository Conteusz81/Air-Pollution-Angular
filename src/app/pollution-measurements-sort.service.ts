import {Injectable} from '@angular/core';
import {LatestMeasurementsApiResponse} from './latest-measurements-api-response.model';
import {LocationApiResponse} from './location-api-response.model';
import {MostPollutedCities} from './most-polluted-cities.model';

@Injectable({
  providedIn: 'root'
})
export class PollutionMeasurementsSortService {

  currentMonth = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`;
  responseResult: LocationApiResponse[];
  currentMonthMeasurements: LocationApiResponse[];
  sortedTopCities: MostPollutedCities[];

  constructor() { }

  sortMostPollutedCities(serviceResponse: LatestMeasurementsApiResponse) {
    this.responseResult = serviceResponse.results;
    // console.log(this.responseResult);
    this.currentMonthMeasurements = this.responseResult.filter(element => {
      if (element.measurements[0].lastUpdated.startsWith(this.currentMonth)) {
        return element;
      }
    });
    // console.log(this.currentMonthMeasurements);

    const sortedByCities = this.currentMonthMeasurements.reduce((r, a) => {
      r[a.city] = r[a.city] || [];
      r[a.city].push(a.measurements[0].value);
      return r;
    }, Object.create(null));
    // console.log(sortedByCities);

    const sortedByCitiesAvgValue = [];
    for (const [city, value] of Object.entries(sortedByCities)) {
      const measurementSum = value.reduce((t, v) => t + v);
      const measurementAvgValue = measurementSum / value.length;
      sortedByCitiesAvgValue.push({name: city, measurementAvg: measurementAvgValue});
    }
    // console.log(sortedByCitiesAvgValue);

    this.sortedTopCities = sortedByCitiesAvgValue.sort((a, b) => (a.measurementAvg > b.measurementAvg) ?
      -1 : ((b.measurementAvg > a.measurementAvg) ? 1 : 0)).slice(0, 10);
    // console.log(this.mostPollutedCities);
  }

  mostPollutedCities() {
    return this.sortedTopCities;
  }
}
