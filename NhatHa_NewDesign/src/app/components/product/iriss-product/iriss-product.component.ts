import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-iriss-product',
  templateUrl: './iriss-product.component.html',
  styleUrls: ['./iriss-product.component.less']
})
export class IrissProductComponent implements OnInit {
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
      img: 'assets/images/products/01/01/tab-home.png',
      contents: [],
      style: {
        ...this.style,
        'border-right': '1px dashed #096dd9'
      },
      click: () => { this.router.navigate(['/san-pham/cua-so-hong-ngoai']); },
    },
    {
      name: 'CỬA SỔ IR IRISS',
      img: 'assets/images/products/01/01/tab-1.png',
      contents: [
        {
          href: '/san-pham/san-pham-iriss/chi-tiet',
          fragment: 'dong-vpt',
          img: 'assets/images/products/01/01/vpt.jpg',
          text: 'DÒNG VPT',
        },
        {
          href: '/san-pham/san-pham-iriss/chi-tiet',
          fragment: 'dong-cap-ct',
          img: 'assets/images/products/01/01/ct.png',
          text: 'DÒNG CAP CT',
        },
        {
          href: '/san-pham/san-pham-iriss/chi-tiet',
          fragment: 'dong-cap-env',
          img: 'assets/images/products/01/01/env.png',
          text: 'DÒNG CAP ENV',
        },
        {
          href: '/san-pham/san-pham-iriss/chi-tiet',
          fragment: 'dong-flex-ir',
          img: 'assets/images/products/01/01/flex-ir.png',
          text: 'DÒNG FLEX IR',
        },
      ],
      style: {
        ...this.style,
      },
      click: () => { console.log('Life is a bed of roses!'); },
    }
  ];

  constructor(private router: Router) {  }

  ngOnInit() {
  }

}
