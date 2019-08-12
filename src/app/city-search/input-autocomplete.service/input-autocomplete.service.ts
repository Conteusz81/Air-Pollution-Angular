import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityGroup } from '../models/city-group.model';
import { PollutionApiResponse } from '../../shared/models/pollution-api.model/pollution-api.model';
import { CITIESLIST } from './mock-input-autocomplete-structure';

@Injectable({
  providedIn: 'root'
})
export class InputAutocompleteService {

  cityNames: string[];
  citiesList: CityGroup[] = CITIESLIST;

  constructor( private http: HttpClient ) { }

  getCitiesNames(): void {
    // #solution apiUrl can be placed here
    const citiesNamesUrl = './assets/backup-autocomplete-city-list.json';
    const citiesList = [];
    this.http.get<PollutionApiResponse>(citiesNamesUrl).subscribe(response => {
      response.results.map(value => citiesList.push(value.city));
      this.cityNames = citiesList;
      this.addCitiesToAutocomplete();
    });
  }

  addCitiesToAutocomplete(): void {
    const citiesQuantity: number = this.cityNames.length;
    for (let i = 0; i < citiesQuantity; i++) {
      this.citiesList.map(element => {
        if (element.letter === this.cityNames[i][0]) {
          element.names.push(this.cityNames[i]);
        }
      });
     }
  }

}
