import {getTestBed, TestBed} from '@angular/core/testing';

import { PollutionApiService } from './pollution-api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {PollutionMeasurementsSortService} from '../pollution-measurement-sort.service/pollution-measurements-sort.service';

class MockPollutionMeasurementsSortService {}

describe('PollutionApiService', () => {
  let injector: TestBed;
  let injectorService: PollutionApiService;
  let httpMock: HttpTestingController;

  const dummyPollutionApiResponse = {
    meta: {},
    results: [
      {
        location: 'Shard',
        city: 'London',
        country: 'UK',
        distance: 65464,
        measurements: [
          {
            parameter: 'mock-param',
            value: 45,
            lastUpdated: '2018-11-21T18:00:00.000Z',
            unit: 'test',
            sourceName: 'test'
          }
        ],
        coordinates: {
          latitude: 84.452668,
          longitude: 77.666666
        }
      }
    ]
  };

  const dummyGetAllLocationsApiResponse = {
    meta: {},
    results: [
      {
        location: 'Shard',
        city: 'London',
        country: 'UK',
        count: 65464,
        sourceNames: ['UKHealth'],
        lastUpdated: '2018-11-21T18:00:00.000Z',
        firstUpdated: '2006-08-13T12:35:00.000Z',
        parameters: ['no2', 'pm10'],
        sourceName: 'UKHealth',
        coordinates: {
          latitude: 84.452668,
          longitude: 77.666666
        }
      }
    ]
  };

  // const dummyMostPollutedCities = [
  //   {
  //     name: 'Sydney',
  //     measurementAvg: 1
  //   }
  // ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: PollutionMeasurementsSortService, useClass: MockPollutionMeasurementsSortService}]
    });
    injector = getTestBed();
    injectorService = injector.get(PollutionApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('#getAllLocationCoordinates() should return an Observable<GetAllLocationsApiResponse>', () => {

    injectorService.getAllLocationCoordinates().subscribe( locationData => {
      expect(locationData).toEqual(dummyGetAllLocationsApiResponse);
    });

    const req = httpMock.expectOne('https://api.openaq.org/v1/locations?country=PL&limit=300');
    expect(req.request.method).toBe('GET');
    req.flush(dummyGetAllLocationsApiResponse);
  });

  it('#getLocationPollutionData() should return an Observable<PollutionApiResponse>', () => {

    injectorService.getLocationPollutionData('TestLocation').subscribe( response => {
      expect(response).toEqual(dummyPollutionApiResponse);
    });

    const req = httpMock.expectOne('https://api.openaq.org/v1/latest?country=PL&location=TestLocation');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPollutionApiResponse);
  });

  it('#getCityPollutionData() should return an Observable<PollutionApiResponse>', () => {

    injectorService.getCityPollutionData('TestCityId').subscribe( response => {
      expect(response).toEqual(dummyPollutionApiResponse);
    });

    const req = httpMock.expectOne('https://api.openaq.org/v1/latest?country=PL&city=TestCityId');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPollutionApiResponse);
  });

  // it('#getLatestMeasurements() should return an Observable<MostPollutedCities[]>',  () => {
  //
  //   injectorService.getLatestMeasurements('TestParameterId').subscribe( response => {
  //     expect(response).toEqual(dummyMostPollutedCities);
  //   });
  //
  //   const req = httpMock.expectOne('https://api.openaq.org/v1/latest?country=PL&parameter=TestParameterId');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(dummyMostPollutedCities);
  // });

  it('should be created', () => {
    const service: PollutionApiService = TestBed.get(PollutionApiService);
    expect(service).toBeTruthy();
  });
});
