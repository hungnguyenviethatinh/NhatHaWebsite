import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-iriss-sentry',
  templateUrl: './iriss-sentry.component.html',
  styleUrls: ['./iriss-sentry.component.less']
})
export class IrissSentryComponent implements OnInit {
  style = {
    'text-align': 'center',
    cursor: 'pointer',
  };

  nzGutter = {
    xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32
  };

  tabs = [
    {
      name: 'SẢN PHẨM CBM',
      img: '/assets/images/products/03/04/tab-home.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #4472c4'
      },
      click: () => { this.router.navigate(['/san-pham/giai-phap-giam-sat-lien-tuc']); },
    },
    {
      name: 'IRISS E SENTRY CONNECT',
      img: '/assets/images/products/03/04/tab-1.jpg',
      style: {
        ...this.style,
      },
      click: () => { console.log('Life is a bed of roses!'); },
    }
  ];

  secondTabs = [
    {
      id: 0,
      active: false,
      name: 'ĐẶC TÍNH',
      style: {
        ...this.style,
        'border-right': '2px solid #fff',
      },
      click: () => {
        const section = document.getElementById('delta-t-feature');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
    {
      id: 1,
      active: false,
      name: 'CHỨNG CHỈ',
      style: {
        ...this.style,
        'border-right': '2px solid #fff',
      },
      click: () => {
        const section = document.getElementById('delta-t-certificate');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
    {
      id: 2,
      active: false,
      name: 'PHIM - HÌNH ẢNH',
      style: {
        ...this.style,
        'border-right': '2px solid #fff',
      },
      click: () => {
        const section = document.getElementById('delta-t-demo');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
    {
      id: 3,
      active: false,
      name: 'TÀI LIỆU',
      style: { ...this.style },
      click: () => {
        const section = document.getElementById('delta-t-document');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
  ];

  content = {
    page1: {
      title: 'E Sentry Connect Phiên Bản Đơn',
      left: [
        [
          'Có thể truy cập từ bất cứ điện thoại thông minh Android có giao tiếp NFC',
          'Phần mềm E Sentry Connect miễn phí và được thiết kế để có thể làm việc được với bất cứ '
          + 'thiết bị sử dụng hệ điều hành Android phiên bản 4.0 Kit Kat và cao hơn.',
        ],
        [
          'Cung cấp cho người kiểm tra các thông tin quan trọng về thiết bị',
          'Tấm thẻ cho phép tất cả thông tin quan trọng về thiết bị có thể được ghi nhận trên thẻ và '
          + 'truy xuất bởi người vận hành trong quá trình kiểm tra bao gồm cả các thông tin liên quan '
          + 'đến các thiết bị phụ trợ như cửa sổ hồng ngoại, mức độ năng lượng hồ qquang điện, các yêu cầu về bảo hộ lao động,v.v…',
        ],
      ],
      center: '/assets/images/products/03/04/2.png',
      right: [
        [
          'Ghi nhận và Lưu trữ các thông tin kiểm tra',
          'Tấm thẻ chứa thông tin chi tiết từ lần kiểm tra trước cũng như cả thông tin ghi chú để '
          + 'người sử dụng có thể bổ sung các thông tin hữu ích cho lần kiểm tra kế tiếp.',
        ],
        [
          'Ghi nhận và Lưu Trữ các Thông Số Đo Lường',
          'Tấm thẻ có thể lưu trữ các thông tin tham khảo phục vụ cho công tác quét nhiệt ví dụ như '
          + 'tỉ lệ truyền dẫn của cửa sổ hồng ngoại, ngưỡng nhiệt độ tối đa cho phép, hệ số bức xạ.',
        ],
        [
          'Tự động lưu trữ thời gian, ngày tháng và thông tin người sử dụng',
          'Thông tin của thiết bị giao tiếp NFC của người sử dụng được lưu trữ tự động trên thẻ '
          + 'E Sentry Connect mỗi khi tiến hành công việc kiểm tra đo lường mới.',
        ],
      ],
    },
    page2: {
      title: 'E Sentry Connect Phiên Bản Đám Mây',
      left: [
        [
          'Phân quyền và Quản lý người sử dụng',
          'Người quản trị có thể cài đặt và phân quyền sử dụng nhằm '
          + 'đảm bảo các thông tin nhạy cảm và quan trọng được bảo vệ và quản lý hợp lý.',
        ],
        [
          'Ghi nhận và Cảnh báo',
          'Các cảnh báo được kích hoạt bởi phần mềm E Sentry Connect App sẽ được gửi lập tức '
          + 'đến người quản trị hệ thống và người sử dụng được phân quyền nhằm đảm bảo phản ứng tức '
          + 'thì để có thể khôi phục lại tình trạng bình thường của thiết bị trong thời gian sớm nhất.',
        ],
        [
          'Kiểm tra và Phân tích dữ liệu nhiệt độ',
          'Tất cả các giá trị lịch sử lưu giữ trên thẻ E Sentry Connect sẽ được gửi lên dữ liệu '
          + 'đám mây và vẽ đồ thị diễn tiến theo thời gian để tham khảo. Dữ liệu này có thể được sử dụng '
          + 'bởi người quản lý nhằm dự đoán thiết bị cần được tiến hành bảo trì hoặc giám sát nhiệt nghiêm ngặt liên tục.',
        ],
      ],
      center: '/assets/images/products/03/04/3.png',
      right: [
        [
          'Xây dựng và Phân công công việc',
          'Phân công cho nhân viên của bạn lộ trình công việc dựa trên tổng thể các '
          + 'dữ liệu được phân loại theo vị trí, trạng thái cảnh báo và nhiều cách khác.',
        ],
        [
          'Lưu trữ dữ liệu tự động',
          'Khi làm việc trong khu vực không có kết nối internet, dữ liệu sẽ được lưu trữ và chuyển tự động '
          + 'lên đám mây  khi có kết nối trở lại.',
        ],
        [
          'Gửi và Nhận thông báo',
          'Dễ dàng và nhanh chóng giao tiếp giữa người quản trị hệ thống và nhân viên kiểm tra '
          + 'hiện trường về những tác vụ được yêu cầu kiểm tra',
        ],
        [
          'Tùy biến trong báo cáo',
          'Hệ thống cho phép tất cả thông tin đã kiểm tra được sao lưu dưới định dạng CSV hoặc XLS '
          + 'để có thể sử dụng trong báo cáo hoặc dùng cho việc cài đặt khi cần thiết.',
        ],
      ],
    },
    detail: {
      demos: {
        img: [
          '/assets/images/products/03/04/5.jpg',
          '/assets/images/products/03/04/6.png',
          '/assets/images/products/03/04/7.png',
          '/assets/images/products/03/04/8.jpg',
          '/assets/images/products/03/04/9.png',
          '/assets/images/products/03/04/10.jpg',
        ],
        video: '/assets/images/products/03/04/video.3gp',
      },
      documents: [
        'Product Data Sheet – E Sentry Connect',
      ],
    },
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
