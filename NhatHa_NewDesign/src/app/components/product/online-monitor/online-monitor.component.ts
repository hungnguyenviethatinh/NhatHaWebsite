import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-online-monitor',
  templateUrl: './online-monitor.component.html',
  styleUrls: ['./online-monitor.component.less']
})
export class OnlineMonitorComponent implements OnInit {
  products = [
    {
      href: '/san-pham/emerson-intellisaw',
      name: 'EMERSON - INTELLISAW',
      img: '/assets/images/products/03/1.jpg',
      description: 'EMERSON - INTELLISAW',
    },
    {
      href: '/san-pham/cordex-automated-camera',
      name: 'CORDEX - MN SERIES IMAGER',
      img: '/assets/images/products/03/2.png',
      description: 'CORDEX - MN SERIES IMAGER',
    },
    {
      href: '/san-pham/iriss-delta-t-alert',
      name: 'IRISS - DELTA T ALERT',
      img: '/assets/images/products/03/3.png',
      description: 'MÁY ĐO PHÓNG ĐIỆN CỤC BỘ',
    },
    {
      href: '/san-pham/iriss-e-sentry-connect',
      name: 'IRISS - E SENTRY CONNECT',
      img: '/assets/images/products/03/4.png',
      description: 'IRISS - E SENTRY CONNECT',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
