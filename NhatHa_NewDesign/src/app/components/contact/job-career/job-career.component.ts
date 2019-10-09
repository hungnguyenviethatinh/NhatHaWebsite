import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-job-career',
  templateUrl: './job-career.component.html',
  styleUrls: ['./job-career.component.less']
})
export class JobCareerComponent implements OnInit {
  bannerjobs = [
    {
      img: '../../../../assets/images/job-career/job-career.PNG',
      caption: 'Tuyển Dụng: Kỹ Sư có Thái Độ và Đam Mê',
    },
  ];

  hr = {
    img: '../../../../assets/images/job-career/candidate.PNG',
    poster: {
      title: 'CHÚNG TÔI TỰ HÀO PHÁT TRIỂN SỰ NGHIỆP CỦA BẠN',
      contents: [
        'Tại Nhật Hạ, các thành viên được đối xử như một gia đình '
        + 'vì đội ngũ vững mạnh là nền tảng của sự thành công. '
        + 'Chúng tôi mong muốn xây dựng một môi trường làm việc trên nền tảng sự tin tưởng, tin cậy và hỗ trợ nhau.',
        'Chúng tôi luôn tự hào khi trao cơ hội cho các kỹ sư trẻ ngành Điện – Tự Động Hóa với 1 – 2 năm kinh nghiệm.',
        'Nếu bạn đang tìm kiếm cơ hội, theo đuổi đam mê và xây dựng một sự nghiệp bền vững, hãy đồng hành cùng Nhật Hạ.',
      ],
    },
  };
  constructor() { }

  ngOnInit() {
  }

}
