import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityDetailsComponent} from './city-details/city-details.component';
import {DashboardMainPageComponent} from './dashboard-main-page/dashboard-main-page.component';
import {CitySearchComponent} from './city-search/city-search.component';
import {ParametersListComponent} from './parameters-list/parameters-list.component';
import {MostPollutedCitiesComponent} from './most-polluted-cities/most-polluted-cities.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardMainPageComponent },
  { path: 'city', component: CitySearchComponent,
    children: [ { path: ':id', component: CityDetailsComponent } ]},
  { path: 'parameter', component: ParametersListComponent,
    children: [ { path: ':id', component: MostPollutedCitiesComponent} ]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
