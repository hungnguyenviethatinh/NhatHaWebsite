import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-cordex-auto-camera',
  templateUrl: './cordex-auto-camera.component.html',
  styleUrls: ['./cordex-auto-camera.component.less']
})
export class CordexAutoCameraComponent implements OnInit {
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
      img: '/assets/images/products/03/02/tab-home.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #ffa500'
      },
      click: () => { this.router.navigate(['/san-pham/giai-phap-giam-sat-lien-tuc']); },
    },
    {
      name: 'DÒNG CORDEX MN',
      img: '/assets/images/products/03/02/tab-1.PNG',
      style: {
        ...this.style,
      },
      click: () => { console.log('Life is a bed of roses!'); },
    }
  ];

  products = [
    {
      href: '/san-pham/cordex-automated-camera/cordex-mn4000',
      img: '/assets/images/products/03/02/2.jpg',
      name: 'PANEL MOUNTED IMAGER – MN4000',
    },
    {
      href: '/san-pham/cordex-automated-camera/cordex-mn4100',
      img: '/assets/images/products/03/02/3.png',
      name: 'AUTOMATION IMAGER – MN4100',
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
