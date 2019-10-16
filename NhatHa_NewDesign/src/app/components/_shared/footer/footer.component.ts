import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
