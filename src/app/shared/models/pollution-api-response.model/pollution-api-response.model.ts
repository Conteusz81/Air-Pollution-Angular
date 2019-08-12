import { LocationApiResponse } from './location-api-response.model';

export interface PollutionApiResponse {
  meta: object;
  results: LocationApiResponse[];
}
