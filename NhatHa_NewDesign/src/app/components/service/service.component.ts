import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less']
})
export class ServiceComponent implements OnInit {
  banners = [
    '/assets/images/services/banners/Montajes-Eletricos-Sevilla.JPG',
    '/assets/images/services/banners/Electrical-Contractor.JPG',
    '/assets/images/services/banners/Impianti-Elettrici.JPG',
    '/assets/images/services/banners/Machine-goes-Ping.JPG',
  ];

  services = [
    {
      link: '/dichvu/phan-tich-he-thong-dien',
      img: '/assets/images/services/6.JPG',
      title: 'Phân Tích Hệ Thống Điện',
      descriptions: [
        'Tính Toán Ngắn Mạch – Phối Hợp Bảo Vệ',
        'Phân Tích Nguy Cơ Hồ Quang Điện',
      ],
    },
    {
      link: '/dichvu/thu-nghiem-va-nghiem-thu',
      img: '/assets/images/services/7.JPG',
      title: 'Thử Nghiệm & Nghiệm Thu',
      descriptions: [
        'Thiết Bị Cao Thế, Tủ Trung Thế, Cáp Trung Thế',
        'Máy Biến Áp Lực, Tủ Phân Phối Hạ Thế',
      ],
    },
    {
      link: '/dichvu/phan-tich-chat-luong-dien-nang',
      img: '/assets/images/services/8.JPG',
      title: 'Phân Tích Chất Lượng Điện',
      descriptions: [
        'Nhấp Nháy, Sóng Hài, Dòng Khởi Động',
        'Mất Cân Bằng, Hệ Số Công Suất, Sụt Áp',
      ],
    },
    {
      link: '/dichvu/chuong-trinh-bao-tri-dien',
      img: '/assets/images/services/4.JPG',
      title: 'Bảo Trì Ngăn Ngừa',
      descriptions: [
        'Bảo Trì Cắt Điện, Xử Lý Sự Cố',
        'Phản Ứng Tình Huống Khẩn Cấp',
      ],
    },
    {
      link: '/dichvu/bao-tri-theo-tinh-trang',
      img: '/assets/images/services/5.JPG',
      title: 'Bảo Trì Theo Tình Trạng',
      descriptions: [
        'Quét Nhiệt Hồng Ngoại',
        'Đo Phóng Điện Cục Bộ',
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
