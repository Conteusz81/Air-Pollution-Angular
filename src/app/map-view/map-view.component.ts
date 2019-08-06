import {Component, OnInit, ViewChild} from '@angular/core';
import {icon, latLng, marker, tileLayer} from 'leaflet';
import {MatSidenav} from '@angular/material';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})

export class MapViewComponent implements OnInit {

  layers = [];
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
  @ViewChild( MatSidenav, {static: false} ) public myNav;
  constructor() { }

  ngOnInit() {
    const resultsLength: number = this.results.length;
    for (let i = 0; i < resultsLength; i++) {
      // const pollutionParameters = this.results[i].parameters.map( element => element );
      this.layers.push(marker([this.results[i].coordinates.latitude, this.results[i].coordinates.longitude])
        .on('click', () => this.myNav.toggle()));
    }
  }

}
