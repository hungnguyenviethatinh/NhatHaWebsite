import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-cordex-product',
  templateUrl: './cordex-product.component.html',
  styleUrls: ['./cordex-product.component.less']
})
export class CordexProductComponent implements OnInit {
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
      img: '/assets/images/products/01/02/tab-home.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #ffa500'
      },
      click: () => { this.router.navigate(['/san-pham/cua-so-hong-ngoai']); },
    },
    {
      name: 'CỬA SỔ IR CORDEX',
      img: '/assets/images/products/01/02/tab-1.png',
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
        const section = document.getElementById('cordex-feature');
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
        const section = document.getElementById('cordex-certificate');
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
        const section = document.getElementById('cordex-demo');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
    {
      id: 3,
      active: false,
      name: 'TÀI LIỆU',
      style: { ...this.style },
      click: () => {
        const section = document.getElementById('cordex-document');
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
  ];

  content = {
    page0: {
      img: '/assets/images/products/01/02/1.png ',
      title: 'CỬA SỔ HỒNG NGOẠI – DÒNG IW',
      description: 'Dòng sản phẩm IW là thế hệ mới nhất của Cửa sổ Hồng ngoại Thông minh đến từ '
      + 'CorDEX Instruments. Dòng cửa sổ  hồng ngoại IW hoạt động với mọi thiết bị chụp nhiệt '
      + 'hồng ngoại giúp nâng cao sự an toàn, hiệu quả và độ chính xác cho công tác kiểm tra hệ thống và điện và bảo trì chẩn đoán',
      logos: [
        '/assets/images/products/01/02/Connect Logo.png',
        '/assets/images/products/01/02/HydroGard Logo.png',
        '/assets/images/products/01/02/Queens Award Logo.png',
        '/assets/images/products/01/02/C RUS Logo.png',
        '/assets/images/products/01/02/Sira Logo.png',
      ],
    },
    page1: {
      left: [
        [
          'Thiết Kế Đơn Giản',
          'Cạnh tròn, hình khối mỏng và có màu sắc phù hợp với màu của tủ điện giúp '
          + 'cho việc lắp đặt và tích hợp vào hệ thống hiện hữu một cách dễ dàng.',
        ],
        [
          'Vỏ Bằng Hợp Kim Nhôm Anode',
          'Tủ phân phối điện được cấu tạo bằng kim loại vì thế cửa sổ hồng ngoại cũng nên có cấu tạo tương tự. '
          + 'Cấu trúc này có thể giúp ngăn ngừa rỉ sét và chống giật khi được kết nối đất.',
        ],
        [
          'Nắp Bảo Vệ Trong Suốt',
          'Nhằm bảo vệ tài sản của bạn và tối ưu hóa lợi nhuận. Nắp bảo vệ trong suốt được thiết kế giúp ngăn ngừa '
          + 'các hư hỏng đối với cửa sổ hồng ngoài đồng thời vẫn duy trì khả năng quan sát các thiết bị bên trong',
        ],
        [
          'Bản Lề Lò Xo Nén',
          'Tránh các tình huống bị hạn chế tầm nhìn ở tủ điện, bạn có thể lắp đặt các cửa sổ dòng IW ở bất kỳ hướng nào và cấu trúc '
          + 'bản lề lò xo nén sẽ mở và giữ nắp bảo vệ một cách tự động trong suốt quá trình tiến hành đo đạc.',
        ],
      ],
      center: '/assets/images/products/01/02/2.png',
      right: [
        [
          'Cơ Cấu Khóa Vặn ¼ Vòng Để Mở',
          'Cơ chế khóa vặn ¼ vòng giúp tiết kiệm thời gian quý giá của bạn mỗi khi sử dụng. '
          + 'Chỉ cần một thao tác vặn chìa khóa đơn giản 90 độ thì cửa sổ hồng ngoại đã mở ra sẵn sàng.',
        ],
        [
          'Sản Phẩm Sẵn Sàng Lắp Đặt',
          'Không cần tốn nhiều thời gian hay sợ rơi mất các chi tiết khi tháo lắp. Chỉ cần mở hộp sản phẩm, lắp đặt và sử dụng.',
        ],
        [
          'Thẻ RFID 13.5MHz',
          'Xác định từng vị trí cửa sổ hồng ngoại thông qua thẻ RFID đặc trưng được tích hợp sẵn. '
          + 'Xây dựng hệ thống dữ liệu kết quả bằng bất cứ thiết bị nào có khả năng đọc thẻ RFID 13.5Mhz '
          + 'hoăc tận dụng phần mềm CorDEX CONNECT để giúp bạn quản lý hiệu quả!',
        ],
        [
          'Dải Truyền Sóng Rộng, Phủ HYDROGARD',
          'Có thể sử dụng với tất cả máy ảnh kỹ thuật số, nhiệt hồng ngoại hoặc tia cực tím, lớp phủ '
          + 'HydroGARD được thiết kế nhằm bảo vệ khả năng truyền dẫn tốt nhất.',
          'TM',
        ],
      ],
    },
    page2: [
      {
        title: 'Thông Tin Mô Tả',
        paragraphs: [
          'Dòng sản phẩm IW được sản xuất bằng vật liệu theo tiêu chuẩn công nghiệp được thiết kế '
          + 'để có thể chịu đựng được các vụ nổ điện và được chứng nhận bởi tổ chức UL theo các tiêu chuẩn mới '
          + 'nhất dành cho cửa sổ hồng ngoại. Lắp đặt cửa sổ hồng ngoại thông minh dòng IW giúp tuân thủ các '
          + 'yêu cầu an toàn theo tiêu chuẩn NFPA70E và giúp giảm thiểu việc sử dụng các bộ đồ bảo hộ '
          + 'lao động năng nề.',
          'Bạn có thể tiến hành quan sát bên trong nhờ cấu trúc nắp bảo vệ trong suốt có bản lề lò xo nén '
          + 'an toàn. Với dòng sản phẩm IW, bạn không cần trang bị một kiếng quan sát thứ hai khác vì bạn '
          + 'có thể quan sát thấy vị trí các dao cách ly bên trong và tiến hành khóa kiểm soát nguồn năng lượng '
          + 'theo yêu cầu bằng chính cửa sổ hồng ngoại bạn có. Để tối ưu hóa việc đầu tư vì bạn không cần vứt bỏ '
          + 'cửa số hồng ngoại khi bạn thay thế thiết bị. Với khả năng có thể tháo lắp dễ dàng, cửa sổ dòng IW '
          + 'có thể tái sử dụng nhiều lần.',
          'Phần kiếng quang học của cửa sổ hồng ngoại dòng IW được bảo vệ bởi lớp phủ HYDROGARD™ được thiết kế '
          + 'nhằm ngăn chặn ảnh hưởng ẩm từ môi trường bên ngoài cho phép cửa số có thể lắp đặt và sử dụng '
          + 'trong nhà cũng như ngoài trời.',
        ],
      },
      {
        title: 'Đặc Tính',
        lists: [
          'Cửa sổ hồng ngoại dòng IW được kiểm tra và chứng nhận với các tiêu chuẩn sau: UL50, UL50V and UL1558',
          'Sản xuất bằng vật liệu theo tiêu chuẩn công nghiệp để có thể chịu đựng các vụ nổ điện',
          'Hệ thống khóa vặn ¼ hiệu quả',
          'Từng cửa số có số định dạng riêng',
          'Thử nghiệm với hồ quang 50kA trong 1 giây với mức điện áp 11kV',
          'Tích hợp mạch RFID giúp tạo cơ sở dữ liệu khi tương tác với bất cứ thiết bị có chức năng RFID',
          'Tương thích với phần mềm CorDEX CONNECT™ để có thể truyền dữ liệu và báo cáo chính xác',
          'Kiếng quang học có lớp phủ HYDROGARD™ có dải truyền sóng rộng đảm bảo không bị ảnh hưởng bởi ấm, hơi a-xít và ba-zơ',
          'Cấu trúc nắp bảo vệ có lò xo nén, có thể tự mở và giữ trong suốt quá trình quét nhiệt ở mọi hướng',
          'Tương thích hoạt động với các thiết bị thông minh khác giúp tiết kiệm thời gian và tiền bạc',
        ],
      },
    ],
    page3: [
      {
        img: '/assets/images/products/01/02/Cordex - IW4000.png',
        title: 'CỬA SỔ HỒNG NGOẠI– IW4000',
      },
      {
        img: '/assets/images/products/01/02/Cordex - IW3000.png',
        title: 'CỬA SỔ HỒNG NGOẠI – IW3000',
      },
      {
        img: '/assets/images/products/01/02/Cordex - IW2000.png',
        title: 'CỬA SỔ HỒNG NGOẠI – IW2000',
      },
    ],
    detail: {
      features: [
        {
          thead: [
            'THÔNG TIN QUANG HỌC',
            'IW2000',
            'IW3000',
            'IW4000',
          ],
          tbody: [
            [
              ['Đường kính phần kiếng thủy tinh', 1, 1],
              ['50mm [2.0in]', 1, 1],
              ['80mm [3.2in]', 1, 1],
              ['100mm [3.9in]', 1, 1],
            ],
            [
              ['Đường kính miền nhìn', 1, 1],
              ['45mm [1.8in]', 1, 1],
              ['73mm [2.9in]', 1, 1],
              ['93mm [3.7in]', 1, 1],
            ],
            [
              ['Diện tích miền nhìn', 1, 1],
              ['1591mm2 [2.5in2]', 1, 1],
              ['4186mm2 [5.6in2]', 1, 1],
              ['6794mm2 [9.8in2]', 1, 1],
            ],
            [
              ['Độ dày', 1, 1],
              ['2mm [0.08in]', 1, 1],
              ['2mm [0.08in]', 1, 1],
              ['4mm [0.16in]', 1, 1],
            ],
            [
              ['Lớp phủ HYDROGARDTM'],
              [],
            ],

          ],
        },
        {
          thead: [

          ],
          tbody: [

          ],
        },
        {
          thead: [

          ],
          tbody: [

          ],
        },
      ],
      demos: {
        img: [
          '/assets/images/products/01/02/3.jpg',
          '/assets/images/products/01/02/4.png',
          '/assets/images/products/01/02/5.jpg',
          '/assets/images/products/01/02/6.jpg',
          '/assets/images/products/01/02/7.jpg',
          '/assets/images/products/01/02/8.jpg',
          '/assets/images/products/01/02/9.jpg',
          '/assets/images/products/01/02/10.jpg',
          '/assets/images/products/01/02/11.gif',
          '/assets/images/products/01/02/12.jpg',
          '/assets/images/products/01/02/13.jpg',
          '/assets/images/products/01/02/14.bmp',
        ],
          video: '/assets/images/products/01/02/video.mp4',
      },
      documents: [
        'Brochure – IW Series',
        'Transmission Guide Book',
        'Product Installation Guide – IW2000 Window',
        'Product Installation Guide – IW3000 Window',
        'Product Installation Guide – IW4000 Window',
      ],
    },
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
