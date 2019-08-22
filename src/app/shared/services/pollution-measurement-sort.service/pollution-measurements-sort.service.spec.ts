import {inject, TestBed} from '@angular/core/testing';

import { PollutionMeasurementsSortService } from './pollution-measurements-sort.service';

describe('PollutionMeasurementsSortService', () => {
  let service: PollutionMeasurementsSortService;
  const testCurrentMonth = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}`;
  const dummyMostPollutedCities = [
    {
      name: 'mock-city',
      measurementAvg: 10
    }
  ];
  const dummyLatestMeasurementsApiResultsAsParam = [
      {
        location: 'mock-location',
        city: 'mock-city',
        country: 'mock-country',
        distance: 65464,
        measurements: [
          {
            parameter: 'z-param123',
            value: 10,
            lastUpdated: `${testCurrentMonth}`,
            unit: 'test',
            sourceName: 'test'
          },
          {
            parameter: 'a-param',
            value: 10,
            lastUpdated: `${testCurrentMonth}`,
            unit: 'test',
            sourceName: 'test'
          },
          {
            parameter: 'b-param',
            value: 10,
            lastUpdated: `${testCurrentMonth}`,
            unit: 'test',
            sourceName: 'test'
          }
        ],
        coordinates: {
          latitude: 84.452668,
          longitude: 77.666666
        }
      }
  ];
  const dummyLatestMeasurementsApiResults = [
    {
      location: 'mock-location',
      city: 'mock-city',
      country: 'mock-country',
      distance: 65464,
      measurements: [
        {
          parameter: 'z-param',
          value: 10,
          lastUpdated: `${testCurrentMonth}`,
          unit: 'test',
          sourceName: 'test'
        },
        {
          parameter: 'a-param',
          value: 10,
          lastUpdated: `${testCurrentMonth}`,
          unit: 'test',
          sourceName: 'test'
        },
        {
          parameter: 'b-param',
          value: 10,
          lastUpdated: `${testCurrentMonth}`,
          unit: 'test',
          sourceName: 'test'
        }
      ],
      coordinates: {
        latitude: 84.452668,
        longitude: 77.666666
      }
    }
  ];
  const dummyAllLocationApiResponse = [
    {
      location: 'Shard',
      city: 'London',
      country: 'UK',
      count: 65464,
      sourceNames: ['UKHealth'],
      lastUpdated: `${testCurrentMonth}`,
      firstUpdated: '2006-08-13T12:35:00.000Z',
      parameters: ['no2', 'pm10'],
      sourceName: 'UKHealth',
      coordinates: {
        latitude: 84.452668,
        longitude: 77.666666
      }
    }
  ];

  beforeEach(() => TestBed.configureTestingModule({
   providers: [PollutionMeasurementsSortService]
  }));
  beforeEach(inject([PollutionMeasurementsSortService], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#sortMostPollutedCities() should return an Object {name: string, measurementAvg: number}', () => {
    expect(service.sortMostPollutedCities(dummyLatestMeasurementsApiResultsAsParam)).toEqual(dummyMostPollutedCities);
  });

  it('#sortParameterByName() should return an measurements array sorted by parameter name', () => {
    const sortParameterByNameService = service.sortParameterByName(dummyLatestMeasurementsApiResultsAsParam);
    expect(sortParameterByNameService).not.toEqual(dummyLatestMeasurementsApiResults);
  });

  it('#sortLocationData() should return locations by current lastUpdate date', () => {
    const testCurrentDateAsNumber = `${testCurrentMonth}`.replace('-', '.');
    const sortLocationDataServiceAsNumber = service.sortLocationData(dummyAllLocationApiResponse)[0].lastUpdated
      .replace('-', '.');
    expect(+sortLocationDataServiceAsNumber).toBeGreaterThan(+testCurrentDateAsNumber - 0.1);
  });

});
