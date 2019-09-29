import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.less']
})
export class CaseStudiesComponent implements OnInit {
  banners = [
    '../../../../assets/images/supports/study/Case-Studies.JPG',
  ];

  constructor() { }

  ngOnInit() {
  }

}
