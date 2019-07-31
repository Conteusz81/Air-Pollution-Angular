import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {icon, latLng, marker, tileLayer} from 'leaflet';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})

export class MapViewComponent implements OnInit {

  markerLayers = [];
  results = [
    {
      location: 'AM1 Gdańsk Śródmieście',
      city: 'Gdańsk',
      country: 'PL',
      count: 19286,
      sourceNames: [
        'GIOS'
        ],
      lastUpdated: '2019-07-29T11:00:00.000Z',
      firstUpdated: '2018-11-21T18:00:00.000Z',
      parameters: [
        'no2',
        'co',
        'pm10',
        'so2'
        ],
      sourceName: 'GIOS',
      coordinates: {
        latitude: 54.353336,
        longitude: 18.635283
      }
    },
    {
      location: 'AM10 Gdynia Śródmieście',
      city: 'Gdynia',
      country: 'PL',
      count: 10520,
      sourceNames: [
        'GIOS'
        ],
      lastUpdated: '2019-07-29T11:00:00.000Z',
      firstUpdated: '2018-11-21T18:00:00.000Z',
      parameters: [
        'pm10',
        'no2'
        ],
      sourceName: 'GIOS',
      coordinates: {
        latitude: 54.525272,
        longitude: 18.536383
      }
    },
    {
      location: 'AM11 Słupsk Kniaziewicza',
      city: 'Słupsk',
      country: 'PL',
      count: 26061,
      sourceNames: [
        'GIOS'
        ],
      lastUpdated: '2019-07-29T11:00:00.000Z',
      firstUpdated: '2018-11-21T18:00:00.000Z',
      parameters: [
        'bc',
        'no2',
        'o3',
        'so2',
        'co',
        'pm10'
        ],
      sourceName: 'GIOS',
      coordinates: {
        latitude: 54.46361,
        longitude: 17.046722
      }
    }
    ];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18,
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' })
    ],
    zoom: 7,
    center: latLng(52, 19.6)
  };
  @ViewChild(MatSidenav, { static: false }) mapSidenav: any;
  private markerLocation: string;
  private markerCity: string;
  constructor( private changeDetector: ChangeDetectorRef ) { }

  ngOnInit() {
    const resultsLength: number = this.results.length;
    for (let i = 0; i < resultsLength; i++) {
      this.markerLayers.push(marker([this.results[i].coordinates.latitude, this.results[i].coordinates.longitude],
        {
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'leaflet/marker-icon.png',
            shadowUrl: 'leaflet/marker-shadow.png'
          })
        }).on('click', () => {
      this.getLocationMeasurements(this.results[i].location, this.results[i].city);
      this.mapSidenav.open();
      this.changeDetector.detectChanges();
    }));
    }
  }

  private getLocationMeasurements(location: string, city: string) {
    this.markerLocation = location;
    this.markerCity = city;
  }
}
