import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatOptionModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatListModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatIconModule
} from '@angular/material';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ParametersListComponent } from './parameters-list/parameters-list.component';
import { MostPollutedCitiesComponent } from './most-polluted-cities/most-polluted-cities.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { AppRoutingModule } from './app-routing.module';
import { CityDetailsComponent } from './city-details/city-details.component';
import { PollutionParameterInformationComponent } from './pollution-parameter-information/pollution-parameter-information.component';
import { AirQualityIndexComponent } from './air-quality-index/air-quality-index.component';
import { DashboardMainPageComponent } from './dashboard-main-page/dashboard-main-page.component';
import { MapViewComponent } from './map-view/map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    ParametersListComponent,
    MostPollutedCitiesComponent,
    CitySearchComponent,
    CityDetailsComponent,
    PollutionParameterInformationComponent,
    AirQualityIndexComponent,
    DashboardMainPageComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatOptionModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    AppRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
