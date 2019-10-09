import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-cordex-camera',
  templateUrl: './cordex-camera.component.html',
  styleUrls: ['./cordex-camera.component.less']
})
export class CordexCameraComponent implements OnInit {
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
      img: '/assets/images/products/02/01/tab-home.png',
      contents: [],
      style: {
        ...this.style,
        'border-right': '1px dashed #ffa500'
      },
      click: () => { this.router.navigate(['/san-pham/may-do-tinh-trang-thiet-bi']); },
    },
    {
      name: 'MÁY CHỤP NHIỆT CORDEX',
      img: '/assets/images/products/02/01/tab-1.gif',
      contents: [
        {
          href: '/san-pham/may-chup-hinh-nhiet-cordex/chi-tiet',
          fragment: 'toughpix-digiherm',
          img: '/assets/images/products/02/01/1.jpg',
          text: 'TOUGHPIX DIGITHERM',
        },
        {
          href: '/san-pham/may-chup-hinh-nhiet-cordex/chi-tiet',
          fragment: 'infrared-camera-tc7150',
          img: '/assets/images/products/02/01/2.jpg',
          text: 'INFRARED CAMERA – TC7150',
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
