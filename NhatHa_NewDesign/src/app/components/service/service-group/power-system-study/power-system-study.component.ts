import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-power-system-study',
  templateUrl: './power-system-study.component.html',
  styleUrls: ['./power-system-study.component.less']
})
export class PowerSystemStudyComponent implements OnInit {
  service = {
    name: 'Phân tích hệ thống điện',
    data: {
      banners: [
        '/assets/images/services/01/Power System Study.jpg',
      ],
      subject: 'PHÂN TÍCH HỆ THỐNG ĐIỆN – ĐỘ TIN CẬY VÀ SỰ AN TOÀN',
      body: [
        {
          title: 'Khi Nào Bạn Cần Phân Tích Hệ Thống Điện?',
          contentType: 0,
          contents: [
            'Có khi nào bạn khởi động một động cơ làm sụp nguồn cả hệ thống? '
            + 'Không biết liệu các nhân viên có an toàn không khi thực hiện công tác trên tủ điện '
            + 'đang còn nguồn? Liệu chúng ta còn đủ nguồn cấp cho tải mới cần kết nối vào hệ thống hay không?',
            'Khi bạn bắt đầu đặt các câu hỏi như trên, chúng tôi nghĩ đó là lúc bạn cần thực hiện '
            + 'Phân tích Hệ thống Điện và dịch vụ của Nhật Hạ Electric có thể giúp bạn tìm câu trả lời.',
          ],
          figures: [],
        },
        {
          title: 'Phân Tích Hệ Thống Điện',
          contentType: 0,
          contents: [
            'Thông thường việc phân tích đánh giá hệ thống điện được tiến hành cho hệ thống mới '
            + 'bắt đầu từ khi thiết kế, sau khi thay đổi đấu nối vào lưới cung cấp nguồn và '
            + 'trước khi tiến hành các thay đổi với hệ thống điện hiện hữu. Nhật Hạ Electric có thể '
            + 'tiến hành các phân tích đánh giá phù hợp và đưa ra kết quả trong báo cáo cho khách hàng '
            + 'kèm theo khuyến cáo cho các giải pháp tối ưu hóa về độ ổn định, hiệu năng và tính năng an toàn của hệ thống.',
            'Đội ngũ kỹ sư của chúng tôi sử dụng chuyên nghiệp các phần mềm hỗ trợ phân tích đánh giá '
            + 'hệ thống điện như phần mềm Etap. Dịch vụ phân tích đánh giá của chúng tôi hỗ trợ tinh giản '
            + 'quá trình vận hành hiện tại cũng như đảm bảo khả năng nấp cấp mở rộng của khách hàng.',
          ],
          figures: [],
        },
      ],
      footer: {
        title: 'Nhật Hạ Electric có thể cung cấp các dịch vụ phân tích đánh giá hệ thống điện như sau:',
        links: [
          {
            img: '/assets/images/services/01/link-1.jpg',
            title: 'TÍNH TOÁN NGẮN MẠCH – PHỐI HỢP BẢO VỆ HỆ THỐNG',
            href: '/dich-vu/tinh-toan-ngan-mach-phoi-hop-bao-ve',
          },
          {
            img: '/assets/images/services/01/link-2.jpg',
            title: 'PHÂN TÍCH NGUY CƠ HỒ QUANG ĐIỆN',
            href: '/dich-vu/phan-tich-nguy-co-ho-quang-dien',
          },
        ],
      },
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
