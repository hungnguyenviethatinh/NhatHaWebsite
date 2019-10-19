import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-ep-maintain',
  templateUrl: './ep-maintain.component.html',
  styleUrls: ['./ep-maintain.component.less']
})
export class EpMaintainComponent implements OnInit {
  service = {
    heading: {
      img: 'assets/images/services/04/1.JPG',
      title: 'CHƯƠNG TRÌNH BẢO TRÌ ĐIỆN',
    },
    contents: [
      {
        img: [
          'assets/images/services/04/2.jpg',
          'assets/images/services/04/3.JPG',
        ],
        title: 'I. TẠI SAO CẦN PHẢI TIẾN HÀNH BẢO TRÌ ĐIỆN THƯỜNG XUYÊN?',
        paragraphs: [
          {
            type: 'p',
            texts: [
              'Theo báo cáo của Hiệp hội Phòng cháy – Chữa cháy Quốc gia Hoa Kỳ (NFPA), '
              + '“gần hai phần ba số trường hợp cháy gây ra bởi hệ thống điện đều có thể được ngăn ngừa.”',
              'Trong bộ tiêu chuẩn NFPA 70B về các khuyến cáo bảo trì cho thiết bị điện nêu rõ '
              + '“một chương trình bảo trì dự phòng được tổ chức bài bản sẽ giúp giảm thiếu các tai nạn, '
              + 'cứu sống nhiều mạng người, hạn chế tối đa các hư hỏng và ngưng trệ đột ngột xảy ra với các thiết bị.”',
              'Theo báo cáo của Viện Kỹ nghệ Điện và Điện tủ Hoa Kỳ (IEEE) “việc thiếu bảo trì dự phòng, '
              + 'tỉ lệ hư hỏng các thiết bị điện tăng cao gấp ba lần.”',
              'Cơ quan Quản lý An toàn Nghề nghiệp và Sức khỏe Hoa Kỳ (OSHA) và bộ tiêu chuẩn NFPA 70E về an toàn điện '
              + 'nơi làm việc quy định chặt chẽ việc nhà máy công sở phải tiến hành bảo trì dự phòng cho các thiết bị điện.',
              'Tại Việt Nam, Thông tư 32/2010/TT-BCT (Các quy định đối với hệ thống phân phối điện) quy định trách nhiệm của '
              + 'bên sử dụng điện (khách hàng) trong việc tiến hành bảo trì và thí nghiệm định kỳ cho các thiết bị điện '
              + 'trong hệ thống phân phối. Bên cung cấp điện (các công ty điện lực) có quyền ngưng cung cấp điện trong '
              + 'trường hợp phía khách hàng không tuân thủ các điều khoản quy định theo yêu cầu.',
              'Hãy để chúng tôi giúp bạn tuân thủ các quy định về bảo trì hệ thống điện.',
            ],
          }
        ],
      },
      {
        img: [
          'assets/images/services/04/4.jpg',
          'assets/images/services/04/5.jpg',
          'assets/images/services/04/6.JPG',
          'assets/images/services/04/7.jpg',
        ],
        title: 'II. CHƯƠNG TRÌNH BẢO TRÌ ĐIỆN LÀ GÌ?',
        paragraphs: [
          {
            type: 'p',
            texts: [
              'Một chương trình bảo trì ngăn ngừa/chẩn đoán bao gồm một kế hoạch bảo trì thử nghiệm và các hoạt động '
              + 'định kỳ với mục tiêu ngăn ngừa các hư hỏng và ngưng trệ. Phát hiện và thay thế các thiết bị hao mòn '
              + 'trước khi chúng bị hư hỏng là mục tiêu chính của việc ngăn ngừa cũng như dư đoán được và đánh giá '
              + 'tuổi thọ hoạt động của các thiết bị.',
              'Dịch vụ bảo trì ngăn ngừa/chẩn đoán của Nhật Hạ Electric sẽ giúp đánh giá tình trạng hoạt động của '
              + 'thiết bị và đưa ra các giải pháp thực tiễn cũng như hiệu quả về '
              + 'chi phí nhằm đảm bảo được sự an toàn, độ tin cậy và hiệu năng tổng thể của hệ thống.',
              'Thành phần của một chương trình bảo trì ngăn ngừa/chẩn đoán tốt bao gồm các yếu tố sau:',
            ],
          },
          {
            type: 'li-circle',
            texts: [
              'Xác định được các thiết bị hay hệ thống có nguy cơ bị hư hỏng',
              'Các thiết bị thường được kiểm tra bao gồm tủ phân phối điện, máy cắt, máy biến áp và các dao chịu tải,v.v…',
              'Xây dựng kế hoạch và quy trình kiểm tra định kỳ',
              'Thử nghiệm định kỳ các thiết bị nhằm đảm bảo tình trạng hoạt động bình thường',
              'Thực hiện việc sửa chữa hoặc thay thế một cách nghiêm túc đối với '
              + 'các thiết bị hư hỏng được phát hiện ra trong quá trình kiểm tra hoặc thử nghiệm',
              'Lưu kho các thiết bị dự phòng phục vụ cho việc sửa chữa thường xuyên',
              'Sử dụng một hệ thống lên kế hoạch và quản lý kết quả của các kiểm tra định kỳ',
              'Cam kết đảm bảo các thông tin được ghi nhận đầy đủ với chi tiết của kết quả các thử nghiệm cũng như '
              + 'các hành động tiếp theo sau',
              'Các bản lưu bảo trì ngăn ngừa cần được lưu trữ cùng với các kết quả kiểm tra ngoại quan khác đối với thiết bị',
            ],
          },
          {
            type: 'p',
            texts: [
              'Hãy để chúng tôi giúp bạn thiết kế và thực hiện một cách chiến lược chương trình bảo trì '
              + 'ngăn ngừa để có thể giảm đươc chi phí bảo trì tổng thể và thời gian lãng phí cho các công tác '
              + 'bảo trì đột xuất. Và quan trọng hơn hết, giúp cải thiện nâng cao độ tin cậy tổng thể hệ thống của bạn.',
              'Các giá trị lợi ích:',
            ],
          },
          {
            type: 'li-circle',
            texts: [
              'Giảm thời gian ngưng trệ',
              'Giảm chi phí bảo trì tổng thể',
              'Nâng cao độ tin cây của hệ thống',
              'Ngăn ngừa sự cố trước khi chúng xảy ra',
              'Kéo dài tuổi thọ của thiết bị',
              'Đảm bảo an toàn cho người vận hành',
            ],
          },
        ],
      },
      {
        img: [
          'assets/images/services/04/8.jpg',
          'assets/images/services/04/9.JPG',
          'assets/images/services/04/10.JPG',
          'assets/images/services/04/11.JPG',
        ],
        title: 'III. CHÚNG TÔI TIẾN HÀNH DỊCH VỤ BẢO TRÌ NHƯ THẾ NÀO?',
        paragraphs: [
          {
            type: 'p',
            texts: [
              'Nhật Hạ Electric sẽ phối hợp cùng khách hàng xây dựng các thỏa thuận bảo trì. '
              + 'Các thỏa thuận này bao gồm các dịch vụ thử nghiệm, bảo trì định kỳ cho thiết bị, '
              + 'vệ sinh, bôi trơn và nhiều các dịch vụ khác.',
              '1. Dịch vụ phản ứng tình huống khẩn cấp: bất cứ lúc nào, đội ngũ của chúng tôi '
              + 'đều có thể hỗ trợ bạn trong các tình huống khẩn cấp với các kỹ sư có kinh nghiệm xử lý '
              + 'sử dụng các máy móc thử nghiệm tối tân. Dịch vụ của chúng tôi sẽ giúp bạn cắt giảm chi phí và thời gian sự cố.',
              '2. Bảo trì chẩn đoán trong điều kiện hoạt động bình thường: sử dụng các công nghệ cao như '
              + 'Quét nhiệt Hồng ngoại (IR) và Đo phóng điện Cục bộ (OLPD) [sóng siêu âm (Ultrasound), '
              + 'trường điện từ (TEV), biến dòng cao tần (HFCT)], các kỹ sư của chúng tôi có thể phát hiện ra các '
              + 'nguy cơ tiềm ẩn từ rất sớm bao gồm quá tải, mất cân bằng pha hay lỏng kết nối cơ khí dẫn đến '
              + 'tình trạng quá nhiệt có thể làm suy giảm độ bền cách điện của hệ thống và gây ra hiện tượng phóng điện. '
              + 'Các dịch vụ kiểm tra này được tiến hành trong điều kiện hoạt động bình thường và không cần đến kế hoạch '
              + 'tắt điện. Bảo trì chẩn đoán sẽ giúp chủ động tiến hành các công tác sửa chữa và ngăn ngừa  các sự cố bất ngờ xảy ra.',
              '3. Bảo trì ngăn ngừa định kỳ khi cắt điện: lên kế hoạch cắt điện định kỳ nhằm tiến hành các tác vụ căn bản như kiểm tra, '
              + 'vệ sinh, bôi trơn và siết lực cho tất cả các thiết bị trong hệ thống điện là cần thiết. '
              + 'Đội ngũ chúng tôi có đầy đủ con người và dụng cụ để thực hiện công việc một cách nhanh chóng và chính xác. '
              + 'Ngoài ra, chúng tôi cung cấp một loạt các thử nghiệm khác nhau nhằm kiểm tra các thiết bị vẫn vận hành '
              + 'bình thường, bao gồm:',
            ],
          },
          {
            type: 'li-circle',
            texts: [
              'Thử nghiệm cho máy biến áp (điện trở cách điện, hệ số điện môi, tỉ số biến, điện trở cuộn dây, tổn hao không tải)',
              'Phân tích mẫu dầu máy biến áp (điện áp đánh thủng, hàm lượng nước, tính chất hóa học, khí trong dầu, hàm lượng furanic)',
              'Xử lý và lọc dầu cách điện máy biến áp (sấy khử ẩm và làm sạch)',
              'Thử nghiệm cáp trung thế và hạ thế (điện trở cách điện, cao áp AC tần số thấp hoặc cao áp DC) ',
              'Thử nghiệm máy cắt trung thế và hạ thế (điện trở cách điện, điện trở tiếp xúc, chức năng bảo vệ, thời gian đóng cắt)',
              'Thử nghiệm các biến áp đo lường (điện trở cách điện, điện trở cuộn dây, tỉ số biến, cực tính, '
              + 'dòng điện từ hóa, khả năng chịu tải)',
              'Thử nghiệm và hiệu chỉnh các rơ-le bảo vệ (dạng cơ khí, dạng kỹ thuật số, dạng thông minh tích hợp)',
              'Thử nghiệm và hiệu chỉnh các đồng hồ đo',
              'Thử nghiệm và chỉnh định hệ thống bù công suất phản kháng (tụ bù)',
              'Thử nghiệm tủ phân phối và thanh dẫn (điện trở cách điện, cao áp AC)',
              'Thử nghiệm hệ thống nguồn DC trạm (kiểm tra tải, nội trở ắc-quy và điện áp đầu cực)',
              'Thử nghiệm hệ thống nối đất bảo vệ',
              'Phát hiện rò rỉ khí SF6 và phân tích thành phần khí (độ tinh khiết và độ nhiễm ẩm',
            ],
          },
        ],
      },
      {
        img: [
          'assets/images/services/04/12.JPG',
          'assets/images/services/04/13.JPG',
          'assets/images/services/04/14.JPG',
        ],
        title: 'IV. ĐIỀU GÌ KHIẾN DỊCH VỤ CỦA CHÚNG TÔI KHÁC BIỆT?',
        paragraphs: [
          {
            type: 'li-number',
            texts: [
              'Đội ngũ chúng tôi có kinh nghiệm thực tế triển khai nhiều chương trình bảo trì chẩn đoán (CBM) '
              + 'cũng như đã thực hiện nhiều kế hoạch bảo trì cắt điện tại nhiều nhà máy lớn trước đây. '
              + 'Vì vậy, chúng tôi hoàn toàn có thể giúp bạn xây dựng một chương trình bảo trì phức hợp và với mức chi phí hợp lý.',
              'Chúng tôi sử dụng các thiết bị được hiệu chuẩn định kỳ và các kỹ sư của chúng tôi được đào tạo và '
              + 'chứng nhận quốc tế (Mức 1 với Quét nhiệt Hồng ngoại, Mức 1 – 2 với Đo phóng điện Cục bộ). '
              + 'Chúng tôi không bao giờ thỏa hiệp về vấn đề chất lượng.',
              'Đội ngũ của chúng tôi được huấn luyện an toàn và trang bị đầy đủ đồ bảo hộ chống Hồ quang '
              + 'Điện trong quá trình đo đạc thử nghiệm. Đối với chúng tôi, an toàn cho nhân viên và khách hàng là điều quan trọng nhất.',
              'Báo cáo kỹ thuật của chúng tôi luôn được phát hành dưới dạng file '
              + 'mềm có thể truy xuất trên internet và bản in để gửi cho khách hàng.',
              'Chúng tôi cam kết về trách nhiệm. Nếu khách hàng bị bất cứ vấn đề gì sau khi chúng tôi thực thiện công việc, '
              + 'chúng tôi sẽ tích cực hỗ trợ xử lý và không tính bất cứ chi phí phát sinh nào.',
            ],
          }
        ],
      },
    ],
  };

  constructor() { }

  ngOnInit() {
  }

}
