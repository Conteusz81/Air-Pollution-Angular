import {Injectable} from '@angular/core';
import {LocationApiResponse} from './model/location-api-response.model';
import {MostPollutedCities} from './model/most-polluted-cities.model';
import {AllLocationsApiResponse} from './model/all-locations-api-response.model';

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

  sortParameterByName(cityDataResults: LocationApiResponse[]): LocationApiResponse[] {
    const sortedCityData = cityDataResults.filter( element => element.measurements[0].lastUpdated.startsWith(this.currentMonth));
    sortedCityData.map(el => el.measurements.sort((a, b) => (a.parameter < b.parameter) ?
      -1 : ((b.parameter < a.parameter) ? 1 : 0)));
    return sortedCityData;
  }

  sortLocationData(locationDataResults: AllLocationsApiResponse[]): AllLocationsApiResponse[] {
    return locationDataResults.filter( element => element.lastUpdated.startsWith(this.currentMonth));
  }

  getColor(parameterName: string, value: number) {
    switch (parameterName) {
      case 'no2':
        return value < 50  ? {border: '1px solid #79bc6a', background: '#79bc6a'} :
               value < 100 ? {border: '1px solid #bbcf4c', background: '#bbcf4c'} :
               value < 200 ? {border: '1px solid #eec20b', background: '#eec20b'} :
               value < 400 ? {border: '1px solid #f29305', background: '#f29305'} :
                             {border: '1px solid #e8416f', background: '#e8416f'};
      case 'pm10':
        return value < 25  ? {border: '1px solid #79bc6a', background: '#79bc6a'} :
               value < 50  ? {border: '1px solid #bbcf4c', background: '#bbcf4c'} :
               value < 90  ? {border: '1px solid #eec20b', background: '#eec20b'} :
               value < 180 ? {border: '1px solid #f29305', background: '#f29305'} :
                             {border: '1px solid #e8416f', background: '#e8416f'};
      case 'pm25':
        return value < 15  ? {border: '1px solid #79bc6a', background: '#79bc6a'} :
               value < 30  ? {border: '1px solid #bbcf4c', background: '#bbcf4c'} :
               value < 55  ? {border: '1px solid #eec20b', background: '#eec20b'} :
               value < 110 ? {border: '1px solid #f29305', background: '#f29305'} :
                             {border: '1px solid #e8416f', background: '#e8416f'};
      case 'o3':
        return value < 60  ? {border: '1px solid #79bc6a', background: '#79bc6a'} :
               value < 120 ? {border: '1px solid #bbcf4c', background: '#bbcf4c'} :
               value < 180 ? {border: '1px solid #eec20b', background: '#eec20b'} :
               value < 240 ? {border: '1px solid #f29305', background: '#f29305'} :
                             {border: '1px solid #e8416f', background: '#e8416f'};
      case 'co':
        return value < 5000  ? {border: '1px solid #79bc6a', background: '#79bc6a'} :
               value < 7500  ? {border: '1px solid #bbcf4c', background: '#bbcf4c'} :
               value < 10000 ? {border: '1px solid #eec20b', background: '#eec20b'} :
               value < 20000 ? {border: '1px solid #f29305', background: '#f29305'} :
                               {border: '1px solid #e8416f', background: '#e8416f'};
      case 'so2':
        return value < 50  ? {border: '1px solid #79bc6a', background: '#79bc6a'} :
               value < 100 ? {border: '1px solid #bbcf4c', background: '#bbcf4c'} :
               value < 350 ? {border: '1px solid #eec20b', background: '#eec20b'} :
               value < 500 ? {border: '1px solid #f29305', background: '#f29305'} :
                             {border: '1px solid #e8416f', background: '#e8416f'};
    }
  }
}
