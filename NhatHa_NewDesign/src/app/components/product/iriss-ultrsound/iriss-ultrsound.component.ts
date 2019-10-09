import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-iriss-ultrsound',
  templateUrl: './iriss-ultrsound.component.html',
  styleUrls: ['./iriss-ultrsound.component.less']
})
export class IrissUltrsoundComponent implements OnInit {
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
      img: '/assets/images/products/02/02/tab-home.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #096dd9'
      },
      click: () => { this.router.navigate(['/san-pham/may-do-tinh-trang-thiet-bi']); },
    },
    {
      name: 'IRISS SONUS XT',
      img: '/assets/images/products/02/02/tab-1.jpg',
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
        const section = document.getElementById('iriss-feature');
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
        const section = document.getElementById('iriss-certificate');
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
        const section = document.getElementById('iriss-demo');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
    {
      id: 3,
      active: false,
      name: 'TÀI LIỆU',
      style: { ...this.style },
      click: () => {
        const section = document.getElementById('iriss-document');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
  ];

  content = {
    cover: {
      left: [
        [
          'Linh Hoạt và Chắc Chắn',
          'Sản phẩm dễ sử dụng với khả năng chuyển đổi sóng siêu âm '
          + 'thành sóng âm nghe được và hiển thị cường độ tức thời cũng như cực đại ở dạng deciben.',
        ],
        [
          'Không Yêu Cầu Huấn Luyện Đặc Biệt',
          'Không cần nhiều huấn luyện đặc biệt bạn vẫn có thể bắt đầu chương trình bảo trì chẩn đoán sử dụng sóng siêu âm.',
        ],
        [
          'Phát Hiện Sớm',
          'Phát hiện từ sớm các dấu hiệu cảnh bảo sự cố liên quan đến điện và cơ khí trước khi các hư hỏng có thể xảy ra.',
        ],
      ],
      center: '/assets/images/products/02/02/1.png',
      right: [
        [
          'Tiết Kiệm Tuyệt Vời',
          'Phát hiện rò rỉ và tiết kiệm chi phí sử dụng năng lượng: tìm và sửa chữa các điểm rò rỉ khí nén '
          + 'có thể giúp tiết kiệm 30% chi phí sử dụng năng lượng của bạn.',
        ],
        [
          'Tương Thích',
          'Tai nghe với kiểu đeo sau gáy  có chất lượng tốt hoàn toàn tương thích với việc sử dụng nón bảo hộ đồng thời.',
        ],
        [
          'Tinh Giản Kế Hoạch Bảo Trì',
          'Ghi nhận các giá trị nền tảng và biểu diễn tình trạng theo thời gian của các thiết bị cơ khí giúp tinh giản kế hoạch bảo trì.',
        ],
      ],
    },
    detail: {
      demos: {
        img: [
          '/assets/images/products/02/02/2.jpg',
          '/assets/images/products/02/02/3.jpg',
          '/assets/images/products/02/02/4.jpg',
          '/assets/images/products/02/02/5.jpg',
          '/assets/images/products/02/02/6.jpeg',
          '/assets/images/products/02/02/7.jpeg',
          '/assets/images/products/02/02/8.jpg',
          '/assets/images/products/02/02/9.jpeg',
          '/assets/images/products/02/02/10.jpg',
          '/assets/images/products/02/02/11.jpg',
          '/assets/images/products/02/02/12.jpg',
          '/assets/images/products/02/02/13.jpg',
          '/assets/images/products/02/02/14.jpg',
        ],
        video: '/assets/images/products/02/02/video.3gp',
      },
      documents: [
        'Product Data Sheet – Sonus XT',
        'Product Specification Sheet – Sonus XT',
        'Product Installation Guide – Sonus XT',
      ],
    }
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
