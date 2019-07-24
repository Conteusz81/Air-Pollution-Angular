import { LocationMeasurementsApiResponse } from './location-measurements-api-response.model';
import { LocationCoordinatesApiResponse } from './location-coordinates-api-response.model';

export interface LocationApiResponse {
  location: string;
  city: string;
  country: string;
  distance: number;
  measurements: LocationMeasurementsApiResponse[];
  coordinates: LocationCoordinatesApiResponse;
}
