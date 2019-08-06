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
import { PollutionParametersListComponent } from './pollution-parameters-list/pollution-parameters-list.component';
import { MostPollutedCitiesComponent } from './most-polluted-cities/most-polluted-cities.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { AppRoutingModule } from './app-routing.module';
import { CityDetailsComponent } from './city-details/city-details.component';
import { PollutionParameterInformationComponent } from './pollution-parameter-information/pollution-parameter-information.component';
import { AirQualityIndexComponent } from './air-quality-index/air-quality-index.component';
import { DashboardMainPageComponent } from './dashboard-main-page/dashboard-main-page.component';
import { MapViewComponent } from './map-view/map-view.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

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
    UserProfileComponent,
    LoginFormComponent,
    RegisterFormComponent
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
