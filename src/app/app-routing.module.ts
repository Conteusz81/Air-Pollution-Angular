import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityDetailsComponent} from './city-details/city-details.component';
import {DashboardMainPageComponent} from './dashboard-main-page/dashboard-main-page.component';
import {CitySearchComponent} from './city-search/city-search.component';
import {PollutionParametersListComponent} from './pollution-parameters-list/pollution-parameters-list.component';
import {MostPollutedCitiesComponent} from './most-polluted-cities/most-polluted-cities.component';
import {MapViewComponent} from './map-view/map-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardMainPageComponent },
  { path: 'city', component: CitySearchComponent,
    children: [ { path: ':id', component: CityDetailsComponent } ]},
  { path: 'parameters', component: PollutionParametersListComponent,
    children: [ { path: ':id', component: MostPollutedCitiesComponent} ]},
  { path: 'map', component: MapViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
