import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityDetailsComponent} from './city-details/city-details.component';
import {PageInformationComponent} from './page-information/page-information.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageInformationComponent },
  { path: 'city/:id', component: CityDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
