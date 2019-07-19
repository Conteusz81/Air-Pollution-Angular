import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityGroup } from './city-group.model';
import { ApiResponse } from './api-response.model';
import { CITIESLIST } from './mock-input-autocomplete';

@Injectable({
  providedIn: 'root'
})
export class InputAutocompleteService {
  cityNames: string[];
  citiesList: CityGroup[] = CITIESLIST;
  constructor(
    private http: HttpClient
  ) { }

  getCitiesNames(): void {
    const citiesNamesUrl = './assets/city-list.json';
    const citiesList = [];
    this.http.get<ApiResponse>(citiesNamesUrl).subscribe(response => {
      response.results.map(value => {
        citiesList.push(value.city);
      });
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
