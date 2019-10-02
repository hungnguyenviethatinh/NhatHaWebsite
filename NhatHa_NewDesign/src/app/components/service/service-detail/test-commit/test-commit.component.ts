import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-test-commit',
  templateUrl: './test-commit.component.html',
  styleUrls: ['./test-commit.component.less']
})
export class TestCommitComponent implements OnInit {
  service = {
    heading: {
      img: '/assets/images/services/02/1.jpg',
      title: 'THỬ NGHIỆM VÀ NGHIỆM THU',
    },
    contents: [
      {
        img: [
          '/assets/images/services/02/2.JPG',
          '/assets/images/services/02/3.JPG',
          '/assets/images/services/02/4.jpg',
        ],
        title: 'I. THỬ NGHIỆM VÀ NGHIỆM THU TỐT GIÚP BẠN TIẾT KIỆM HÀNG NGHÌN ĐÔ-LA CHI PHÍ',
        paragraphs: [
          {
            type: 'p',
            contents:
            [
                'Gần 70% số lượng thiết bị bị hư hỏng sớm đều bắt nguồn từ các khiếm khuyết '
              + 'ở các khâu thiết kế, lắp đặt hay chạy thử nghiệm. Tương tự, các nhà máy mới đi vào vận hành '
              + 'thường xảy ra các tình huống mất điện bất cập do các thiết bị bảo vệ hoạt động không chính xác '
              + 'và thiếu phối hợp đồng bộ, đấu nối bị sai, các thiếu sót trong thiết kế, v.v… '
              + 'Trong một số trường hợp, các hư hỏng không diễn ra ngay mà sau nhiều tháng cơ sở đã đi vào '
              + 'vận hành một thời gian và đã thiết bị đã hết hạn bảo hành. Tình trạng lỏng kết nối hay hư hỏng '
              + 'cách điện sẽ không xảy ra cho đến khi có nhiều thiết bị cùng hoạt động và tải thực tế tăng lên.',
              'Việc quyết định cắt giảm thử nghiệm vận hành thiết bị mới (thường chỉ giúp tiết kiệm '
              + 'một ít chi phí) có thể dẫn đến những hậu quả khó lường. Hệ thống tủ điện, máy biến áp hay '
              + 'các thiết bị ở tình trạng hoàn hảo có thể bị cháy nổ chỉ vì một chút sai sót trong quá trình lắp đặt.',
              'Các công ty bảo hiểm có thể yêu cầu các dịch vụ thử nghiệm nghiệm thu chuyên nghiệp '
              + 'nhằm đảm bảo việc tuân thủ các quy định và đáp ứng các nhu cầu sử dụng của các thiết bị điện mới '
              + 'trước khi đóng điện và đưa vào vận hành. Trong các trường hợp xảy ra sự cố, công ty của bạn '
              + 'đối diện với việc mất một khoản đền bù lớn từ bảo hiểm nếu không thể cung cấp được các bằng chứng cụ '
              + 'thể của việc đã thực hiện các kiểm tra trước đó theo quy định.',
              'Nghiệm thu đóng góp vai trò quan trọng trong việc xây dựng và duy trì chương trình bảo trì. '
              + 'Đó là cơ sở giúp bạn tự tin rằng các thiết bị đang hoạt động một cách an toàn và bình thường, '
              + 'bên cạnh đó nghiệm thu tốt cũng giúp bạn tránh được tình trạng ngưng trệ do lỗi thiết bị. '
              + 'Các thử nghiệm được thực hiện khi nghiệm thu ví dụ như việc thử nghiệm máy biến áp sẽ cung cấp '
              + 'các giá trị nền tảng ban đầu dùng để tham chiếu trong các chương trình bảo trì dài hạn về sau.',
            ],
          },
        ],
      },
      {
        img: [
          '/assets/images/services/02/5.JPG',
          '/assets/images/services/02/6.jpg',
          '/assets/images/services/02/7.JPG',
        ],
        title: 'II. CHÚNG TÔI THỰC HIỆN DỊCH VỤ THỬ NGHIỆM VÀ NGHIỆM THU NHƯ THẾ NÀO?',
        paragraphs: [
          {
            type: 'p',
            contents:
            [
                'Đội ngũ Kỹ Thuật chuyên Thử nghiệm - Nghiệm thu cho hệ thống phân phối điện sẽ giúp '
              + 'xác định tình trạng các thiết bị có được lắp đặt đúng theo tiêu chuẩn hay không. '
              + 'Đội ngũ chúng tôi có thể giúp phát hiện các hư hỏng xảy ra trong quá trình vận chuyển hay lắp đặt '
              + 'nhằm đảm bảo thiết bị của khách hàng đáp ứng đầy đủ các tiêu chí kỹ thuật và yêu cầu thiết kế ban đầu.',
              'Sử dụng dịch vụ Thử nghiệm – Nghiệm thu của Nhat Ha Electric sẽ đảm bảo các thiết bị mới của khách hàng'
              + ' được tích hợp và vận hành hiệu quả. Thực hiện tốt công tác nghiệm thu dự án mang lại nhiều lợi ích cho khách hàng '
              + 'từ việc giảm chi phí lắp đặt, giảm các phát sinh, rút ngắn thời gian chờ đợi, giảm chi phí bảo trì và '
              + 'vận hành cũng như giảm chi phí tiền sử dụng điện.',
              'Đội ngũ kỹ sư và kỹ thuật viên của chúng tôi được huấn luyện đầy đủ các phương pháp '
              + 'lắp đặt và thử nghiệm cho nhiều loại thiết bị của các hãng khác nhau. '
              + 'Kỹ sư của chúng tôi tuân thủ nghiêm ngặt các quy trình và phương pháp thử nghiệm để kiểm tra '
              + 'các đặc tính kỹ thuật của thiết bị. Quy trình thử nghiệm và nghiệm thu của chúng tôi được '
              + 'xây dựng và tuân thủ nguyên tắc của Hiệp hội Thí nghiệm Điện Quốc tế (NETA), '
              + 'Ủy ban Kỹ thuật Điện Quốc tế (IEC), Viện Kỹ nghệ Điện và Điện tử (IEEE) cũng như bộ Tiêu chuẩn Việt Nam (TCVN).',
              'Dịch vụ Thử nghiệm – Nghiệm thu của chúng tôi bao gồm:',
              ],
          },
          {
            type: 'li',
            contents: [
              'Xây dựng bảng kế hoạch nghiệm thu',
              'Kiểm tra thiết kế của dự án',
              'Thực hiện các thử nghiệm và kiểm định',
              'Kiểm tra việc lắp đặt thiết bị đúng theo tiêu chuẩn',
              'Kiểm tra quy trình vận hành thiết bị hợp lý',
              'Xây dựng hệ thống và phương án an toàn',
              'Đóng điện chạy thử nghiệm cho hệ thống',
              'Đề xuất xây dựng chương trình bảo trì tổng thể',
              'Huấn luyện nhân viên của khách hàng vận hành an toàn các thiết bị mới',
            ],
          },
        ],
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
