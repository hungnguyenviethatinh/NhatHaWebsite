import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-infrared-scan',
  templateUrl: './infrared-scan.component.html',
  styleUrls: ['./infrared-scan.component.less']
})
export class InfraredScanComponent implements OnInit {
  service = {
    heading: {
      img: 'assets/images/services/05/01/1.jpg',
      title: 'QUÉT NHIỆT HỒNG NGOẠI THIẾT BỊ ĐIỆN',
    },
    contents: [
      {
        img: [
          'assets/images/services/05/01/2.JPG',
        ],
        title: 'I. CHÚNG TA CÓ CẦN QUÉT NHIỆT HỒNG NGOẠI THIẾT BỊ ĐIỆN?',
        paragraphs: [
          {
            type: 'p',
            texts: [
              'Tất cả thiết bị điện đều tỏa ra một lượng nhiệt nhất định trong quá trình đang vận hành. '
              + 'Bình thường, lượng nhiệt này ổn định và không gây ra vấn đề. Trong hệ thống phân phối điện, '
              + 'các hư hỏng thường gây ra bởi lỏng kết nối, thiết bị chọn dưới định mức và các hao mòn theo '
              + 'thời gian. Trong tất cả trường hợp nêu trên, trước khi phát triển thành sự cố nghiêm trọng gây '
              + 'ngưng trệ hệ thống, các điểm nóng quá nhiệt thường xuất hiện và hoàn toàn có thể được phát hiện '
              + 'sớm và lên kế hoạch khắc phục kịp thời.',
            ],
          },
        ],
      },
      {
        img: [
          'assets/images/services/05/01/3.JPG',
          'assets/images/services/05/01/4.jpg',
          'assets/images/services/05/01/5.jpg',
          'assets/images/services/05/01/6.jpg',
          'assets/images/services/05/01/7.jpg',
          'assets/images/services/05/01/8.jpg',
          'assets/images/services/05/01/9.jpg',
        ],
        title: 'II. DỊCH VỤ QUÉT NHIỆT HỒNG NGOẠI THIẾT BỊ ĐIỆN',
        paragraphs: [
          {
            type: 'p',
            texts: [
              'Mục tiêu của việc tiến hành quét nhiệt hồng ngoại là kiểm tra các thiết bị điện nhằm phát hiện '
              + 'các thiết bị hư hỏng và tình trạng quá nhiệt đang tồn tại trong hệ thống phân phối điện. '
              + 'Nếu các điểm nóng quá nhiệt không được phát hiện và xử lý kịp thời, chúng có thể gây ra các '
              + 'nguy cơ cháy nổ hoặc mất điện kéo dài. Nguyên nhân tạo ra các điểm nóng quá nhiệt thông thường '
              + 'do mất cân bằng giữa các pha hoặc hệ thống bị hoạt động quá tải, kết nối bị lỏng hoặc thiết bị '
              + 'hư hỏng. Các trường hợp này thường không được chú ý trong các đợt kiểm tra theo dõi định kỳ, '
              + 'tuy nhiên với nhiệt lượng liên tục tỏa ra, các vấn đề này hoàn toàn có thể được phát hiện trong '
              + 'quá trình tiến hành quét nhiệt.',
            ],
          },
          {
            type: 'h4',
            texts: [
              'LỢI ÍCH',
            ],
          },
          {
            type: 'p',
            texts: [
              'Quét nhiệt hồng ngoài thông thường có thể giúp tiến kiệm từ $10,000 đến $20,000, '
              + 'tùy vào số lượng và tình trạng các điểm bất thường được phát hiện. Ngoài việc trực tiếp '
              + 'tiết kiệm tài chính, việc kết hợp quét nhiệt và chương trình bảo trì định kỳ có thể giúp '
              + 'tiết kiệm thêm thời gian quý giá. Quét nhiệt cung cấp ',
              + 'đầy đủ thông tin về hiện trạng hoạt động bình thường của các thiết bị trong hệ thống điện '
              + 'giúp cắt giảm thời gian bảo trì, ngăn ngừa các sửa chữa thay thế tốn kém và giúp giảm thiểu '
              + 'các trường hợp mất điện và ngưng hệ thống đột xuất. Một lần tiến hành quét nhiệt hồng ngoại '
              + 'thiết bị điện mang lại lợi ích:',
            ],
          },
          {
            type: 'li-number',
            texts: [
              'Duy trì tình trạng hoạt động bình thường của hệ thống điện',
              'Giảm thiểu các nguy cơ cháy nổ gây ra bởi điện',
              'Duy trì cung cấp điện liên tục cho người sử dụng/khách hàng/nhân viên',
              'Phát hiện các kết nối bị hỏng/các mạch điện bị quá tải',
              'Ghi nhận tình trạng của hệ thống cơ khí, động cơ, ổ lăn v.v… tại thời điểm đo',
              'Chương trình bảo trì chẩn đoán hoặc ngăn ngừa giúp tiết kiệm chi phí bằng cách giảm thiểu:',
            ],
          },
          {
            type: 'li-alpha',
            texts: [
              'thiết bị hư hỏng sớm',
              'phát sinh ngoài giờ trong tình huống khẩn cấp',
              'vận chuyển hàng hóa khẩn',
              'chi phí đóng bảo hiểm (nhiều công ty bảo hiểm thường giảm giá cho '
              + 'các khách hàng có thực hiện chương trình quét nhiệt thường xuyên)',
              'sụt giảm doanh thu do ngưng trệ hệ thống',
            ],
          },
          {
            type: 'h4',
            texts: [
              'QUY TRÌNH THỰC HIỆN',
            ],
          },
          {
            type: 'p',
            texts: [
              'Kỹ sư chúng tôi được đào tạo bài bản theo tiêu chuẩn có thể nhanh chóng phát hiện ra các vấn đề '
              + 'trong hệ thống điện và cơ khí không thể nhìn thấy bằng mắt thường, bao gồm lỏng kết nối, các hư hỏng ở '
              + 'máy cắt, dao cách ly, sự quá tải, sự mất cân bằng pha, các cuộn dây động cơ hay ổ lăn bị suy yếu và thêm '
              + 'nhiều vấn đề khác. Các điểm nhiệt bất thường được phát hiện và ghi nhận bằng máy chụp ảnh nhiệt '
              + 'hồng ngoại hiện đại. Chúng tôi thường xuyên tiến hành kiểm tra các loại thiết bị bên dưới, '
              + 'ngoài ra chúng tôi vẫn có thể kiểm tra bất cứ thiết bị điện hay cơ khí khác tùy theo yêu cầu cụ thể của khách hàng.',
            ],
          },
          {
            type: 'li-circle',
            texts: [
              'Tủ phân phối điện chính',
              'Biến áp lực',
              'Dao cách ly',
              'Dao chuyển tải',
              'Thanh dẫn',
              'Động cơ / Bơm / Ổ lăn',
              'Khởi động từ hệ thống đèn / sưởi',
              'Tủ điều khiển động cơ',
              'Tủ phân phối nhỏ',
              'Bộ khởi động động cơ',
              'Bộ lưu điện',
              'Máy làm mát và hệ thống thiết bị điều hòa không khí tầng mái',
              'Bộ biến tần',
            ],
          },
          {
            type: 'h4',
            texts: [
              'KẾT QUẢ - GIÁ TRỊ',
            ],
          },
          {
            type: 'p',
            texts: [
              'Báo cáo quét nhiệt hồng ngoại của Nhat Ha Electric được tổng hợp súc tích rõ ràng bao gồm '
              + 'các thông tin chi tiết về các vị trí bất thường và '
              + 'khuyến cáo phương án xử lý và sửa chữa phù hợp. Báo cáo sẽ bao gồm các thành phần sau:',
            ],
          },
          {
            type: 'li-circle',
            texts: [
              'Danh sách tổng thể tất cả thiết bị được kiểm tra',
              'Tóm tắt và đánh giá chung của đợt khảo sát',
              'Báo cáo chi tiết cho tất cả các điểm bất thường phát hiện được trong đợt khảo sát.',
              'Biên bản báo cáo cho từng điểm bất thường sẽ bao gồm:',
            ],
          },
          {
            type: 'li-square',
            texts: [
              'Ảnh chụp thực tế - Ảnh nhiệt hồng ngoại của thiết bị',
              'Đánh giá mức độ nghiêm trọng của tình trạng bất thường',
              'Đánh giá nguyên nhân tiềm ẩn gây ra bất thường',
              'Vị trí chính xác của điểm bất thường',
              'Nhiệt độ của vị trí phát hiện bất thường',
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
