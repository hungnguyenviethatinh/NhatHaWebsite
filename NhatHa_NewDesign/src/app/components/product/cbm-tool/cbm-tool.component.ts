import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-cbm-tool',
  templateUrl: './cbm-tool.component.html',
  styleUrls: ['./cbm-tool.component.less']
})
export class CbmToolComponent implements OnInit {
  products = [
    {
      href: '',
      name: 'MÁY CHỤP ẢNH NHIỆT',
      img: '/assets/images/products/02/1.png',
      description: 'MÁY CHỤP ẢNH NHIỆT',
    },
    {
      href: '',
      name: 'MÁY ĐO SÓNG SIÊU ÂM',
      img: '/assets/images/products/02/2.png',
      description: 'MÁY ĐO SÓNG SIÊU ÂM',
    },
    {
      href: '',
      name: 'MÁY ĐO PHÓNG ĐIỆN CỤC BỘ',
      img: '/assets/images/products/02/3.png',
      description: 'MÁY ĐO PHÓNG ĐIỆN CỤC BỘ',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
