import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-short-circuit',
  templateUrl: './short-circuit.component.html',
  styleUrls: ['./short-circuit.component.less']
})
export class ShortCircuitComponent implements OnInit {

  service = {
    heading: {
      img: 'assets/images/services/01/01/1.jpg',
      title: 'TÍNH TOÁN NGẮN MẠCH – PHỐI HỢP BẢO VỆ HỆ THỐNG',
    },
    contents: [
      {
        img: 'assets/images/services/01/01/2.jpg',
        title: 'I. NGẮN MẠCH LÀ GÌ?',
        paragraphs: [
          'Hiện tượng ngắn mạch xảy ra khi dòng điện được truyền theo một đường dẫn bất thường không có '
          + 'hoặc có giá trị điện trở rất thấp  Ngắn mạch thường được gây ra bởi sự suy giảm cách điện, '
          + 'lỏng kết nối hoặc vô tình đấu nối sai trong mạch điện.',
          'Sự cố ngắn mạch thường gây ra các hậu quả nghiêm trọng gây nguy hiểm trực tiếp đến con người '
          + 'và thiết bị trong quá trình vận hành. Vì vậy, cầu chì và máy cắt thường được sử dụng trong '
          + 'hệ thống điện nhằm bảo vệ các thiết bị bao gồm dây động lực, máy biến áp, động cơ và các '
          + 'thành phần khác. Tuy nhiên, trong đa số các trường hợp hê thống phân phối điện bị thiết kế '
          + 'thiếu sót sự phối hợp giữa các thiết bị bảo vệ này. Do đó, độ hiệu quả thực tế của hệ thống '
          + 'bảo vệ luôn bị nghi ngờ khi các thiết bị bảo vệ không được chọn lọc và phối hợp đúng đắn.',
        ],
      },
      {
        img: 'assets/images/services/01/01/3.jpg',
        title: 'II. MỤC TIÊU CỦA TÍNH TOÁN PHỐI HỢP BẢO VỆ',
        paragraphs: [
          'Tính toán phối hợp bảo vệ là một quy trình bao gôm việc chọn lựa và sắp xếp thứ tự giữa các '
          + 'thiết bị bảo vệ nhằm hạn chế tối đa các tác động của sự cố quá dòng (ngắn mạch). Phương pháp này '
          + 'có thể được sử dụng để xác định kích thước của cầu chì, các giá trị cài đặt cho máy cắt và rơ-le, '
          + 'hoặc có thể dùng để tham khảo việc lựa chọn thiết bị bảo vệ mới. Ngoài ra, việc tính toán này '
          + 'cũng hỗ trợ việc xác định thời gian tồn tại của sự cố cũng như việc phối hợp với các thiết bị bảo vệ '
          + 'ở phía nguồn cấp. Phối hợp bảo vệ phù hợp và rút ngắn thời gian tồn tại sự cố giúp giảm thiểu các '
          + 'tác hại tới thiết bị và bảo vệ con người khỏi các rủi ro mất an toàn.',
        ],
      },
      {
        img: 'assets/images/services/01/01/4.jpg',
        title: 'III. QUY ĐỊNH VỀ TÍNH TOÁN PHỐI HỢP BẢO VỆ',
        paragraphs: [
          'Tính toán phối hợp bảo vệ được yêu cầu thực hiện nhằm đảm bảo sự an toàn của người vận hành, '
          + 'môi trường xung quanh và tránh các hư hỏng xảy ra với máy móc thiết bị trong trường hợp sự cố xảy ra '
          + 'trong hệ thống theo các quy định của bộ luật NEC 110-10.',
          '“Mục tiêu của hệ thống bảo vệ và phối hợp các thiết bị nhằm ngăn ngừa các tổn thương xảy ra với con người, '
          + 'giảm thiểu tối đa các thiệt hại đối với các thiết bị trong hệ thống cũng như giới hạn thời gian ngưng trệ '
          + 'của hệ thống trong trường hợp sự cố ở bất kỳ vị trí nào trong hệ thống được gây ra bởi lỗi của thiết bị, '
          + 'lỗi do người vận hành hay trong điều kiện thiên nhiên khắc nghiệt.” - IEEE/ANSI std 242.',
        ],
      },
      {
        img: 'assets/images/services/01/01/5.jpg',
        title: 'IV. DỊCH VỤ TÍNH TOÁN NGẮN MẠCH VÀ PHỐI HỢP BẢO VỆ',
        paragraphs: [
          'Để thực hiện tính toán ngắn mạch và phối hợp bảo vệ, cần xác lập tình huống ngắn mạch xảy ra giữa pha '
          + 'với pha và pha chạm đất tại bất kỳ vị trí nào trong hệ thống phân phối điện. '
          + 'Đội ngũ của Nhật Hạ Electric sử dụng phần mềm Etap nhằm thực hiện tính toán với các tình huống này.',
          'Phần mềm Etap hỗ trợ việc xậy dựng mô hình mô phỏng toàn bộ hệ thống phân phối điện với nhiều loại '
          + 'thiết bị khác nhau với các đặc tính tải theo yêu cầu và hỗn hợp nhiều loại thiết bị bảo vệ. '
          + 'Nhờ khả năng mô phỏng của Etap, dòng điện ngắn mạch và mức điện áp của toàn bộ hệ thống '
          + 'trong suốt quá trình sự cố được tính toán và xác lập một cách nhanh chóng và hiệu quả. '
          + 'Các chức năng bảo vệ được chọn lọc từ các thư viện thiết bị phong phú từ nhiều nhà sản xuất khác nhau. '
          + 'Sự phối hợp giữa các thiết bị bảo vệ khác nhau sẽ được phân tích bởi các kỹ sư giàu kinh nghiệm của chúng tôi'
          + 'để xây dựng ra bảng giá trị định mức và thông số cài đặt cho các thiết bị bảo vệ nhằm hạn chế tối đa ảnh hưởng của sự cố.',
          'Cuối cùng, trình tự tác động của các thiết bị bảo vệ sẽ được mô phỏng trên phần mềm nhằm đảm bảo sự phối hợp '
          + 'bảo vệ theo kỳ vọng giữa các thiết bị trong trường hợp sự cố thực tế xảy ra.',
        ],
      },
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
