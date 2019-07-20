import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityDetailsComponent} from './city-details/city-details.component';

const routes: Routes = [
  { path: 'city/:id', component: CityDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
