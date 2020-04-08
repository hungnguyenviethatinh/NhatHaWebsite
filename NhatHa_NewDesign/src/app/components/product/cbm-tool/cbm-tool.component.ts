import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-cbm-tool',
  templateUrl: './cbm-tool.component.html',
  styleUrls: ['./cbm-tool.component.less']
})
export class CbmToolComponent implements OnInit {
  products = [
    {
      href: '/san-pham/may-chup-hinh-nhiet-cordex',
      name: 'MÁY CHỤP ẢNH NHIỆT',
      img: 'assets/images/products/02/1.png',
      description: 'MÁY CHỤP ẢNH NHIỆT',
    },
    {
      href: '/san-pham/may-do-song-sieu-am-iriss',
      name: 'MÁY ĐO SÓNG SIÊU ÂM',
      img: 'assets/images/products/02/2.png',
      description: 'MÁY ĐO SÓNG SIÊU ÂM',
    },
    {
      href: '/san-pham/may-do-phong-dien-cuc-bo-iriss',
      name: 'MÁY ĐO PHÓNG ĐIỆN CỤC BỘ',
      img: 'assets/images/products/02/3.png',
      description: 'MÁY ĐO PHÓNG ĐIỆN CỤC BỘ',
    },
    {
      href: '/san-pham/may-phan-tich-chat-luong-dien-nang-aeberle',
      name: 'MÁY PHÂN TÍCH CHẤT LƯỢNG ĐIỆN NĂNG',
      img: 'assets/images/products/02/4.png',
      description: 'MÁY PHÂN TÍCH CHẤT LƯỢNG ĐIỆN NĂNG',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
