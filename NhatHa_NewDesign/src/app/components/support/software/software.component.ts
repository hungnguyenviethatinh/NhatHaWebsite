import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.less']
})
export class SoftwareComponent implements OnInit {
  banners = [
    'assets/images/supports/software/Engineering Softwares.JPG',
  ];

  softwares = [
    {
      logo: 'assets/images/abb-logo.png',
      name: 'e-Design Suite',
      descriptions: [
        'e-Design, bộ phần mềm kỹ thuật hỗ trợ công tác thiết kế hệ thống điện với '
        + 'khả năng tối ưu hóa cho toàn bộ các chu trình từ bắt đầu cho đến hoàn thiện '
        + '(sử dụng thư viện sản phẩm của ABB).',
      ],
    },
    {
      logo: 'assets/images/abb-logo.png',
      name: 'Protection and Control IED Manager (PCM600)',
      descriptions: [
        'Phần mềm hỗ trợ việc quản lý các thiết bị điều khiển và bảo vệ bao gồm '
        + 'kết nối truyền thông, cài đặt ứng dụng hay ghi nhận các lỗi sự cố đối với các sản phẩm của hãng ABB.',
      ],
    },
    {
      logo: 'assets/images/schneider-logo.png',
      name: 'Ecodial Advance Calculation',
      descriptions: [
        'Ecodial Advanced Calculation hỗ trợ việc tối ưu hóa trong lựa chọn thiết bị và giảm thiểu '
        + 'chi phí trong quá trình thiết kế và lắp đặt hệ thống điện (sử dụng thư viện sản phẩm của Schneider).',
      ],
    },
    {
      logo: 'assets/images/schneider-logo.png',
      name: 'Sepam Protection Relay – SFT2841 & SFT2826',
      descriptions: [
        'SFT2841 là phần mềm quản lý cấu hình cho tất cả sản phẩm rơ-le bảo vệ Sepam của hãng Schneider.',
        'SFT2826 là phần mềm truy xuất và phân tích các tình huống sự cố trong hệ thống được ghi nhận bởi rơ-le Sepam.',
      ],
    },
    {
      logo: 'assets/images/schneider-logo.png',
      name: 'Easergy Studio',
      descriptions: [
        'Easergy Studio khiến việc cấu hình, tích hợp và '
        + 'giám sát các loại rơ-le bảo vệ MiCOM của hãng Schneider trở nên dễ dàng hơn bao giờ hết.',
      ],
    },
    {
      logo: 'assets/images/siemens-logo.png',
      name: 'SIMARIS Design',
      descriptions: [
        'Phần mềm hỗ trợ tính toán dòng ngắn mạch, trào lưu công suất, rơi áp và cân bằng pha trong hệ thống phân phối.',
      ],
    },
    {
      logo: 'assets/images/siemens-logo.png',
      name: 'SIMARIS Curves',
      descriptions: [
        'Phần mềm trình bày các đặc tuyến và dải định mức và các thông số cài đặt khác nhau cho các thiết bị '
        + 'bảo vệ và cầu chì Hạ thế (sử dụng thư viện sản phẩm của Siemens),',
      ],
    },
    {
      logo: 'assets/images/siemens-logo.png',
      name: 'DIGSI 4',
      descriptions: [
        'Các sản phẩm SIPROTEC của Siemens có thể được cấu hình và đánh giá bằng phần mềm DIGSI 4 '
        + '– Đây là phần mềm được tạo ra để hỗ trợ quản lý hệ thống phân phối điện năng trong công nghiệp.',
      ],
    },
    {
      logo: 'assets/images/siemens-logo.png',
      name: 'SIGRA 4',
      descriptions: [
        'Phần mềm SIGRA 4 giúp mô phỏng các tình huống sự cố được ghi nhận bởi thiết bị bảo vệ với '
        + 'các thông số đo lường và tính năn hỗ trợ phân tích hiệu quả sự kiện ở nhiều góc độ khác nhau.',
      ],
    },
    {
      logo: 'assets/images/qcad-logo.png',
      name: 'QCAD',
      descriptions: [
        'QCAD là một phần mềm hỗ trợ vẽ kỹ thuật miễn phí ở dạng mở dạng hai chiều (2D). '
        + 'Sử dụng QCAD có thể giúp chúng ta tạo ra các bản vẽ kỹ thuật cho tòa nhà, nội thất, cấu kiện cơ khí hoặc các sơ đồ nguyên lý.',
      ],
    },
    {
      logo: 'assets/images/dialux-logo.png',
      name: 'DIALux',
      descriptions: [
        'Phần mềm DIALux là phần mềm hàng đầu phục vụ cho việc thiết kế, tính toán và '
        + 'mô phỏng các hệ thống chiếu sáng trong nhà và ngoài trời.',
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
