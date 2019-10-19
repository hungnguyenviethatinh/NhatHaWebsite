import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-vision-mission-value',
  templateUrl: './vision-mission-value.component.html',
  styleUrls: ['./vision-mission-value.component.less']
})
export class VisionMissionValueComponent implements OnInit {
  banners = [
    'assets/images/company/vison-mission-value/banners/1.PNG',
  ];

  visions = [
    {
      img: 'assets/images/company/vison-mission-value/vision/1.JPEG',
      contents: [
        'Trở thành một công ty hàng đầu trong lĩnh vực Cung ứng thiết bị - Thi công - Bảo trì - Giải pháp cho ngành Điện.',
        'Liên tục áp dụng các công nghệ hiện đại kết hợp với các giá trị truyền thống nhằm nâng cao độ ổn định hệ thống và '
        + 'các lợi ích kinh tế của khách hàng.',
      ],
    },
  ];

  missions = [
    {
      img: 'assets/images/company/vison-mission-value/mission/1.JPG',
      contents: [
        'Trở thành một đối tác tin cậy trong lĩnh vực Cung ứng thiết bị - Thi công - Bảo trì - Giải pháp cho ngành Điện.',
        'Định hướng và thay đổi nhận thức của khách hàng và thị trường trong việc ứng dụng công nghệ nhằm giảm thiểu '
        + 'rủi ro và gia tăng lợi ích cho khách hàng.',
      ],
    },
    {
      img: 'assets/images/company/vison-mission-value/mission/2.JPG',
      contents: [
        'Cung cấp các giải pháp công nghệ vượt trội nhằm nâng cao hiệu năng kinh doanh đồng thời giảm thiểu năng lượng '
        + 'sử dụng và thân thiện hơn môi trường.',
      ],
    },
    {
      img: 'assets/images/company/vison-mission-value/mission/3.JPG',
      contents: [
        'Thiết lập một môi trường làm việc năng động trong đó mọi người có cơ hội phát triển đầy đủ tiềm năng và '
        + 'chủ động xây dựng sự nghiệp chuyên môn.',
      ],
    },
  ];

  values = [
    {
      img: 'assets/images/company/vison-mission-value/value/1.JPG',
      contents: [
        'Trong mọi trường hợp, sự an toàn của nhân viên, khách hàng và mọi người xung quanh là nền tảng trong '
        + 'suy nghĩ và cân nhắc hành động của chúng tôi.',
      ],
    },
    {
      img: 'assets/images/company/vison-mission-value/value/2.JPG',
      contents: [
        'Trong triết lý kinh doanh của chúng tôi, không có chỗ cho sự thỏa hiệp về chất lượng. Chất lượng '
        + 'luôn là ưu tiên hàng đầu từ lúc lập kế hoạch cho đến triển khai công việc.',
      ],
    },
    {
      img: 'assets/images/company/vison-mission-value/value/3.JPG',
      contents: [
        'Với chúng tôi, mọi việc đều được xây dựng gắn liền với các chuẩn mực của sự trung thực, kính trọng và chuyên nghiệp.',
      ],
    },
    {
      img: 'assets/images/company/vison-mission-value/value/4.JPG',
      contents: [
        'Cam kết luôn luôn thấu hiểu và nỗ lực không ngừng cung cấp các giá trị tốt nhất cho khách hàng.',
      ],
    },
    {
      img: 'assets/images/company/vison-mission-value/value/5.JPG',
      contents: [
        'Cam kết luôn luôn thấu hiểu và nỗ lực không ngừng cung cấp các giá trị tốt nhất cho khách hàng.',
      ],
    },
    {
      img: 'assets/images/company/vison-mission-value/value/6.JPG',
      contents: [
        'Cam kết luôn luôn thấu hiểu và nỗ lực không ngừng cung cấp các giá trị tốt nhất cho khách hàng.',
      ],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
