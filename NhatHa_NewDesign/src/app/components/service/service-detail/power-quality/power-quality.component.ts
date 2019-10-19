import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-power-quality',
  templateUrl: './power-quality.component.html',
  styleUrls: ['./power-quality.component.less']
})
export class PowerQualityComponent implements OnInit {
  service = {
    heading: {
      img: 'assets/images/services/03/1.jpg',
      title: 'PHÂN TÍCH CHẤT LƯỢNG ĐIỆN NĂNG',
    },
    contents: [
      {
        img: [
          'assets/images/services/03/2.JPG',
          'assets/images/services/03/3.jpg',
        ],
        title: 'I. CHẤT LƯỢNG ĐIỆN NĂNG CÓ QUAN TRỌNG KHÔNG?',
        paragraphs: [
          {
            type: 'p',
            texts: [
              'Khi khoa học công nghệ phát triển, các thiết bị sử dụng điện chuyển hóa từ các loại tải đơn giản '
              + '(đèn sợi tóc, động cơ, rơ-le, điện trở sấy, v.v…) sang các loại tải phức hợp hơn với nhiều thành phần '
              + 'điện tử bên trong (đèn huỳnh quang sử dụng chấn lưu tiết kiệm điện, động cơ với các bộ điều khiển '
              + 'khởi động, máy tính cá nhân và các vật dụng gia đình). Dòng điện cung cấp cho các thiết bị hiện đại này '
              + 'có tính chất khác biệt gây ra nhiều vấn đề khác nhau cho hệ thống lưới cung cấp điện.',
              'Phần lớn các vấn đề liên quan đến chất lượng điện năng gây ra các sự cố trong vận hành, mất an toàn và quá nhiệt. '
              + 'Cụ thể hơn, hệ thống phân phối điện bị tác động bởi sóng hài có thể dẫn đến:',
            ],
          },
          {
            type: 'li',
            texts: [
              'Quá áp / quá dòng trong hệ thống phân phối',
              'Tình trạng quá nhiệt ở thiết bị',
              'Mất điện thường xuyên',
              'Rối loạn các chức năng điều khiển tự động',
              'Hư hỏng đối với tụ bù',
              'Sai lệch các thiết bị đo lường',
              'Gây nhiễu ảnh hưởng hệ thống truyền thông giao tiếp',
            ],
          },
        ],
      },
      {
        img: [
          'assets/images/services/03/4.jpg',
          'assets/images/services/03/5.JPG',
          'assets/images/services/03/6.jpg',
          'assets/images/services/03/7.jpg',
          'assets/images/services/03/8.png',
        ],
        title: 'II. CHẤT LƯỢNG ĐIỆN NĂNG LÀ GÌ?',
        paragraphs: [
          {
            type: 'p',
            texts: [
              'Chất lượng điện năng bao gồm các thông số đo phức hợp ở nhiều phương diện khác nhau của dòng điện, '
              + 'đặc biệt ứng dụng nguồn điện xoay chiều. Các thông số này bao gồm cường độ của điện áp, dòng điện, '
              + 'hệ số công suất và tần số. Nó cũng bao gồm việc các thông số đo điện từ trường. '
              + 'Những thay đổi từ từ hay đột ngột của các thông số này đều gây ra các ảnh hưởng lớn đến chất lượng '
              + 'điện năng. Nói đến chất lượng điện năng là nói đến sự so sánh giữa các giá trị thực tế với các giá trị '
              + 'lý tưởng hoặc kỳ vọng của từng thành tố nêu trên trong mạng phân phối điện. Không giống với trường hợp '
              + 'dòng điện hay công suất thường được đo lường bằng đơn vị ampe hoặc oát, chất lượng điện năng không có '
              + 'đơn vị đo lường cụ thể. Do đó, khái niệm chất lượng điện năng là nói đến khác biệt hoặc các bất thường '
              + 'giữa giá trị thực tế và giá trị kỳ vọng. Nói đến chất lượng điện năng là nói đến các kỳ vọng không sụt áp, '
              + 'không vọt áp, không nhiễu loạn, không mất điện, v.v…',
            ],
          },
          {
            type: 'table',
            columns: [
              'Các vấn đề của chất lượng điện năng',
              'Minh họa',
              'Nguyên nhân – Hệ quả',
            ],
            rows: [
              {
                col_0: 'Sụt áp/nhấp nháy',
                col_1: 'assets/images/services/03/t1.png',
                col_2: {
                  reason: 'khởi động hoặc dừng một tải lớn ví dụ như một máy nén khí điều hòa hay một động cơ '
                  + 'lớn hay các thiết bị hút dòng gián đoạn thường xuyển.',
                  result: 'gây mất dữ liệu, gây quá nhiệt động cơ, bị tái khởi động thường xuyên và làm giảm '
                  + 'đến sức quan sát (bị nhấp nháy).',
                },
              },
              {
                col_0: 'Giảm hệ số công suất',
                col_1: 'assets/images/services/03/t2.png',
                col_2: {
                  reason: 'do thừa tải mang tính dung/tính kháng, tình trạng hư hỏng bộ lọc tụ bù hoặc hệ thống bù công suất phản kháng.',
                  result: 'tăng chi phí vận hành, bị phạt bù công suất trong hóa đơn tiền điện.',
                },
              },
              {
                col_0: 'Méo dạng sóng hài',
                col_1: 'assets/images/services/03/t3.png',
                col_2: {
                  reason: 'do các tải phi tuyến (hầu như đối với các thiết bị điện tử và điều khiển động cơ).',
                  result: 'làm quá nhiệt thiết bị điện, dây dẫn và động cơ, gây sai lệch trong điều khiển, '
                  + 'tác động rơ-le, nổ cầu chì và sự gia giảm hiệu năng của cả hệ thống.',
                },
              },
              {
                col_0: 'Mất cân bằng pha đối tải 3 pha',
                col_1: 'assets/images/services/03/t4.png',
                col_2: {
                  reason: 'đấu nối tải một pha với công suất khác nhau, sự cố với các thiết bị tải 3 pha.',
                  result: 'giảm hiệu năng, gây quá nhiệt, gây hư hỏng động cơ và máy biến áp.',
                },
              },
              {
                col_0: 'Dòng quá độ và vọt điện áp',
                col_1: 'assets/images/services/03/t5.png',
                col_2: {
                  reason: 'đóng cắt các bộ lọc, đóng cắt các thiết bị có công suất lớn, ngắn mạch đường truyền '
                  + 'hoặc bị ảnh hưởng bởi sét đánh.',
                  result: 'rút ngắn tuổi thọ bóng đèn, dừng hoặc gây hư hỏng thiết bị,máy tính bị treo và mất '
                  + 'bộ nhớ, gây sai sót trong xử lý dữ liệu, cháy các thiết bị điện tử và suy giảm cách điện của động cơ và máy biến áp.',
                },
              },
            ],
          },
        ],
      },
      {
        img: [
          'assets/images/services/03/9.jpg',
          'assets/images/services/03/10.jpg',
          'assets/images/services/03/11.jpg',
        ],
        title: 'III. CHÚNG TÔI THỰC HIỆN DỊCH VỤ PHÂN TÍCH CHẤT LƯỢNG ĐIỆN NĂNG NHƯ THẾ NÀO?',
        paragraphs: [
          {
            type: 'sub',
            title: 'I. Đánh giá sơ bộ ban đầu',
          },
          {
            type: 'p',
            texts: [
              'Trước khi tiến hành khảo sát thực tế, chúng tôi thực hiện đánh giá tổng quan về hệ thống điện cơ sở hạ tầng '
              + 'của khách hàng. Việc thẩm định sơ bộ này giúp phân loại các vấn đề, cũng như xác định các thay đổi quan '
              + 'trọng trong cơ sở hạ tầng hoặc trực tiếp với hệ thống điện (các thay đổi về thiết bị, cách đấu nối, '
              + 'các sửa chữa,v.v…) có thể là nguyên nhân tiềm ẩn ảnh hưởng đến chất lượng điện năng, từ đó giúp '
              + 'việc xây dựng kế hoạch chi tiết việc khảo sát thực tế. Thông qua trao đổi thông tin, việc đánh giá sơ bộ'
              + ' giúp xác định mức độ của việc khảo sát. Trên thực tế, chúng tôi đôi khi đã tìm ra các vấn đề hiện tại '
              + 'hoặc tiềm ẩn của khác hàng ở giai đoạn này, vì vậy giúp rút ngắn và thu hẹp phạm vi khảo sát thực tế.',
            ],
          },
          {
            type: 'sub',
            title: 'II. Khảo sát thực tế - Tiến hành đo đạc',
          },
          {
            type: 'p',
            texts: [
              'Mục tiêu của cuộc khảo sát thực tế là thu thập dữ liệu về cơ sở hạ tầng điện, các vấn đề liên quan '
              + 'đến chất lượng điện năng và các thiết bị chịu tác động. Song song với việc kiểm tra hệ thống điện và '
              + 'các thiết bị, chúng tôi tiến hành đo đạc tại hiện trường. '
              + 'Các thông số tính chất của hệ thống điện được giám sát và ghi nhận, bao gồm:',
            ],
          },
          {
            type: 'li',
            texts: [
              'Điện áp nguồn',
              'Mất cân bằng áp',
              'Dòng điện tải',
              'Thông số chi tiết của máy biến áp',
              'Tần số nguồn',
              'Chiều quay',
              'Hệ số công suất',
              'Các nhiễu loại trên hệ thống lưới điện',
              'Méo dạng sóng hài trên dòng và áp',
              'Hệ số đỉnh',
              'Đối xứng pha',
            ],
          },
          {
            type: 'sub',
            title: 'III. Báo cáo kỹ thuật',
          },
          {
            type: 'p',
            texts: [
              'Sau khi tiến hành đánh giá sơ bộ và khảo sát hiện trường, chúng tôi sẽ xây dựng báo cáo kỹ thuật '
              + 'tóm tắt các phát hiện trong suốt quá trình kiểm tra. Báo cáo này sẽ tóm lược tất cả các thông tin đã '
              + 'thu thập được, nêu rõ các vấn đề được phát hiện, tóm tắt các giá trị đo lường của hệ thống, đề xuất '
              + 'các giải pháp và các khuyến cáo tiếp tục giám sát hệ thống hoặc cần phân tích chuyên sâu hơn. '
              + 'Báo cáo của chúng tôi sẽ giúp bạn có những ý niệm rõ ràng về các vần đề tồn tại trong hệ thống và '
              + 'là nền tảng để có thể tiếp tục tiến hành các phân tích đánh giá khác cũng như việc xây dựng nên một '
              + 'hệ thống điện hiệu quả.',
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
