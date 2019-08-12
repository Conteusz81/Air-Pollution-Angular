import { Component, OnInit, Input } from '@angular/core';
import {LocationApiResponse} from '../../shared/models/pollution-api.model/location-api.model';
import {
  PollutionMeasurementsSortService
} from '../../shared/services/pollution-measurement-sort.service/pollution-measurements-sort.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

  @Input() locationMarkerDetails: LocationApiResponse[];
  @Input() loadingFlag;

  constructor( private pollutionSortService: PollutionMeasurementsSortService) { }

  ngOnInit() {
  }

}
