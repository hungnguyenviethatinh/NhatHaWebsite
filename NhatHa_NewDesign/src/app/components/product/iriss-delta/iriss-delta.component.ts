import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-iriss-delta',
  templateUrl: './iriss-delta.component.html',
  styleUrls: ['./iriss-delta.component.less']
})
export class IrissDeltaComponent implements OnInit {
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
      img: 'assets/images/products/03/03/tab-home.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #4472c4'
      },
      click: () => { this.router.navigate(['/san-pham/giai-phap-giam-sat-lien-tuc']); },
    },
    {
      name: 'IRISS DELTA T ALERT',
      img: 'assets/images/products/03/03/tab-1.jpg',
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
        const section = document.getElementById('delta-t-feature');
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
        const section = document.getElementById('delta-t-certificate');
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
        const section = document.getElementById('delta-t-demo');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
    {
      id: 3,
      active: false,
      name: 'TÀI LIỆU',
      style: { ...this.style },
      click: () => {
        const section = document.getElementById('delta-t-document');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
  ];

  content = {
    page1: {
      left: [
        [
          'Cấp Nguồn Pin',
          'Bộ cảm biến nhiệt Delta T Alert™ sử dụng nguồn từ pin AA để giảm việc kết nối dây đến '
          + 'các thiết bị đo. Nguồn pin có thể dùng được trong phạm vi 18-24 tháng và có thể dùng '
          + 'đến 36 tháng tùy vào cấu hình cũng như môi trường hoạt động.',
        ],
        [
          'Không dây',
          'Hệ thống Delta T Alert™ sử dụng công nghệ Z-WaveTM giao tiếp không dây giữa nhiều '
          + 'thiết bị khác nhau để giảm việc kéo dây kết nối tín hiệu.',
        ],
        [
          'Dễ Lắp Đặt',
          'Bộ cảm biến nhiệt The Delta T Alert™ có kích thước nhỏ nên có thể lắp đặt dễ dàng ở bất cứ đâu. Sử dụng nam châm nên '
          + 'thiết bị có thể gắn lên bất cứ bề mặt tủ kim loại nào (khuyến cáo nên sử dụng đai ốc được gửi kèm theo để kết nối.',
        ],
        [
          'Báo Động Trường Hợp Khẩn Cấp',
          'Hệ thống Delta T Alert™ sẽ cảnh báo bạn khi nhiệt độ thiết bị vượt ngưỡng cài đặt trước.',
        ],
      ],
      center: 'assets/images/products/03/03/2.jpg',
      right: [
        [
          'Cảm Biến Nhiệt Độ ',
          'Cảm biến nhiệt độ Delta T Alert™ được cấp bằng sáng chế bao gồm hai cảm biến nhiệt độ - '
          + 'một cảm biến dùng để giám sát nhiệt độ bên trong vỏ thiết bị trong khi cảm biến còn '
          + 'lại giám sát nhiệt độ môi trường xung quanh nơi đặt thiết bị.',
        ],
        [
          'Báo Cáo',
          'Hệ thống Delta T Alert™ lưu trữ toàn bộ dữ liệu nhiệt độ lịch sử dễ dàng cho việc '
          + 'báo cáo cũng như phân tích các chuyển đổi nhiệt theo thời gian.',
        ],
        [
          'Tần Suất Ghi Nhận',
          'Bạn có thể dễ dàng lập trình hệ thống Delta T Alert™ tự động ghi nhận tối đa 8 giá trị nhiệt độ mỗi ngày.',
        ],
        [
          'Hộp Bảo Vệ  Tác Động Môi Trường (Tùy Chọn)',
          'Phiên bản được lắp trong hộp bảo vệ tác động môi trường cho phép thiết bị được lắp đặt ngoài trời.',
        ],
      ],
    },
    detail: {
      demos: {
        img: [
          'assets/images/products/03/03/3.jpg',
          'assets/images/products/03/03/4.jpg',
          'assets/images/products/03/03/5.jpg',
          'assets/images/products/03/03/6.png',
          'assets/images/products/03/03/7.jpg',
          'assets/images/products/03/03/8.jpg',
          'assets/images/products/03/03/9.jpg',
          'assets/images/products/03/03/10.jpg',
          'assets/images/products/03/03/11.png',
          'assets/images/products/03/03/12.jpg',
          'assets/images/products/03/03/13.jpg',
        ],
        video: 'assets/images/products/03/03/video.mp4',
      },
      documents: [
        'Product Data Sheet – Delta T Alert',
        'Product Specification Sheet – Delta T Alert',
        'Product Installation Guide – Delta T Alert',
      ],
    }
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
