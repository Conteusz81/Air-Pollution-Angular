import {Component, OnInit} from '@angular/core';
import {latLng, tileLayer} from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})

export class MapViewComponent implements OnInit {

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18,
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' })
    ],
    zoom: 7,
    center: latLng(52, 19.6)
  };

  constructor() { }

  ngOnInit() {
  }

}
