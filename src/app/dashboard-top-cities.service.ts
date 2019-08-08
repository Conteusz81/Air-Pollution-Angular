import {Injectable} from '@angular/core';
import {CityCounter} from './model/city-counter.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardTopCitiesService {

  private cityCounter: CityCounter[] = JSON.parse(localStorage.getItem('cityCounter'));

  constructor() { }

  cityChoice(cityName: string) {
    this.checkIfStorageIsEmpty();
    // #solution clever way to check if whole array of objects have some value
    // if not return -1
    const index = this.cityCounter.findIndex( element => element.name === cityName );
    if ( index === -1) {
      this.cityCounter.unshift({ name: cityName, counter: 1});
    } else {
      this.cityCounter.filter(element => {
        if (element.name === cityName) {
          element.counter++;
        }
      });
    }
    this.cityCounter.sort((a, b) => (a.counter < b.counter) ? 1 : ((b.counter < a.counter) ? -1 : 0));
    localStorage.setItem('cityCounter' , JSON.stringify(this.cityCounter));
  }

  private checkIfStorageIsEmpty() {
    if (this.cityCounter === null) {
      this.cityCounter = [];
    }
  }
}
