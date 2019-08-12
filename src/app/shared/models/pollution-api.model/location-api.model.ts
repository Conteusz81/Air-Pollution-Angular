import { LocationMeasurementsApiResponse } from './location-measurements-api.model';
import { LocationCoordinatesApiResponse } from './location-coordinates-api.model';

export interface LocationApiResponse {
  location: string;
  city: string;
  country: string;
  distance: number;
  measurements: LocationMeasurementsApiResponse[];
  coordinates: LocationCoordinatesApiResponse;
}
