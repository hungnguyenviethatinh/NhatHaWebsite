import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.less']
})
export class PartnerComponent implements OnInit {
  banners = [
    {
      img: '/assets/images/partners/Co-op.JPG',
      caption: 'Nơi Đối Tác Không Chỉ Là Bạn Hữu',
    },
  ];

  partners = [
    {
      logo: '/assets/images/abb-logo.png',
      name: 'ABB Việt Nam',
      coop: 'Đối tác: Bảo trì & Thí nghiệm, Lắp đặt thiết bị, Giải pháp Chất lượng điện năng.',
    },
    {
      logo: '/assets/images/schneider-logo.png',
      name: 'Schneider Việt Nam',
      coop: 'Đối tác: Bảo trì & Thí nghiệm, Lắp đặt thiết bị, Giải pháp Chất lượng điện năng.',
    },
    {
      logo: '/assets/images/emerson-logo.png',
      name: 'Emerson',
      coop: 'Đối tác: Giải pháp Giám sát Nhiệt độ - Độ ẩm – Phóng điện cục bộ không dây và liên tục Intellisaw cho hệ thống điện.',
    },
    {
      logo: '/assets/images/cordex-logo.png',
      name: 'CorDex',
      coop: 'Đối tác: Kính hồng ngoại, Máy chụp nhiệt hồng ngoại, Các thiết bị an toàn cao.',
    },
    {
      logo: '/assets/images/iriss-logo.png',
      name: 'IRISS',
      coop: 'Đối tác: Kính hồng ngoại, Máy đo sóng siêu âm – phóng điện Sonus, Hệ thống giám sát nhiệt Delta T, Nhãn E Sentry.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
