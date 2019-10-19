import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-arc-flash',
  templateUrl: './arc-flash.component.html',
  styleUrls: ['./arc-flash.component.less']
})
export class ArcFlashComponent implements OnInit {
  service = {
    heading: {
      img: ['assets/images/services/01/02/1.jpg'],
      title: 'PHÂN TÍCH NGUY CƠ HỒ QUANG ĐIỆN',
    },
    contents: [
      {
        type: 'p',
        img: ['assets/images/services/01/02/2.gif'],
        title: 'I. THỐNG KÊ VỀ CÁC SỰ CỐ NỔ HỒ QUANG ĐIỆN',
        paragraphs: [
          'Bạn có biết theo thống kê có từ năm (5) đến mười (10) sự cố nổ hồ quang điện đối với thiết bị xảy ra '
          + 'mỗi ngày ở Hoa Kỳ và mỗi năm có hơn 2000 người được điều trị tại các trung tâm chữa trị bỏng gây ra '
          + 'bởi các tai nạn nổ hồ quang điện nghiêm trọng.',
          'Vậy số lượng thực tế các tai nạn này tại Việt Nam là bao nhiêu? Liêu ngày mai tại nơi bạn đang làm việc '
          + 'một sự cố như vậy có thể xảy ra không? Câu trả lời là Có thể, tuy nhiên các sự cố này đều có thể ngăn ngừa được!',
        ],
      },
      {
        type: 'p',
        img: ['assets/images/services/01/02/3.jpg'],
        title: 'II. HỒ QUANG ĐIỆN LÀ GÌ?',
        paragraphs: [
          'Hồ quang điện là một vụ nổ điện gây ra bởi lỗi trong hệ thống hoặc trường hợp ngắn mạch chập chạm '
          + 'giữa một pha với đất hoặc giữa hai pha với nhau và dòng điện truyền qua trong môi trường không khí. '
          + 'Trong quá trình sự cố diễn ra, nhiệt độ có thể vượt ngưỡng 20,000° C (bề mặt của mặt trời có nhiệt độ '
          + 'khoảng 5000° C). Nhiệt độ cao này nung nóng nhanh chóng không khí ở môi trường xung quanh và tạo ra '
          + 'áp suất cực lớn. Hồ quang điện gần như làm hóa hơi tất cả thành phần cấu tạo kim loại của thiết bị. '
          + 'Kết quả, hồ quang điện gây ra cháy, sự lóa sáng, sóng áp suất và tạo ra các vật nhọn bắn tung tóe.',
          'Khi sự cố hồ quang điện xảy ra, nó diễn ra gần như tức thì và không có dấu hiệu cảnh báo trước. '
          + 'Kết quả của sự cố nghiêm trọng thường là sự phá hủy toàn bộ của thiết bị liên quan, cháy nổ, '
          + 'tai nạn nghiêm trọng thậm chí là tử vong đối với những người đứng gần bên.',
        ],
      },
      {
        type: 'li-circle',
        img: ['assets/images/services/01/02/4.jpg'],
        title: 'III. NGUYÊN NHÂN GÂY RA HỒ QUANG ĐIỆN',
        paragraphs: [
          'Thiết bị không được bảo dưỡng thường xuyên',
          'Người làm việc thực hiện công việc trong điều kiện điện sống',
          'Tháo gỡ/Lắp đặt thiết bị máy cắt hoặc bộ cầu chì bảo vệ',
          'Gỡ bỏ các tấm vỏ che được bắt ốc/gắn bản lề của thiết bị',
          'Người làm việc vô tình làm rơi dụng cụ hoặc thiết bị vào bộ phận đang mang điện',
          'Hư hỏng cách điện do quá trình tích tụ các dơ bẩn và nhiễm ẩm',
          'Các kết nối bị lỏng',
          'Cắt dòng ngắn mạch sự cố không hiệu quả',
        ],
      },
      {
        type: 'p',
        img: [
          'assets/images/services/01/02/5.jpg',
          'assets/images/services/01/02/6.jpg',
          'assets/images/services/01/02/7.jpg',
        ],
        title: 'IV. TUÂN THỦ NGUYÊN TẮC AN TOÀN VỀ HỒ QUANG ĐIỆN ',
        paragraphs: [
          'Trên thực tế, một Quản Lý Nhà Máy có thể chịu trách nhiệm hình sự đối với tai nạn xảy ra với '
          + 'nhân công của mình trong trường hợp người làm việc không được huấn luyện an toàn phù hợp. '
          + 'Tại Hoa Kỳ, các hiệp hội An Toàn (OSHA) và Phòng Cháy - Chữa Cháy (NFPA) đưa ra các quy định '
          + 'và yêu cầu cụ thể cho các tổ chức tuân thủ thực hiện.',
          'OSHA (29 CFR 1910) yêu cầu người lao động làm việc trong các khu vực tiềm tàng các rủi ro '
          + 'an toàn điện sẽ được cung cấp và sử dụng đồ bảo hộ lao động phù hợp để bảo vệ các phần khác nhau '
          + 'của cơ thể khi thực hiện các công việc..',
          'The NFPA® 70E: Tiêu chuẩn an toàn điện nơi làm việc đã hướng dẫn chi tiết cách xử lý với các '
          + 'rủi ro của hồ quang điện. Điều 130.5 nêu rằng “Thẩm định đánh giá rủi ro hồ quang điện sẽ được '
          + 'thực hiện nhằm bảo vệ người làm việc khỏi các khả năng tai nạn gây ra do hồ quang điện. '
          + 'Việc phân tích năng lượng sự cố là nền tảng cho việc xây dựng chương trình đánh giá rủi ro và an toàn hồ quang điện”.',
          'NFPA 70E 2015 (130.5) yêu cầu việc đánh giá sẽ được cập nhật mỗi khi có các thay đổi quan trọng '
          + 'hay lắp đặt mới trong hệ thống và tối thiểu phải thực hiện mỗi năm năm một lần.',
          'Ngoài Hoa Kỳ, nhiều quốc gia khác đã bắt đầu có các yêu cầu tương tự trong luật '
          + 'an toàn điện nhằm giảm thiểu số lượng tai nạn gây ra bởi hồ quang điện.',
        ],
      },
      {
        type: 'li-number',
        img: [
          'assets/images/services/01/02/8.gif',
          'assets/images/services/01/02/9.jpg',
        ],
        title: 'IV. TUÂN THỦ NGUYÊN TẮC AN TOÀN VỀ HỒ QUANG ĐIỆN ',
        paragraphs: [
          'Thu thập dữ liệu từ việc trực tiếp khảo tại chỗ và đánh giá hệ thống phân phối điện được thực hiện '
          + 'bởi kỹ sư hệ thống điện có kinh nghiệm',
          'Dữ liệu thu thập được phân tích bởi đội Kỹ Thuật',
          'Xây dựng mô hình Một Sợi bằng cách điền thông tin vào phần mềm Etap',
          'Thực hiện tính toán ngắn mạch hệ thống',
          'Kiểm tra định mức tiêu chuẩn của thiết bị và đánh giá mức độ tuân thủ dựa trên kết quả tính toán ngắn mạch',
          'Thực hiện phối hợp chọn lọc thiết bị bảo vệ trong hệ thống',
          'Đưa ra các khuyến cáo thay đổi cho hệ thống điện (trước khi dán nhãn thiết bị)',
          'Tạo ra các nhãn cảnh báo tuân thủ theo yêu cầu của NFPA70E, có thể chỉnh sửa phù hợp với nhu cầu của khách hàng',
          'Thiết lập sơ đồ một sợi với các thông số tính toán đầy đủ sau phân tích',
          'Thực hiện huấn luyện bằng cách xem xét nội dung yêu cầu và ý nghĩa các '
          + 'thành phần của các nhãn cảnh báo. Tóm lược lại các tiêu chí yêu cầu của NFPA 70E.',
          'Đánh giá lại hệ thống khi có thay đổi và dán nhãn lại mỗi 5 năm',

        ],
      },
    ],
  };
  constructor() { }

  ngOnInit() {
  }

}
