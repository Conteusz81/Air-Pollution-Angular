import {Injectable} from '@angular/core';

export enum AirQualityDegree {
  VeryLow = '#79bc6a',
  Low = '#bbcf4c',
  Medium = '#eec20b',
  High = '#f29305',
  VeryHigh = '#e8416f',
  Undefined = '#fff'
}

export interface AirQualityDegreePpmRange {
  airQualityDegree: AirQualityDegree;
  toPpm: number;
}

export interface PollutionParameter {
  [key: string]: AirQualityDegreePpmRange[];
}

// export enum PollutionParameters {
//   no2,
//   pm10,
//   pm25,
//   o3,
//   co,
//   so2
// }

const airQualityDegreePpmRangeMapping: PollutionParameter = {
  no2: [
    {toPpm: 50, airQualityDegree: AirQualityDegree.VeryLow},
    {toPpm: 100, airQualityDegree: AirQualityDegree.Low},
    {toPpm: 200, airQualityDegree: AirQualityDegree.Medium},
    {toPpm: 400, airQualityDegree: AirQualityDegree.High},
  ],
  pm10: [
    {toPpm: 25, airQualityDegree: AirQualityDegree.VeryLow},
    {toPpm: 50, airQualityDegree: AirQualityDegree.Low},
    {toPpm: 90, airQualityDegree: AirQualityDegree.Medium},
    {toPpm: 190, airQualityDegree: AirQualityDegree.High},
  ],
  pm25: [
    {toPpm: 15, airQualityDegree: AirQualityDegree.VeryLow},
    {toPpm: 30, airQualityDegree: AirQualityDegree.Low},
    {toPpm: 55, airQualityDegree: AirQualityDegree.Medium},
    {toPpm: 110, airQualityDegree: AirQualityDegree.High},
  ],
  o3: [
    {toPpm: 60, airQualityDegree: AirQualityDegree.VeryLow},
    {toPpm: 120, airQualityDegree: AirQualityDegree.Low},
    {toPpm: 180, airQualityDegree: AirQualityDegree.Medium},
    {toPpm: 240, airQualityDegree: AirQualityDegree.High},
  ],
  co: [
    {toPpm: 5000, airQualityDegree: AirQualityDegree.VeryLow},
    {toPpm: 7500, airQualityDegree: AirQualityDegree.Low},
    {toPpm: 10000, airQualityDegree: AirQualityDegree.Medium},
    {toPpm: 20000, airQualityDegree: AirQualityDegree.High},
  ],
  so2: [
    {toPpm: 50, airQualityDegree: AirQualityDegree.VeryLow},
    {toPpm: 100, airQualityDegree: AirQualityDegree.Low},
    {toPpm: 350, airQualityDegree: AirQualityDegree.Medium},
    {toPpm: 500, airQualityDegree: AirQualityDegree.High},
  ],
  bc: [{toPpm: 500, airQualityDegree: AirQualityDegree.Undefined}]
};

@Injectable({
  providedIn: 'root'
})
export class AirQualityIndexColorService {

  constructor() {
  }

  getAirQualityIndexColor(parameterName: string, ppmValue: number) {
   const degree = airQualityDegreePpmRangeMapping[parameterName]
        .find(range => ppmValue < range.toPpm);
   return degree ? {background: degree.airQualityDegree} : {background: AirQualityDegree.VeryHigh};


    // switch (parameterName) {
    //   case 'no2':
    //     return value < 50 ? {background: '#79bc6a'} :
    //       value < 100 ? {background: '#bbcf4c'} :
    //         value < 200 ? {background: '#eec20b'} :
    //           value < 400 ? {background: '#f29305'} :
    //             {background: '#e8416f'};
    //   case 'pm10':
    //     return value < 25 ? {background: '#79bc6a'} :
    //       value < 50 ? {background: '#bbcf4c'} :
    //         value < 90 ? {background: '#eec20b'} :
    //           value < 180 ? {background: '#f29305'} :
    //             {background: '#e8416f'};
    //   case 'pm25':
    //     return value < 15 ? {background: '#79bc6a'} :
    //       value < 30 ? {background: '#bbcf4c'} :
    //         value < 55 ? {background: '#eec20b'} :
    //           value < 110 ? {background: '#f29305'} :
    //             {background: '#e8416f'};
    //   case 'o3':
    //     return value < 60 ? {background: '#79bc6a'} :
    //       value < 120 ? {background: '#bbcf4c'} :
    //         value < 180 ? {background: '#eec20b'} :
    //           value < 240 ? {background: '#f29305'} :
    //             {background: '#e8416f'};
    //   case 'co':
    //     return value < 5000 ? {background: '#79bc6a'} :
    //       value < 7500 ? {background: '#bbcf4c'} :
    //         value < 10000 ? {background: '#eec20b'} :
    //           value < 20000 ? {background: '#f29305'} :
    //             {background: '#e8416f'};
    //   case 'so2':
    //     return value < 50 ? {background: '#79bc6a'} :
    //       value < 100 ? {background: '#bbcf4c'} :
    //         value < 350 ? {background: '#eec20b'} :
    //           value < 500 ? {background: '#f29305'} :
    //             {background: '#e8416f'};
    // }
  }
}
