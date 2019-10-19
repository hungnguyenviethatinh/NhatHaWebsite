import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-cordex-mn4000',
  templateUrl: './cordex-mn4000.component.html',
  styleUrls: ['./cordex-mn4000.component.less']
})
export class CordexMn4000Component implements OnInit {
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
      img: 'assets/images/products/03/02/tab-home.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #ed7d31'
      },
      click: () => { this.router.navigate(['/san-pham/giai-phap-giam-sat-lien-tuc']); },
    },
    {
      name: 'CORDEX MN4000',
      img: 'assets/images/products/03/02/tab-mn4000.png',
      style: {
        ...this.style,
      },
      click: () => { console.log('Life is a bed of roses!'); },
    }
  ];

  secondTabs = [
    {
      id: 0,
      active: false,
      name: 'ĐẶC TÍNH',
      style: {
        ...this.style,
        'border-right': '2px solid #fff',
      },
      click: () => {
        const section = document.getElementById('cordex-feature');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
    {
      id: 1,
      active: false,
      name: 'CHỨNG CHỈ',
      style: {
        ...this.style,
        'border-right': '2px solid #fff',
      },
      click: () => {
        const section = document.getElementById('cordex-certificate');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
    {
      id: 2,
      active: false,
      name: 'PHIM - HÌNH ẢNH',
      style: {
        ...this.style,
        'border-right': '2px solid #fff',
      },
      click: () => {
        const section = document.getElementById('cordex-demo');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
    {
      id: 3,
      active: false,
      name: 'TÀI LIỆU',
      style: { ...this.style },
      click: () => {
        const section = document.getElementById('cordex-document');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
  ];

  content = {
    cover: {
      img: '.assets/images/products/03/02/01/1.PNG',
      paragraphs: [
        [
          'Bảo Vệ Tài Sản Của Bạn',
          'Được lắp đặt cố định trên các thiết bị điện, MN4000 cho '
          + 'phép giám sát nhiệt độ liên tục và có thể kết nối được từ PLC hoặc trình duyệt web.',
        ],
        [
          'An Toàn',
          'Với MN4000, ngoài việc nhân viên quét nhiệt của bạn không cần phải đối diện với '
          + 'nguy cơ làm việc với điện sống, bạn có thể thực hiện việc kiểm tra mà không cần rời khỏi phòng làm việc. '
          + 'Các cảnh báo có thể được cài đặt '
          + 'để thông báo cho chuyên viên quét nhiệt tình trạng để có thể tiến hành kiểm tra một cách an toàn.',
        ],
        [
          'Tích Hợp Tiêu Chuẩn Với PLC',
          'Có khả năng giao tiếp thông qua các tiêu chuẩn truyền thông công nghiệp như Modbus/TCP, '
          + 'MN4000 được cung cấp với các khối lệnh chức năng viết cho PLC để có thể nhanh chóng '
          + 'dễ dàng tích hợp vào hệ thống PLC hiện hữu cũng như mới.',
        ],
        [
          'Lắp Đặt Dễ Dàng',
          'Đảm bảo việc dễ dàng nâng cấp trực tiếp vào các vị trị đã lắp cửa sổ dòng IW 4000, phần khung của MN4000 '
          + 'có thể được lắp vào vỏ tủ, cấp nguồn 24VDC và giao tiếp bằng dây Ethernet bạn đã có thể sẵn sàng sử dụng.',
        ],
      ],
    },
    detail: {
      demos: {
        img: [
          '.assets/images/products/03/02/01/2.jpg',
          '.assets/images/products/03/02/01/3.jpg',
          '.assets/images/products/03/02/01/4.jpg',
          '.assets/images/products/03/02/01/5.jpg',
          '.assets/images/products/03/02/01/6.jpg',
        ],
        video: '.assets/images/products/03/02/01/video.mp4',
      },
      documents: [
        'Product Data Sheet – MN4000',
        'Product Manual – MN4000',
      ],
    }
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
