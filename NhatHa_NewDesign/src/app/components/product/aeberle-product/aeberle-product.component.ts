import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-aeberle-product',
  templateUrl: './aeberle-product.component.html',
  styleUrls: ['./aeberle-product.component.less']
})
export class AeberleProductComponent implements OnInit {

  style = {
    'text-align': 'center',
    cursor: 'pointer',
  };

  nzGutter = {
    xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32
  };

  tabs = [
    {
      name: 'SẢN PHẨM CBM',
      img: 'assets/images/products/02/01/tab-home.png',
      contents: [],
      style: {
        ...this.style,
        'border-right': '1px dashed #ffa500'
      },
      click: () => { this.router.navigate(['/san-pham/may-do-tinh-trang-thiet-bi']); },
    },
    {
      name: 'MÁY PHÂN TÍCH CHẤT LƯỢNG ĐIỆN NĂNG A-EBERLE',
      img: 'assets/images/products/02/04/tab_1.png',
      contents: [
        {
          href: '/san-pham/may-phan-tich-chat-luong-dien-nang-aeberle/chi-tiet',
          fragment: 'pqbox50',
          img: 'assets/images/products/02/04/1.png',
          text: 'PQ BOX 50',
        },
        {
          href: '/san-pham/may-phan-tich-chat-luong-dien-nang-aeberle/chi-tiet',
          fragment: 'pqbox150',
          img: 'assets/images/products/02/04/2.png',
          text: 'PQ BOX 150',
        },
        {
          href: '/san-pham/may-phan-tich-chat-luong-dien-nang-aeberle/chi-tiet',
          fragment: 'pqbox200',
          img: 'assets/images/products/02/04/3.png',
          text: 'PQ BOX 200',
        },
        {
          href: '/san-pham/may-phan-tich-chat-luong-dien-nang-aeberle/chi-tiet',
          fragment: 'pqbox300',
          img: 'assets/images/products/02/04/4.png',
          text: 'PQ BOX 300',
        },
      ],
      style: {
        ...this.style,
      },
      click: () => { console.log('Life is a bed of roses!'); },
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
