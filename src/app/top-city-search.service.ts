import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopCitySearchService {
  test = [];
  constructor() { }

  getName(x) {
    this.test.push(x);
    console.log(this.test);
  }
}
