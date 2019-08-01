import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CityGroup } from '../model/city-group.model';
import { InputAutocompleteService } from '../input-autocomplete.service';
import {TopCitySearchService} from '../top-city-search.service';

export const filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {
  cityForm: FormGroup = this.formBuilder.group({
    cityGroup: '',
  });

  cityGroups: CityGroup[] = this.inputAutocompleteService.citiesList;
  cityGroupOptions: Observable<CityGroup[]>;
  cityName: string;

  constructor(
    private formBuilder: FormBuilder,
    private inputAutocompleteService: InputAutocompleteService,
    private topCitySearchService: TopCitySearchService
    ) {}

  ngOnInit() {
    if (this.cityGroups[0].names.length === 0) {
      this.inputAutocompleteService.getCitiesNames();
    }
    this.cityGroupOptions = this.cityForm.get('cityGroup').valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterGroup(value))
      );
  }

  private filterGroup(value: string): CityGroup[] {
    if (value) {
      return this.cityGroups
        .map(group => ({letter: group.letter, names: filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.cityGroups;
  }
}
