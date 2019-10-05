import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  products = [
    {
      align: 'left',
      img: '/assets/images/products/cate_1.png',
      href: '/sanpham/cua-so-hong-ngoai',
    },
    {
      align: 'right',
      img: '/assets/images/products/cate_2.png',
      href: '/sanpham/may-do-tinh-trang-thiet-bi',
    },
    {
      align: 'left',
      img: '/assets/images/products/cate_3.png',
      href: '/sanpham/giai-phap-giam-sat-lien-tuc',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
