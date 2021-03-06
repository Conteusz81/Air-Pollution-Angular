import {Injectable} from '@angular/core';
import {LocationApiResponse} from '../../models/pollution-api.model/location-api.model';
import {MostPollutedCities} from '../../models/most-polluted-cities.model';
import {AllLocationsApiResponse} from '../models/all-locations-api.model';

@Injectable({
  providedIn: 'root'
})
export class PollutionMeasurementsSortService {
  private sortedByCities: {} = {};
  private currentMonth = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`;
  private latestMeasurements: LocationApiResponse[];
  private currentMonthMeasurements: LocationApiResponse[];
  private sortedTopCities: MostPollutedCities[];

  constructor() { }
  // #canDoBetter pewnie gdybym wiedział, że tak rozbuduję tą apkę, to inaczej bym podeszdł do najbardziej zanieczyszczonych
  sortMostPollutedCities(latestMeasurements: LocationApiResponse[]): MostPollutedCities[] {
    this.latestMeasurements = latestMeasurements;
    this.filterMeasurementsByDate();
    this.createSortedByCitiesObject();
    this.sortCitiesByAverageValue();
    return this.sortedTopCities;
  }

   private filterMeasurementsByDate() {
    this.currentMonthMeasurements = this.latestMeasurements.filter(element => element.measurements[0].lastUpdated
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

  sortParameterByName(cityDataResults: LocationApiResponse[]): LocationApiResponse[] {
    const sortedCityData = cityDataResults.filter( element => element.measurements[0].lastUpdated.startsWith(this.currentMonth));
    sortedCityData.map(el => el.measurements.sort((a, b) => (a.parameter < b.parameter) ? -1 :
      ((b.parameter < a.parameter) ? 1 : 0)));
    return sortedCityData;
  }

  sortLocationData(locationDataResults: AllLocationsApiResponse[]): AllLocationsApiResponse[] {
    return locationDataResults.filter( element => element.lastUpdated.startsWith(this.currentMonth));
  }

}
