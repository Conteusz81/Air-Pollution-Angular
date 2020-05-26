import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
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
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PollutionParametersListComponent } from './pollution-parameters-list/pollution-parameters-list.component';
import { MostPollutedCitiesComponent } from './pollution-parameters-list/most-polluted-cities/most-polluted-cities.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { AppRoutingModule } from './app-routing.module';
import { CityDetailsComponent } from './city-search/city-details/city-details.component';
import {
  PollutionParameterInformationComponent
} from './pollution-parameters-list/pollution-parameter-information/pollution-parameter-information.component';
import { AirQualityIndexComponent } from './city-search/air-quality-index/air-quality-index.component';
import { DashboardMainPageComponent } from './dashboard-main-page/dashboard-main-page.component';
import { MapViewComponent } from './map-view/map-view.component';
import { LocationDetailsComponent } from './map-view/location-details/location-details.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { LoginFormComponent } from './user-profile/login-form/login-form.component';
// import { RegisterFormComponent } from './user-profile/register-form/register-form.component';
import { MainNavigationListComponent } from './main-navigation-list/main-navigation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PollutionParametersListComponent,
    MostPollutedCitiesComponent,
    CitySearchComponent,
    CityDetailsComponent,
    PollutionParameterInformationComponent,
    AirQualityIndexComponent,
    DashboardMainPageComponent,
    MapViewComponent,
    LocationDetailsComponent,
    // UserProfileComponent,
    // LoginFormComponent,
    // RegisterFormComponent,
    MainNavigationListComponent
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
    LeafletModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
