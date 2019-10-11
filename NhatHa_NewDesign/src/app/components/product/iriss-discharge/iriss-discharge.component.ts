import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-iriss-discharge',
  templateUrl: './iriss-discharge.component.html',
  styleUrls: ['./iriss-discharge.component.less']
})
export class IrissDischargeComponent implements OnInit {
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
      img: '/assets/images/products/02/03/tab-home.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #096dd9'
      },
      click: () => { this.router.navigate(['/san-pham/may-do-tinh-trang-thiet-bi']); },
    },
    {
      name: 'IRISS SONUS PD',
      img: '/assets/images/products/02/03/tab-1.jpg',
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
          'Kết Hợp TEV và AE Trong Cùng Một Thiết Bị',
          'Tính năng của cảm biến điện từ trường [TEV] phát hiện hiệu quả trong việc phát hiện hiện tượng '
          + 'phóng điện cục bộ gây ra do các lỗ trống trong lòng vật liệu cách điện. Trong khi đó, '
          + 'sóng siêu âm (AE) dễ dàng phát hiện phóng điện vầng quang, dạng đường dẫn hoặc phóng trực tiếp '
          + 'trên bề mặt cũng như tình trạng lỏng kết nối cơ khí trong tủ điện.',
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
      center: '/assets/images/products/02/03/1.png',
      right: [
        [
          'Kết Nối Đồng Bộ Dữ Liệu',
          'Dữ liệu có thể được đồng bộ về trạm trung tâm hoặc trên từng thiết bị đơn.',
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
          '/assets/images/products/02/03/2.jpg',
          '/assets/images/products/02/03/3.jpg',
          '/assets/images/products/02/03/4.jpg',
          '/assets/images/products/02/03/5.jpg',
          '/assets/images/products/02/03/6.jpg',
          '/assets/images/products/02/03/7.jpg',
        ],
        video: '/assets/images/products/02/03/video.mp4',
      },
      documents: [
        'Product Data Sheet – Sonus PD',
        'Product Specification Sheet – Sonus PD',
        'Product Installation Guide – Sonus PD',
      ],
    }
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
