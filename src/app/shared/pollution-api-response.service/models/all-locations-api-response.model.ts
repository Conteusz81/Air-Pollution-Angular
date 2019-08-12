import {LocationCoordinatesApiResponse} from '../../models/pollution-api-response.model/location-coordinates-api-response.model';

export interface AllLocationsApiResponse {
  location: string;
  city: string;
  country: string;
  count: number;
  sourceNames: string[];
  lastUpdated: string;
  firstUpdated: string;
  parameters: string[];
  sourceName: string;
  coordinates: LocationCoordinatesApiResponse;
}
