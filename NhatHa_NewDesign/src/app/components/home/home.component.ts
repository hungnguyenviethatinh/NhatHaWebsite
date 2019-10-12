import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nh-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners = [
    '/assets/images/banners/1.JPG',
    '/assets/images/banners/2.JPG',
    '/assets/images/banners/3.JPG',
    '/assets/images/banners/4.JPG',
    '/assets/images/banners/5.JPG',
    '/assets/images/banners/6.JPG',
  ];

  services = [
    {
      img: '/assets/images/services/1.JPG',
      name: 'Phân Tích Hệ Thống Điện',
      href: '/dich-vu/phan-tich-he-thong-dien',
    },
    {
      img: '/assets/images/services/2.JPG',
      name: 'Thử Nghiệm Và Nghiệm Thu',
      href: '/dich-vu/thu-nghiem-va-nghiem-thu',
    },
    {
      img: '/assets/images/services/3.JPG',
      name: 'Phân Tích Chất Lượng Điện',
      href: '/dich-vu/phan-tich-chat-luong-dien-nang',
    },
    {
      img: '/assets/images/services/4.JPG',
      name: 'Bảo Trì Ngăn Ngừa',
      href: '/dich-vu/chuong-trinh-bao-tri-dien',
    },
    {
      img: '/assets/images/services/5.JPG',
      name: 'Bảo Trì Theo Trình Trạng',
      href: '/dich-vu/bao-tri-theo-tinh-trang',
    },
  ];

  products = [
    {
      img: '/assets/images/products/Iriss.JPG',
      name: 'Cửa Sổ Hồng Ngoại',
      href: '/san-pham/cua-so-hong-ngoai',
    },
    {
      img: '/assets/images/products/Cordex.JPG',
      name: 'Máy Giám Sát Tình Trạng Thiết Bị',
      href: '/san-pham/may-do-tinh-trang-thiet-bi',
    },
    {
      img: '/assets/images/products/Emerson.PNG',
      name: 'Giải Pháp Giám Sát Liên Tục Tình Trạng Thiết Bị',
      href: '/san-pham/giai-phap-giam-sat-lien-tuc',
    },
  ];

  constructor( private translateService: TranslateService) { }

  ngOnInit() {
  }

}
