import { LocationApiResponse } from './location-api-response.model';

export interface ApiResponse {
  meta: object;
  results: LocationApiResponse[];
}
