import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-opd-test',
  templateUrl: './opd-test.component.html',
  styleUrls: ['./opd-test.component.less']
})
export class OpdTestComponent implements OnInit {
  service = {
    heading: {
      img: '/assets/images/services/05/02/1.JPG',
      title: 'ĐO PHÓNG ĐIỆN CỤC BỘ',
    },
    contents: [
      {
        img: [
          '/assets/images/services/05/02/2.JPG',
          '/assets/images/services/05/02/3.jpg',
          '/assets/images/services/05/02/4.jpg',
        ],
        title: 'I. PHÓNG ĐIỆN CỤC BỘ LÀ GÌ?',
        paragraphs: [
          {
            type: 'p',
            texts: [
              'Phóng điện cục bộ là hiện tượng điện áp đánh thủng cục bộ tại một vị trí trong lòng vật liệu cách điện '
              + 'xảy ra giữa hai điện cực. Hiện tượng phóng điện có thể xảy ra ở bất cứ vị trí nào bên trong vật liệu '
              + 'cách điện tại nơi mà điện trường lớn hơn mức chịu đựng điện áp của phần vật liệu tại vị trí đó. '
              + 'Sự phóng điện làm suy giảm khả năng cách điện và dẫn đến sự cố khi cách điện bị phá hỏng hoàn toàn.',
              'Theo thống kê trong NFPA 70B của Hiệp hội Phòng cháy Chữa cháy Quốc gia Hoa Kỳ, nguyên nhân hư hỏng '
              + 'chính trong hệ thống điện là cách điện bị đánh thủng. Luật Điện Quốc gia Hoa Kỳ (NEC) nêu ra rằng '
              + 'phóng điện cục bộ chính là dấu hiệu đầu tiên của suy giảm cách điện. Bảng 36 trong IEEE Gold Book '
              + 'chỉ ra rằng cáp điện, tủ điện và máy biến áp chịu tác động lớn nhất khi hư hỏng cách điện.',
              'Các dạng khác nhau của phóng điện cục bộ:',
            ],
          },
          {
            type: 'img',
            img: '/assets/images/services/05/02/p1.jpg',
          },
        ],
      },
      {
        img: [
          '/assets/images/services/05/02/5.JPG',
          '/assets/images/services/05/02/6.gif',
          '/assets/images/services/05/02/7.jpg',
          '/assets/images/services/05/02/8.jpg',
          '/assets/images/services/05/02/9.jpg',
        ],
        title: 'II. GIẢI PHÁP PHỨC HỢP KIỂM TRA PHÓNG ĐIỆN CỤC BỘ',
        paragraphs: [
          {
            type: 'p',
            texts: [
              'Nhật Hạ Electric có thể cung cấp dịch vụ đo phóng điện cục bộ theo định kỳ hoặc liên tục cho hệ thống điện. '
              + 'Tùy theo tình trạng hoạt động thực tế của thiết bị, chúng tôi có thể xây dựng một chương trình phù hợp '
              + 'với nhu cầu của khách hàng. Chúng tôi tiến hành theo các bước sau:',
            ],
          },
          {
            type: 'blue',
            text: 'Bước 1 – Xác định',
          },
          {
            type: 'p',
            texts: [
              'Đội ngũ của chúng tôi tiến hành đo định kỳ sử dụng một thiết bị đo cầm tay với các cảm biến phù hợp. '
              + 'Với thiết bị này, chúng tôi có thể tiến hành kiểm tra sơ bộ để xác định các đối tượng quan trọng cần '
              + 'được kiểm tra kỹ. Thông thường, chỉ khoảng 5% đến 10% số lượng thiết bị Trung thế và Cao thế sẽ có mức '
              + 'phóng điện cục bộ đáng kể. Bước kiểm tra sơ bộ này giúp cung cấp thông tin cần thiết để xây dựng '
              + 'kế hoạch kiểm tra tổng quan nhằm tập trung phù hợp với các thiết bị thật sự cần quan tâm giúp giảm thiểu '
              + 'các chi phí không cần thiết.',
              'Sau khi các đối tượng đã được đánh giá mức độ ưu tiên, kỹ sư của chúng tối tiến hành đo phóng điện cục bộ '
              + 'bằng cách sử dụng các cảm biến được kiểm định đầy đủ bao gồm cảm biến Sóng Siêu Cao Tần (UHF), '
              + 'Biến Dòng Cao Tần (HFCT) cảm biến Điện Từ Trường (TEV), cảm biến Sóng Siêu Âm (EA). Các loại cảm biến này '
              + 'sẽ ứng dụng các kiểu cảm ứng điện dung, điện cảm, cảm ứng âm thanh trên các đối tượng cần đo mà không '
              + 'phải tắt điện. Bằng cách đồng bộ tín hiệu phóng điện cục bộ và chu kỳ tần số dòng điện và sử dụng '
              + 'phần mềm phân tích chuyên dụng, kỹ sư đo lường có thể quan sát được các định dạng phóng điện theo pha. '
              + 'Điều này giúp cho việc xác định được kiểu phóng điện và đánh giá mức độ nghiêm trọng của tình huống.',
            ],
          },
          {
            type: 'yellow',
            text: 'Bước 2 – Định vị',
          },
          {
            type: 'p',
            texts: [
              'Ở bước này chúng tôi thường sử dụng máy đo đa kênh có thể lấy đồng thời dữ liệu của 4 hoặc nhiều kênh '
              + 'cùng lúc. Công nghệ này cho phép chúng tôi thu thập thêm nhiều chi tiết về hiện tượn phóng điện khi '
              + 'dữ liệu được thu thập từ 3 pha đồng thời. Việc này giúp xác định được kiểu dạng phóng điện xảy ra giữa '
              + 'pha với pha hay pha với đất. Nếu hiện tượng phóng điện được xác định rõ, các phép thử nghiệm chi tiết '
              + 'hơn sẽ giúp định vị rõ ràng điểm nguồn của hiện tượng phóng điện trong đối tượng đang đo.',
            ],
          },
          {
            type: 'orange',
            text: 'Bước 3 – Giám sát',
          },
          {
            type: 'p',
            texts: [
              'Đôi khi, bạn cần phải tiến hành giám sát liên tục trong một giai đoạn ngắn. '
              + 'Chúng tôi có thể cài đặt một thiết bị đo nhằm giám sát trong thời gian một giờ đồng hồ '
              + 'cho đến vài tháng. Thông qua việc liên tục giám sát, đội ngũ chúng tôi sẽ nắm được '
              + 'biểu hiện trạng thái thay đổi theo thời gian để có thể đưa ra nhận định và khuyến cáo chính xác. '
              + 'Giải pháp này mang lại lợi ích lớn nhất giống như lắp đặt tại chỗ một hệ thống giám sát với '
              + 'chi phí thấp hơn và có thể chuyển đổi tuần tự giữa nhiều trạm khác nhau.',
            ],
          },
          {
            type: 'red',
            text: 'Bước 4 – Quản lý',
          },
          {
            type: 'p',
            texts: [
              'Hệ thống giám sát phóng điện cục bộ liên tục của chúng tôi có thể đưa ra các cảnh báo sớm đối với các '
              + 'hư hỏng cách điện có thể dẫn đến sự cố trong hệ thống Cao thế, đặc biệt là cho các thiết bị quan trọng '
              + 'ở giai đoạn cuối của vòng đời. Hệ thống giám sát liên tục có thể phát hiện ra các thay đổi trong '
              + 'vận hành và điều kiện môi trường ảnh hưởng đến hoạt động phóng điện để đưa ra các cảnh báo tốt nhất '
              + 'cho hệ thống. Các cảnh báo sớm này là cần thiết nhằm đảm bảo có đủ thời gian lên kế hoạch cho công tác '
              + 'bảo trì với chi phí thấp nhất và phù hợp nhất với hoàn cảnh nhằm ngăn ngừa các hư hỏng và mất điện rất tốn kém xảy ra.',
            ],
          },
        ],
      },
      {
        img: [
          '/assets/images/services/05/02/10.jpg',
          '/assets/images/services/05/02/11.jpg',
        ],
        title: 'III. TẠI SAO DỊCH VỤ CỦA CHÚNG TÔI LẠI KHÁC BIỆT?',
        paragraphs: [
          {
            type: 'li-number',
            texts: [
              'Kỹ sư của chúng tôi được đào tạo (tiêu chuẩn quốc tế Cấp độ 1 và 2) và sử dụng thiết bị được hiệu chuẩn '
              + 'khi thực hiện. Chúng tôi không bao giờ thỏa hiệp về vấn đề chất lượng. Đội ngũ kỹ sư chúng tôi giàu '
              + 'kiến thức và kinh nghiệm thực tế trong việc phát hiện và phân tích phóng điện cục bộ. '
              + 'Chúng tôi đã xây dựng ra một thư viện các tình huống nghiên cứu làm tư liệu tham khảo và áp dụng '
              + 'chuẩn mực cho nhiều khách hàng.',
              'Chúng tôi là một nhóm tập trung vào kỹ thuật và công nghệ hơn là cố gắng phát triển thương hiệu '
              + 'hay nhà sản xuất, vì vậy chúng tôi sử dụng đa nền tảng và kết hợp nhiều kỹ '
              + 'thuật khác nhau trong công việc. Các thiết bị đo và giải pháp của chúng tôi đến từ các nhà '
              + 'sản xuất khác nhau như EA Technology, UE Systems, HVPD, PMDT và Emerson. '
              + 'Chúng tôi kết hợp nhiều phương pháp và cảm biến khác nhau để kiểm chứng cho kết quả đo được.',
              'Chúng tôi là nhóm duy nhất có thể thực hiện việc chẩn đoán cũng như sửa chữa cùng một lúc. '
              + 'Nền tảng vững chắc của chúng tôi sau nhiều năm thực hiện công tác bảo trì ngăn ngừa và '
              + 'sửa chữa giúp chúng tôi có những kiến thức để có thể tự tin đưa ra những giải pháp hiệu quả cho vấn đề. '
              + 'Nếu cáp Trung thế của bạn có vấn đề, chúng tôi có nhân viên chuyên làm đầu cáp để thay thế hoặc nếu '
              + 'cách điện của sứ đỡ của bạn bị suy giảm, đội ngũ bảo trì của chúng tôi sẽ xử lý tăng cường với epoxy '
              + 'cách điện. Như đã hứa, chúng tôi phát hiện vấn đề, chúng tôi xử lý và chúng tôi sẽ kiểm tra lại để '
              + 'đảm bảo đã giải quyết một cách hiệu quả.',
            ],
          },
        ],
      },
    ],
  };

  constructor() { }

  ngOnInit() {
  }

}
