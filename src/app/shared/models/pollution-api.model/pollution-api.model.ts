import { LocationApiResponse } from './location-api.model';

export interface PollutionApiResponse {
  meta: object;
  results: LocationApiResponse[];
}
