import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-infrared-window',
  templateUrl: './infrared-window.component.html',
  styleUrls: ['./infrared-window.component.less']
})
export class InfraredWindowComponent implements OnInit {
  products = [
    {
      href: '/san-pham/san-pham-iriss',
      name: 'Cửa sổ hồng ngoại Iriss',
      img: [
        'assets/images/products/01/1.jpg',
      ],
      description: 'Cửa sổ hồng ngoại của IRISS là thiết bị đặc biệt được cấu tạo bằng tấm phim polyme hồng ngoại '
      + 'cho phép truyền dẫn phần lớn sóng hồng ngoại mà không bị thất thoát. Cửa sổ hồng ngoại dạng polyme bền bỉ '
      + 'và duy trì độ truyền dẫn cố định và ổn định qua thời gian. '
      + 'Sau cùng, các sản phẩm cửa sổ của IRISS được bảo hành trọn đời cho các lỗi sản phẩm.',
    },
    {
      href: '/san-pham/cua-so-hong-ngoai-cordex',
      name: 'Của sổ hồng ngoại Cordex',
      img: [
        'assets/images/products/01/2.png',
        'assets/images/products/01/3.jpg',
      ],
      description: 'Hãy bảo vệ thiết bị, nhà máy và nhân viên của bạn bằng cách sử dụng sản phẩm mới nhất là '
      + 'cửa sổ hồng ngoại thông minh của CorDEX Instruments. Dòng cửa sổ hồng ngoại IW có thể hoạt động với '
      + 'bất cứ máy chụp hình nhiệt nào, hỗ trợ công tác kiểm tra và bảo trì chẩn đoán tiến hành một cách an toàn, hiệu quả và chính xác.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
