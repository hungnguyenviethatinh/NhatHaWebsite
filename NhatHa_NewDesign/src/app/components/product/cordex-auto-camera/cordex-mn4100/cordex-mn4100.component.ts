import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-cordex-mn4100',
  templateUrl: './cordex-mn4100.component.html',
  styleUrls: ['./cordex-mn4100.component.less']
})
export class CordexMn4100Component implements OnInit {
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
      name: 'CORDEX MN4100',
      img: 'assets/images/products/03/02/tab-mn4100.png',
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
      title: 'Mô Tả Sản Phẩm',
      img: 'assets/images/products/03/02/02/1.PNG',
      paragraphs: [
        'Được thiết kế cho ứng dụng điều khiển và tự động, MN4100 bao gồm hai loại cảm biến nhiệt '
        + 'và hình ảnh cung cấp đến 4800 điểm đo nhiệt độ với các mức cảnh báo có thể cài đặt được '
        + 'thông qua giao tiếp Modbus/TCP. Thiết bị MN4100 nhỏ gọn và dễ dàng lắp đặt bằng các đai ốc '
        + 'M6x4 trên phần thân đế phù hợp với việc gắn lắp cho các vị trí khó có thể tiền hành giám sát '
        + 'thường xuyên.',
        'Vói dải đo tiêu chuẩn từ -10 đến +120C (14 đến 248F), MN4100 là một giải pháp ít chi phí cho nhu cầu '
        + 'điều khiển tự động dựa trên nhiệt hồng ngoại. MN4100 có khả năng giao tiếp với hệ thống PLC qua '
        + 'chuẩn truyền thông Modbus/TCP nên dễ dàng tích hợp vào mạng lưới điều khiển có sẵn của bạn '
        + 'và tăng cường thêm khả năng giám sát cho hệ thống.',
        'Với hệ cảnh báo theo dạng lưới, hệ thống giao tiếp PLC và mạng cùng với phần mềm chuyên dụng MONITIR, '
        + 'thiết bị MN4100 có thể giúp bạn ngăn ngừa các tình huống mất điện hay hư hỏng thiết bị mà '
        + 'không cần phải chi trả nhiều chi phí cho các chương trình kiểm tra định kỳ.',
      ],
    },
    detail: {
      demos: {
        img: [
          'assets/images/products/03/02/02/2.png',
          'assets/images/products/03/02/02/3.png',
          'assets/images/products/03/02/02/4.jpg',
          'assets/images/products/03/02/02/5.png',
          'assets/images/products/03/02/02/6.png',
          'assets/images/products/03/02/02/7.jpg',
        ],
        video: 'assets/images/products/03/02/02/video.mp4',
      },
      documents:[
        'Product Data Sheet – MN4100',
        'Product Manual – MN4100',
      ],
    }
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
