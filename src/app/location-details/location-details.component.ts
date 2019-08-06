import { Component, OnInit, Input } from '@angular/core';
import {LocationApiResponse} from '../model/location-api-response.model';
import {PollutionMeasurementsSortService} from '../pollution-measurements-sort.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

  @Input() locationMarkerDetails: LocationApiResponse[];
  @Input() apiResponseFlag;

  constructor( private pollutionSortService: PollutionMeasurementsSortService) { }

  ngOnInit() {
  }

}
