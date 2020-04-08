import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nh-camera-detail',
  templateUrl: './camera-detail.component.html',
  styleUrls: ['./camera-detail.component.less']
})
export class CameraDetailComponent implements OnInit {
  style = {
    'text-align': 'center',
    cursor: 'pointer',
  };

  open = {
    display: 'block',
    // opacity: 1,
  };

  nzGutter = {
    xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32
  };

  toughpix = {
    cover: {
      left: {
        title: 'Mô Tả Sản Phẩm',
        paragraphs: [
          'TOUGHPIX DIGIHERM là máy chụp ảnh nhiệt và kỹ thuật số kích thước nhỏ, tuy nhỏ gọn có thể '
          + 'bỏ vừa vào bất kỳ túi xách cho công việc nhưng có độ bền cao chịu được tác động. TOUGHPIX DIGITHERM là loại máy hình '
          + 'có thể mang đi bấtcứ đâu và có đủ sức mạnh và sự bền bỉ hỗ trợ bạn hoàn thành công việc bất cứ lúc nào.',
          'Bền bỉ, mạnh mẽ với giá thành hợp lý, CorDEX Digitherm đưa ra một tiêu chuẩn mới dành cho máy chụp '
          + 'hình nhỏ gọn. Các chức năng bao gồm: độ phân giải 5megapixel, đèn flash LED, phối hình thật và nhiệt, '
          + 'kết nối không dây, CorDEX Digitherm '
          + 'giới thiệu một phương án tiếp cận hoàn toàn mới cho việc phát hiện, ghi nhận và chia sẻ thông tin về sự cố.',
          'Thử nghiệm khắc nghiệt với từng chi tiết trong máy chụp hình TOUGHPIX DIGITHERM là mục tiêu khi '
          + 'thiết kế, chất lượng là điều quan trọng nhất. Từ nhiệt độ đông đá -20C và rơi từ độ cao một mét, '
          + 'thử nghiệm tạt nước và bụi bẩn là một trong các bước thử nghiệm theo tiêu chuẩn bảo vệ công nghiệp. '
          + 'TOUGHPIX DIGITHERM đã được thử nghiệm với các yêu cầu khắt khe nhất.',
        ],
      },
      right: {
        img: 'assets/images/products/02/01/01/1.PNG',
      }
    },
    detail: {
      demo: {
        img: [
          'assets/images/products/02/01/01/2.jpg',
          'assets/images/products/02/01/01/3.jpg',
          'assets/images/products/02/01/01/4.gif',
          'assets/images/products/02/01/01/5.png',
          'assets/images/products/02/01/01/6.jpg',
          'assets/images/products/02/01/01/7.jpg',
          'assets/images/products/02/01/01/8.jpg',
          'assets/images/products/02/01/01/9.jpg',
          'assets/images/products/02/01/01/10.jpg',
          'assets/images/products/02/01/01/11.jpg',
          'assets/images/products/02/01/01/12.jpg',
        ],
        video: 'assets/images/products/02/01/01/video.mp4',
      },
      documents: [
        'Brochure – ToughPix DigiTherm Camera',
        'Product User Manual – ToughPix DigiTherm',
      ],
    },
  };

  tc7150 = {
    cover: {
      left: {
        title: 'Mô Tả Sản Phẩm',
        paragraphs: [
          'Nếu bạn cần một thiết bị hỗ trợ bạn điều tra sự cố đáng tin cậy, hiệu quả, chính xác và bền bỉ. '
          + 'Bạn cần một thiết bị có thể giúp bạn phát hiện ra sự cố và chia sẻ kết quả dễ dàng nhanh chóng với '
          + 'nhóm của bạn. Đó là lúc bạn cần dòng máy ảnh nhiệt có độ an toàn cao CorDEX TCSERIES. '
          + 'Thiết bị sẽ giúp bạn phát hiện nhiệt và sự cố trước khi nó xảy ra. '
          + 'Tất cả đều có trong một thiết bị  dùng hàng ngày có độ bền gần như không thể bị phá hủy.',
          'Với các chứng chỉ an toàn tuyệt đối, dòng sản phẩm TC-Series đặt ra các chuẩn mực mới. '
          + 'Chỉ số  chống bụi và nước IP54 giúp bạn an tâm sử dụng máy chụp hình '
          + 'trong bất kể thời tiết nào dù là ngày hay đêm. Nếu bạn lo lắng rằng thiết bị giá trị của bạn '
          + 'có thể bị rơi vỡ và hư hỏng? Không phải trường hợp này, dòng TC-Series đã được thử nghiệm và '
          + 'được chứng nhận không bị hư hỏng khi rơi từ độ cao 1m trên nền bê tông ở nhiệt độ đến những 3 lần!',
        ],
      },
      right: {
        img: 'assets/images/products/02/01/02/1.PNG',
      }
    },
    detail: {
      demo: {
        img: [
          'assets/images/products/02/01/02/2.jpg',
          'assets/images/products/02/01/02/3.jpg',
          'assets/images/products/02/01/02/4.jpg',
          'assets/images/products/02/01/02/5.jpg',
          'assets/images/products/02/01/02/6.jpg',
          'assets/images/products/02/01/02/7.jpg',
          'assets/images/products/02/01/02/8.jpg',
          'assets/images/products/02/01/02/9.jpg',
        ],
        video: 'assets/images/products/02/01/02/video.mp4',
      },
      documents: [
        'Brochure – TC7150 Thermal Camera',
        'Product User Manual – TC7150 Camera',
      ],
    },
  };

