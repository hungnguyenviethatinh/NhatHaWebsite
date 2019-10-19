import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-emerson-intellisaw',
  templateUrl: './emerson-intellisaw.component.html',
  styleUrls: ['./emerson-intellisaw.component.less']
})
export class EmersonIntellisawComponent implements OnInit {
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
      img: 'assets/images/products/03/01/tab-home.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #008000'
      },
      click: () => { this.router.navigate(['/san-pham/giai-phap-giam-sat-lien-tuc']); },
    },
    {
      name: 'EMERSON INTELLISAW',
      img: 'assets/images/products/03/01/tab-1.jpg',
      style: {
        ...this.style,
      },
      click: () => { console.log('Life is a bed of roses!'); },
    }
  ];

  imgages = [
    'assets/images/products/03/01/17.jpg',
    'assets/images/products/03/01/18.jpg',
    'assets/images/products/03/01/19.png',
    'assets/images/products/03/01/20.png',
    'assets/images/products/03/01/21.png',
    'assets/images/products/03/01/22.png',
    'assets/images/products/03/01/23.jpg',
    'assets/images/products/03/01/24.jpg',
    'assets/images/products/03/01/25.jpg',
    'assets/images/products/03/01/27.jpg',
    'assets/images/products/03/01/28.jpg',
    'assets/images/products/03/01/29.jpg',
    'assets/images/products/03/01/30.jpg',
    'assets/images/products/03/01/31.jpg',
    'assets/images/products/03/01/32.jpg',
    'assets/images/products/03/01/33.jpg',
    'assets/images/products/03/01/34.png',
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
