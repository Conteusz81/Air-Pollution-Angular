import { LocationApiResponse } from './location-api-response.model';

export interface LatestMeasurementsApiResponse {
  meta: object;
  results: LocationApiResponse[];
}
