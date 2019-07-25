import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-information',
  templateUrl: './page-information.component.html',
  styleUrls: ['./page-information.component.scss']
})
export class PageInformationComponent implements OnInit {
  showFiller1 = false;
  showFiller2 = false;

  constructor() { }

  ngOnInit() {
  }

}
