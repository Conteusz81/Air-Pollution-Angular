import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {icon, latLng, marker, tileLayer} from 'leaflet';
import {MatSidenav} from '@angular/material';
import {PollutionApiResponseService} from '../shared/pollution-api-response.service/pollution-api-response.service';
import {AllLocationsApiResponse} from '../shared/pollution-api-response.service/models/all-locations-api-response.model';
import {PollutionMeasurementsSortService} from '../shared/pollution-measurement-sort.service/pollution-measurements-sort.service';
import {LocationApiResponse} from '../shared/models/pollution-api-response.model/location-api-response.model';
import {DashboardTopCitiesService} from '../shared/top-cities-choice.service/dashboard-top-cities.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})

export class MapViewComponent implements OnInit {

  @ViewChild(MatSidenav, {static: false}) mapSidenav: any;
  private allLocationsData: AllLocationsApiResponse[];
  private markersLayer = [];
  private locationMarkerData: LocationApiResponse[];
  private cityName: string;
  private apiResponseFlag = false;

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        })
    ],
    zoom: 7,
    center: latLng(52, 19.6)
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        }),
      'Satellite Map': tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
        {
          maxZoom: 18,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        }),
      'Terrain Map': tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
        {
          maxZoom: 18,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        })
    }
  };

    constructor(
    private apiResponseService: PollutionApiResponseService,
    private sortService: PollutionMeasurementsSortService,
    private changeDetector: ChangeDetectorRef,
    private dashboardTopCitiesService: DashboardTopCitiesService
  ) {
  }

  ngOnInit() {
    this.getAllLocations();
  }

  private getAllLocations() {
    this.apiResponseService.getAllLocationsCoordinate().subscribe(locationData => {
      this.allLocationsData = this.sortService.sortLocationData(locationData.results);
      this.addLocationMarkers();
    });
  }

  private addLocationMarkers() {
    const resultsLength: number = this.allLocationsData.length;
    for (let i = 0; i < resultsLength; i++) {

      this.markersLayer.push(marker([this.allLocationsData[i].coordinates.latitude, this.allLocationsData[i].coordinates.longitude],
        {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'leaflet/marker-icon.png',
            shadowUrl: 'leaflet/marker-shadow.png'
          })
        }).on('click', () => {
        this.apiResponseFlag = false;
        this.mapSidenav.open();
        this.getLocationPollutionData(this.allLocationsData[i].location, this.allLocationsData[i].city);
        this.dashboardTopCitiesService.cityChoice(this.allLocationsData[i].city);
        // #solution for click event on marker to work step by step with leaflet map
        this.changeDetector.detectChanges();
      }));
    }
  }

  getLocationPollutionData(location: string, city: string) {
    this.cityName = city;
    this.apiResponseService.getLocationPollutionData(location).subscribe(response => {
      this.locationMarkerData = response.results;
      this.apiResponseFlag = true;
      // #solution for click event on marker to work step by step with leaflet map
      this.changeDetector.detectChanges();
    });
  }
}
