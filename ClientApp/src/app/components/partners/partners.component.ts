import { Component, OnInit } from '@angular/core';
import Parner from 'src/app/models/Parner';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  Parners: Parner[] = [];
  constructor() {
    this.Parners.push(new Parner("ABB Việt Nam",
    "Đối tác: Bảo trì & Thí nghiệm, Lắp đặt thiết bị, Giải pháp Chất lượng điện năng",
    "assets/images/abb-logo.png"));
    this.Parners.push(new Parner("Schneider Việt Nam",
    "Đối tác: Bảo trì & Thí nghiệm, Lắp đặt thiết bị, Giải pháp Chất lượng điện năng",
    "assets/images/schneider-logo.png"));
    this.Parners.push(new Parner("Emerson",
    "Đối tác: Giải pháp Giám sát Nhiệt độ - Độ ẩm – Phóng điện cục bộ không dây và liên tục Intellisaw cho hệ thống điện",
    "assets/images/emerson-logo.png"));
    this.Parners.push(new Parner("CorDEX",
    "Đối tác: Kính hồng ngoại, Máy chụp nhiệt hồng ngoại, Các thiết bị an toàn cao",
    "assets/images/cordex-logo.png"));
    this.Parners.push(new Parner("IRISS",
    "Đối tác: Kính hồng ngoại, Máy đo sóng siêu âm – phóng điện Sonus, Hệ thống giám sát nhiệt Delta T, Nhãn E Sentry",
    "assets/images/iriss-logo.png"));
  }

  ngOnInit() {
  }

}
