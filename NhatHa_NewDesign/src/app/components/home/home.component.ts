import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners = [
    '../../../assets/images/banners/1.JPG',
    '../../../assets/images/banners/2.JPG',
    '../../../assets/images/banners/3.JPG',
    '../../../assets/images/banners/4.JPG',
    '../../../assets/images/banners/5.JPG',
    '../../../assets/images/banners/6.JPG',
  ];

  services = [
    {
      img: '../../../assets/images/services/1.JPG',
      name: 'Phân Tích Hệ Thống Điện',
    },
    {
      img: '../../../assets/images/services/2.JPG',
      name: 'Thử Nghiệm Và Nghiệm Thu',
    },
    {
      img: '../../../assets/images/services/3.JPG',
      name: 'Phân Tích Chất Lượng Điện',
    },
    {
      img: '../../../assets/images/services/4.JPG',
      name: 'Bảo Trì Ngăn Ngừa',
    },
    {
      img: '../../../assets/images/services/5.JPG',
      name: 'Bảo Trì Theo Trình Trạng',
    },
  ];

  products = [
    {
      img: '../../../assets/images/products/Iriss.JPG',
      name: 'Cửa Sổ Hồng Ngoại',
    },
    {
      img: '../../../assets/images/products/Cordex.JPG',
      name: 'Máy Giám Sát Tình Trạng Thiết Bị',
    },
    {
      img: '../../../assets/images/products/Emerson.PNG',
      name: 'Giải Pháp Giám Sát Liên Tục Tình Trạng Thiết Bị',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
