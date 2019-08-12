import {Injectable} from '@angular/core';
import {LocationApiResponse} from '../../models/pollution-api.model/location-api.model';
import {MostPollutedCities} from '../../models/most-polluted-cities.model';
import {AllLocationsApiResponse} from '../models/all-locations-api.model';

@Injectable({
  providedIn: 'root'
})
export class PollutionMeasurementsSortService {
  sortedByCities: {} = {};
  currentMonth = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`;
  responseResult: LocationApiResponse[];
  currentMonthMeasurements: LocationApiResponse[];
  // #solutionOnMostPolluted
  sortedTopCities: MostPollutedCities[];

  constructor() { }
  // #canDoBetter pewnie gdybym wiedział, że tak rozbuduję tą apkę, to inaczej bym podeszdł do najbardziej zanieczyszczonych
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
    // #solutionOnMostPolluted
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
  // #canDoBetter Nie jestem pewny czy ta metoda może być tu czy już powinna być w innym serwisie.
  // i też nie wiem dlaczego jest to ostrzeżenie o metodzie static (jeszcze w innych miejscach mam takie ostrzeżenie)
  // jak zmieniam na static, to przestaje działać, muszę o tym poczytać czym jest satatic
  getAirQualityIndexColor(parameterName: string, value: number) {
    switch (parameterName) {
      case 'no2':
        return value < 50  ? { background: '#79bc6a'} :
               value < 100 ? { background: '#bbcf4c'} :
               value < 200 ? { background: '#eec20b'} :
               value < 400 ? { background: '#f29305'} :
                             { background: '#e8416f'};
      case 'pm10':
        return value < 25  ? { background: '#79bc6a'} :
               value < 50  ? { background: '#bbcf4c'} :
               value < 90  ? { background: '#eec20b'} :
               value < 180 ? { background: '#f29305'} :
                             { background: '#e8416f'};
      case 'pm25':
        return value < 15  ? { background: '#79bc6a'} :
               value < 30  ? { background: '#bbcf4c'} :
               value < 55  ? { background: '#eec20b'} :
               value < 110 ? { background: '#f29305'} :
                             { background: '#e8416f'};
      case 'o3':
        return value < 60  ? { background: '#79bc6a'} :
               value < 120 ? { background: '#bbcf4c'} :
               value < 180 ? { background: '#eec20b'} :
               value < 240 ? { background: '#f29305'} :
                             { background: '#e8416f'};
      case 'co':
        return value < 5000  ? { background: '#79bc6a'} :
               value < 7500  ? { background: '#bbcf4c'} :
               value < 10000 ? { background: '#eec20b'} :
               value < 20000 ? { background: '#f29305'} :
                               { background: '#e8416f'};
      case 'so2':
        return value < 50  ? { background: '#79bc6a'} :
               value < 100 ? { background: '#bbcf4c'} :
               value < 350 ? { background: '#eec20b'} :
               value < 500 ? { background: '#f29305'} :
                             { background: '#e8416f'};
    }
  }
}