  tabs = [
    {
      active: false,
      name: 'SẢN PHẨM CBM',
      img: 'assets/images/products/02/01/tab-home.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #ffa500',
      },
      click: () => { this.router.navigate(['/san-pham/may-do-tinh-trang-thiet-bi']); },
    },
    {
      active: false,
      name: 'MÁY CHỤP NHIỆT CORDEX',
      img: 'assets/images/products/02/01/tab-1.gif',
      style: {
        ...this.style,
        'border-right': '1px dashed #ffa500',
      },
      click: () => { this.router.navigate(['/san-pham/may-chup-hinh-nhiet-cordex']); },
    },
    {
      active: true,
      id: 'toughpix-digiherm',
      name: 'TOUGHPIX DIGITHERM',
      img: 'assets/images/products/02/01/tab-2.jpg',
      content: { ...this.toughpix },
      style: {
        ...this.style,
      },
      click: () => {
        const activeTab = this.tabs.find(t => t.active && t.id !== 'toughpix-digiherm');
        if (activeTab) {
          activeTab.active = false;
          this.tabs.find(t => t.id === 'toughpix-digiherm').active = true;
        }
        this.router.navigate(['/san-pham/may-chup-hinh-nhiet-cordex/chi-tiet'], {
          fragment: 'toughpix-digiherm',
        });
      },
    },
    {
      active: false,
      id: 'infrared-camera-tc7150',
      name: 'TC7150 INFRARED CAMERA',
      img: 'assets/images/products/02/01/tab-3.jpg',
      content: { ...this.tc7150 },
      style: {
        ...this.style,
      },
      click: () => {
        const activeTab = this.tabs.find(t => t.active && t.id !== 'infrared-camera-tc7150');
        if (activeTab) {
          activeTab.active = false;
          this.tabs.find(t => t.id === 'infrared-camera-tc7150').active = true;
        }
        this.router.navigate(['/san-pham/may-chup-hinh-nhiet-cordex/chi-tiet'], {
          fragment: 'infrared-camera-tc7150',
        });
      },
    },
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
        const activeTabId = this.tabs.find(t => t.active).id;
        const sectionId = 'feature-' + activeTabId;
        const section = document.getElementById(sectionId);
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
        const activeTabId = this.tabs.find(t => t.active).id;
        const sectionId = 'certificate-' + activeTabId;
        const section = document.getElementById(sectionId);
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
        const activeTabId = this.tabs.find(t => t.active).id;
        const sectionId = 'demo-' + activeTabId;
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
    {
      id: 3,
      active: false,
      name: 'TÀI LIỆU',
      style: { ...this.style },
      click: () => {
        const activeTabId = this.tabs.find(t => t.active).id;
        const sectionId = 'document-' + activeTabId;
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
    },
  ];

  fragment: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(f => this.fragment = f);
    const activeTab = this.tabs.find(t => t.active && t.id !== this.fragment);
    if (activeTab) {
      activeTab.active = false;
      this.tabs.find(t => t.id === this.fragment).active = true;
    }
  }

  // ngAfterViewInit() {
  //   const sectionId = document.getElementById(this.fragment);
  //   const offsetTop = sectionId.offsetTop;
  //   window.scrollTo(0, offsetTop + 10);
  // }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   const tabIds = this.tabs.map(t => t.id).filter(i => i !== undefined);
  //   tabIds.forEach(id => {
  //     const offsetTop = document.getElementById(id).getBoundingClientRect().top;
  //     if (offsetTop <= 200) {
  //       const activeTab = this.tabs.find(t => t.active && t.id !== id);
  //       if (activeTab) {
  //         activeTab.active = false;
  //         this.tabs.find(t => t.id === id).active = true;
  //         this.router.navigate(['/san-pham/may-chup-hinh-nhiet-cordex/chi-tiet'], {
  //           fragment: id,
  //         });
  //       }
  //     }
  //   });
  // }

}
