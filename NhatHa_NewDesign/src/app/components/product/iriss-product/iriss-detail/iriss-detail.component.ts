import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nh-iriss-detail',
  templateUrl: './iriss-detail.component.html',
  styleUrls: ['./iriss-detail.component.less']
})
export class IrissDetailComponent implements OnInit {
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

  vpt = {
    cover: {
      left: [
        {
          h3: 'Công Nghệ Poly-View System™',
          p: 'Một cách mạng trong công nghệ cửa sổ hồng ngoại, sản phẩm dòng VPT ứng dụng công nghệ độc quyền '
            + 'Poly-View System™ khiến việc quan sát trực tiếp trở nên dễ dàng đồng thời cho phép truyền dẫn tia '
            + 'hồng ngoại trên toàn dải đo.',
        },
        {
          h3: 'Kết Cấu Lưới Trợ Lực Chuẩn Công Nghiệp Được Cấp Bằng Sáng Chế',
          p: 'Dòng cửa sổ VPT có cấu tạo lưới trợ lực chuẩn công nghiệp được cấp bằng sáng chế có độ bền vượt '
            + 'hơn tiêu chuẩn dành cho cửa sổ nhìn của tủ điện với các kích thước 2’’, 3’’ và 4’’.',
        },
        {
          h3: 'Nắp Che Thép Không Gỉ Dễ Khóa Và Cầm Nắm',
          p: 'Dòng cửa sổ hồng ngoại VPT của IRISS có nắp che thép không gỉ dễ khóa và cấm nắm đạt chuẩn IP65/NEMA 4 khi đóng kín. '
            + 'Tấm nắp che cho phép in các nhãn hiệu cá nhân theo yêu cầu dành cho các nhà sản xuất thiết bị.',
        },

      ],
      center: 'assets/images/products/01/01/01/1.png',
      right: [
        {
          h3: 'Chứng Nhận',
          p: 'Cửa sổ hồng ngoại của IRISS đạt nhiều chứng nhận trong ngành công nghiệp từ IEEE (impact & load), UL, cUL, Lloyds, '
            + 'CSA 22.2 14-13 dành cho thiết bị điều khiển trong công nghiệp, chứng thực bởi DNV và ABS.',
        },
        {
          h3: 'Bảo Hành Trọn Đời Vô Điều Kiện',
          p: 'Bảo hành trọn đời không chỉ được áp dụng cho chất lượng lắp đặt cửa sổ hồng ngoại mà còn bao gồm độ bền '
            + 'và độ ổn định quang học trong điều kiện hoạt động bình thường theo đề xuất.',
        },
        {
          h3: 'Tự Hào Sản Xuất Tại Hoa Kỳ',
          p: 'IRISS sản xuất và lắp đặt toàn bộ sản phẩm của mình tại khu văn phòng chính đặt ở Bradenton, FL.',
        },
      ],
    },
    detail: {
      features: [
        {
          th: [
            {
              text: 'VẬT LIỆU',
              colspan: 2
            }
          ],
          tr: [
            [
              'Vỏ và Nắp che cửa sổ hồng ngoại',
              'UL 94 5VA Nylon (switchgear-grade plastic); -40°C (-40°F) to 273°C (523°F); Easy-Grip™ stainless steel cover',
            ],
            [
              'Tấm phim quang học',
              'UL 746 compliant, visual, UV and IR transmissive polymer; -40°C (-40°F) to 325°C (617°F)',
            ],
            [
              'Ron',
              'UL 94 5VA TPE; -40°C (-40°F) to 273°C (523°F)',
            ],
            [
              'Khung',
              '316 stainless steel',
            ],
          ],
        },
        {
          th: [
            {
              text: 'CÁC ĐẶC ĐIỂM KHÁC',
              colspan: 2,
            }
          ],
          tr: [
            [
              'Dải nhiệt độ sử dụng',
              '-40°C (-40°F) to 200°C (392°F)',
            ],
            [
              'Chống Bụi và Nước',
              'IP65 / NEMA 4: closed and when in use',
            ],
          ],
        },
        {
          th: [
            {
              text: 'LOẠI',
              colspan: 1,
            },
            {
              text: 'ĐƯỜNG KÍNH CỬA SỔ',
              colspan: 1,
            },
            {
              text: 'ĐƯỜNG KÍNH MIỀN NHÌN',
              colspan: 1,
            },
            {
              text: 'ĐỘ DÀY CỬA SỔ',
              colspan: 1,
            },
          ],
          tr: [
            ['VPT-50', '9.1 cm (3.6 in)', '5.1 cm (2.0 in)', '.6 cm (1.0 in)'],
            ['VPT-75', '12.1 cm (4.8 in)', '7.6 cm (3.0 in)', '.6 cm (1.0 in)'],
            ['VPT-100', '15.1 cm (5.95 in)', '10.2 cm (4.0 in)', '.6 cm (1.0 in)'],
          ],
        },
      ],
      certificates: {
        img: [
          'assets/images/products/cer-1.gif',
          'assets/images/products/cer-2.png',
          'assets/images/products/cer-3.png',
          'assets/images/products/cert-4.png',
          'assets/images/products/cert-5.png',
        ],
        tables: [
          {
            th: [
              {
                text: 'American Bureau of Shipping [ABS] Approved',
                colspan: 1
              }
            ],
            tr: [
              ['Certificate No. 11-HS807296-PDA'],
            ],
          },
          {
            th: [
              {
                text: 'American Society of Testing and Materials (ASTM)',
                colspan: 2
              }
            ],
            tr: [
              [
                'ASTM F2281-2004 (2012)',
                'Standard Specification for Stainless Steel and Nickel Alloy Bolts, '
                + 'Hex Cap Screws and Studs, for Heat Resistance and High Temperature Applications',
              ],
            ],
          },
          {
            th: [
              {
                text: 'Canadian Standards Association (CSA)',
                colspan: 2
              }
            ],
            tr: [
              ['CSA-C22.2 No. 14-13', 'Industrial Control Equipment – 12th Ed.'],
              ['CSA-C22.2 No. 94-M91', 'Special Purpose Enclosures – 4th Ed.'],
              ['CSA-C22.2 No. 94.1-07', 'Enclosures for Electrical Equipment'],
              ['CSA-C22.2 No. 94.2-07', 'Enclosures for Electrical Equipment'],
            ],
          },
          {
            th: [
              {
                text: 'Det Norske Veritas (DNV) GL',
                colspan: 2
              }
            ],
            tr: [
              ['P261.1E', 'Maritime, Vessel and Offshore Applications Approved'],
            ],
          },
          {
            th: [
              {
                text: 'Institute of Electrical and Electronics Engineers (IEEE)',
                colspan: 2
              }
            ],
            tr: [
              [
                'IEEE C37.20.2.a.3.6',
                'Mandatory impact and load test requirements for visual viewing panes for '
                + 'Metal-Clad and Station Type Cubicle Switchgear',
              ],
            ],
          },
          {
            th: [
              {
                text: 'International Electrochemical Commission (IEC, IP Code)',
                colspan: 2
              }
            ],
            tr: [
              [
                'IP65/NEMA 4',
                'Enclosures constructed for either indoor or outdoor use to provide a degree of '
                + 'protection to personnel against incidental contact with the enclosed equipment',
              ],
              [
                'IIP22/IP2X',
                'Minimum requirements for the design of electrical accessories for indoor use',
              ],
              [
                'ANSI/IEC 60529-2004 (R2011)',
                'Degrees of Protection Provided by Enclosures (IP Code 65)',
              ],
            ],
          },
          {
            th: [
              {
                text: 'International Standards Organization (ISO)',
                colspan: 2
              }
            ],
            tr: [
              ['IP65/NEMA 4', 'EISO 9001:2008 Certificate No. 74 300 3797'],
            ],
          },
          {
            th: [
              {
                text: 'Lloyd\'s of London',
                colspan: 1
              }
            ],
            tr: [
              ['Certificate No. 05/00026'],
            ],
          },
          {
            th: [
              {
                text: 'National Electrical Manufacturers Association (NEMA)',
                colspan: 1
              }
            ],
            p: [
              ['Type 1', ''],
              ['Type 3:', ' Viewport may be marked Rain-tight'],
              ['Type 3R:', ' Viewport may be marked Rainproof'],
              ['Type 2, 5, 12, 12K and 13: ', 'Viewport may be marked Drip-tight or Dust-tight'],
              ['', 'Ratings above are when installed on a flat surface of a suitably rated enclosure.'],
            ],
          },
          {
            th: [
              {
                text: 'Underwriter\'s Laboratories (UL) and Canadian Underwriters Laboratories (cUL)',
                colspan: 2
              }
            ],
            tr: [
              ['UL 50V', 'Infrared Viewports'],
              ['UL 50E', 'Enclosures for Electrical Equipment, Environmental Considerations'],
              ['UL 746C', 'Polymeric Materials - Use in Electrical Equipment Evaluations'],
              ['UL 1558', 'Metal-Enclosed Low-Voltage Power Circuit Breaker Switchgear'],
              ['UL 508A/ANSI UL 508A', 'Industrial Control Panels'],
              ['UL 94-2013', 'Tests for Flammability of Plastic Materials for Parts in Devices and Appliances'],
              ['UL 746A-2012', 'Polymeric Materials - Short Term Property Evaluations'],
            ],
          },
          {
            th: [
              {
                text: 'Arc Containment Tested',
                colspan: 2
              }
            ],
            tr: [
              ['IEC 62271-200', 'Arc Flash Spectest 1.1 Second Duration'],
              ['IEC 60262271-200', '63kA, 15kV for 30 cycles at 60Hz'],
              ['IEC 60298 Appendix A', '63kA, 15kV for 30 cycles at 60Hz'],
              ['IEE C37.20.7 Type 2B', '63kA, 15kV for 30 cycler at 60Hz'],
            ],
          },
        ],
      },
      demos: {
        img: [
          'assets/images/products/01/01/01/2.jpg',
          'assets/images/products/01/01/01/3.png',
          'assets/images/products/01/01/01/4.jpg',
          'assets/images/products/01/01/01/5.jpg',
          'assets/images/products/01/01/01/6.jpg',
          'assets/images/products/01/01/01/7.jpg',
        ],
        video: 'assets/images/products/01/01/01/video.mp4',
      },
      documents: [
        'Product Data Sheet – VPT Series',
        'Product Specification Sheet – VPT Series',
        'Product Installation Guide – VPT Series',
      ],
    },
  };

  capCt = {
    cover: {
      left: [
        {
          h3: 'Linh Hoạt và Chắc Chắn',
          p: 'Dòng CAP-CT có kích thước 4”, 6”, 12” hoặc 24”.',
        },
        {
          h3: 'Truyền Dẫn Cố Định và Ổn Định (FAST)',
          p: 'Vượt trội so với dòng sản phẩm truyền thống chuẩn công nghiệp CAP trước đây, '
            + 'dòng CAP CT có diện tích miền nhìn lớn nhất với tấm phim quang học dạng trong suốt.',
        },
        {
          h3: 'Công Nghệ Poly-View System™',
          p: 'Tấm phim polyme hồng ngoại áp dụng công nghệ Poly-View System™ được kết hợp với '
            + 'lưới trợ lực chuẩn công nghiệp cho phép làm việc với bất cứ máy chụp hình nhiệt '
            + 'để giám sát tình trạng thiết bị điện sâu bên trong.',
        },

      ],
      center: 'assets/images/products/01/01/02/1.png',
      right: [
        {
          h3: 'Trường Quan Sát Tuyệt Vời',
          p: 'Khung nhìn hình chữ nhật cung cấp một trường nhìn rộng và '
            + 'tốt hơn nhiều khi so sánh với các cửa sổ hồng ngoại dạng tròn truyền thống.',
        },
        {
          h3: 'Bảo Hành Trọn Đời Vô Điều Kiện',
          p: 'Bảo hành trọn đời không chỉ được áp dụng cho chất lượng lắp đặt cửa sổ hồng ngoại mà còn bao gồm độ bền '
            + 'và độ ổn định quang học trong điều kiện hoạt động bình thường theo đề xuất.',
        },
        {
          h3: 'Tự Hào Sản Xuất Tại Hoa Kỳ',
          p: 'IRISS sản xuất và lắp đặt toàn bộ sản phẩm của mình tại khu văn phòng chính đặt ở Bradenton, FL.',
        },
      ],
    },
    detail: {
      features: [
        {
          th: [
            {
              text: 'VẬT LIỆU',
              colspan: 2
            }
          ],
          tr: [
            [
              'Vỏ và Nắp che cửa sổ hồng ngoại',
              'Standard product constructed of aluminum; custom materials available',
            ],
            [
              'Tấm phim quang học',
              'UL 746 compliant, visual, UV and IR transmissive polymer; -40°C (-40°F) to 325°C (617°F)',
            ],
            [
              'Ron',
              'UL 94 5VA TPE; -40°C (-40°F) to 273°C (523°F)',
            ],
            [
              'Khung',
              '316 stainless steel',
            ],
          ],
        },
        {
          th: [
            {
              text: 'CÁC ĐẶC ĐIỂM KHÁC',
              colspan: 2,
            }
          ],
          tr: [
            [
              'Dải nhiệt độ sử dụng',
              '-40°C (-40°F) to 200°C (392°F)',
            ],
            [
              'Chống Bụi và Nước',
              'IP65 / NEMA 4',
            ],
          ],
        },
        {
          th: [
            {
              text: 'LOẠI',
              colspan: 1,
            },
            {
              text: 'KÍCH THƯỚC MIỀN NHÌN',
              colspan: 1,
            },
            {
              text: 'KÍCH THƯỚC TỔNG THỂ',
              colspan: 1,
            },
          ],
          tr: [
            ['CAP-CT-4', 'A= 9.68 cm (3.81 in), B= 9.77 cm (3.85 in)', 'C= 15.23 cm (6 in), D= 15.24 cm (6 in)'],
            ['CAP-CT-6', 'A= 9.1 cm (3.6 in), B= 15 cm (5.9 in)', 'C= 16 cm (6.3 in), D= 21.8 cm (8.6 in)'],
            ['CAP-CT-12', 'A= 23.6 cm (9.3 in), B= 12.7 cm (5.0 in)', 'C= 30.5 cm (12.0 in), D= 20.6 cm (8.1 in)'],
            ['CAP-CT-24', 'A= 53 cm (20.9 in), B= 15 cm (5.9 in)', 'C= 61 cm (24.0 in), D= 21.8 cm (8.6 in)'],
          ],
        },
      ],
      certificates: {
        img: [
          'assets/images/products/cer-1.gif',
          'assets/images/products/cer-2.png',
          'assets/images/products/cer-3.png',
          'assets/images/products/cert-4.png',
          'assets/images/products/cert-5.png',
        ],
        tables: [
          {
            th: [
              {
                text: 'American Bureau of Shipping [ABS] Approved',
                colspan: 1
              }
            ],
            tr: [
              ['Certificate No. 11-HS807296-PDA'],
            ],
          },
          {
            th: [
              {
                text: 'American Society of Testing and Materials (ASTM)',
                colspan: 2
              }
            ],
            tr: [
              [
                'ASTM F2281-2004 (2012)',
                'Standard Specification for Stainless Steel and Nickel Alloy Bolts, '
                + 'Hex Cap Screws and Studs, for Heat Resistance and High Temperature Applications',
              ],
            ],
          },
          {
            th: [
              {
                text: 'Canadian Standards Association (CSA)',
                colspan: 2
              }
            ],
            tr: [
              ['CSA-C22.2 No. 14-13', 'Industrial Control Equipment – 12th Ed.'],
              ['CSA-C22.2 No. 94-M91', 'Special Purpose Enclosures – 4th Ed.'],
              ['CSA-C22.2 No. 94.1-07', 'Enclosures for Electrical Equipment'],
              ['CSA-C22.2 No. 94.2-07', 'Enclosures for Electrical Equipment'],
            ],
          },
          {
            th: [
              {
                text: 'Det Norske Veritas (DNV) GL',
                colspan: 2
              }
            ],
            tr: [
              ['P261.1E', 'Maritime, Vessel and Offshore Applications Approved'],
            ],
          },
          {
            th: [
              {
                text: 'Institute of Electrical and Electronics Engineers (IEEE)',
                colspan: 2
              }
            ],
            tr: [
              [
                'IEEE C37.20.2.a.3.6',
                'Mandatory impact and load test requirements for visual viewing panes for '
                + 'Metal-Clad and Station Type Cubicle Switchgear',
              ],
            ],
          },
          {
            th: [
              {
                text: 'International Electrochemical Commission (IEC, IP Code)',
                colspan: 2
              }
            ],
            tr: [
              [
                'IP65/NEMA 4',
                'Enclosures constructed for either indoor or outdoor use to provide a degree of '
                + 'protection to personnel against incidental contact with the enclosed equipment',
              ],
              [
                'IIP22/IP2X',
                'Minimum requirements for the design of electrical accessories for indoor use',
              ],
              [
                'ANSI/IEC 60529-2004 (R2011)',
                'Degrees of Protection Provided by Enclosures (IP Code 65)',
              ],
            ],
          },
          {
            th: [
              {
                text: 'International Standards Organization (ISO)',
                colspan: 2
              }
            ],
            tr: [
              ['IP65/NEMA 4', 'EISO 9001:2008 Certificate No. 74 300 3797'],
            ],
          },
          {
            th: [
              {
                text: 'Lloyd\'s of London',
                colspan: 1
              }
            ],
            tr: [
              ['Certificate No. 05/00026'],
            ],
          },
          {
            th: [
              {
                text: 'National Electrical Manufacturers Association (NEMA)',
                colspan: 1
              }
            ],
            p: [
              ['Type 1', ''],
              ['Type 3:', ' Viewport may be marked Rain-tight'],
              ['Type 3R:', ' Viewport may be marked Rainproof'],
              ['Type 2, 5, 12, 12K and 13: ', 'Viewport may be marked Drip-tight or Dust-tight'],
              ['', 'Ratings above are when installed on a flat surface of a suitably rated enclosure.'],
            ],
          },
          {
            th: [
              {
                text: 'Underwriter\'s Laboratories (UL) and Canadian Underwriters Laboratories (cUL)',
                colspan: 2
              }
            ],
            tr: [
              ['UL 50V', 'Infrared Viewports'],
              ['UL 50E', 'Enclosures for Electrical Equipment, Environmental Considerations'],
              ['UL 746C', 'Polymeric Materials - Use in Electrical Equipment Evaluations'],
              ['UL 1558', 'Metal-Enclosed Low-Voltage Power Circuit Breaker Switchgear'],
              ['UL 508A/ANSI UL 508A', 'Industrial Control Panels'],
              ['UL 94-2013', 'Tests for Flammability of Plastic Materials for Parts in Devices and Appliances'],
              ['UL 746A-2012', 'Polymeric Materials - Short Term Property Evaluations'],
            ],
          },
          {
            th: [
              {
                text: 'Arc Containment Tested',
                colspan: 2
              }
            ],
            tr: [
              ['IEC 62271-200', 'Arc Flash Spectest 1.1 Second Duration'],
              ['IEC 60262271-200', '63kA, 15kV for 30 cycles at 60Hz'],
              ['IEC 60298 Appendix A', '63kA, 15kV for 30 cycles at 60Hz'],
              ['IEE C37.20.7 Type 2B', '63kA, 15kV for 30 cycler at 60Hz'],
            ],
          },
        ],
      },
      demos: {
        img: [
          'assets/images/products/01/01/02/1.png',
          'assets/images/products/01/01/02/2.jpg',
          'assets/images/products/01/01/02/3.png',
          'assets/images/products/01/01/02/4.jpg',
          'assets/images/products/01/01/02/5.jpg',
          'assets/images/products/01/01/02/6.jpg',
          'assets/images/products/01/01/02/7.jpg',
          'assets/images/products/01/01/02/8.jpg',
          'assets/images/products/01/01/02/9.jpg',
        ],
        video: 'assets/images/products/01/01/02/video.mp4',
      },
      documents: [
        'Product Data Sheet – CAP-CT Series',
        'Product Specification Sheet – CAP-CT Series',
        'Product Installation Guide – CAP-CT Series',
      ],
    },
  };

  capEnv = {
    cover: {
      left: [
        {
          h3: 'Linh Hoạt và Chắc Chắn',
          p: 'Cửa sổ hồng ngoại CAP-ENV với kích thước 4”, 6”, 12” hoặc 24” là loại cửa sổ hồng ngoại bền nhất và '
            + 'lớn nhất hiện có trên thị trường. Loại cửa sổ này là sản phẩm duy n'
            + 'hất đạt tiêu chuẩn thử nghiệm độ bền chịu hồ quang điện với thời gian thử nghiệm gấp đôi theo tiêu chuẩn IEC 62271-200.',
        },
        {
          h3: 'Truyền Dẫn Cố Định và Ổn Định (FAST)',
          p: 'Cửa số hồng ngoại CAP-ENV giữ nguyên khả năng truyền dẫn cố định và ổn định sóng hồng ngoại '
            + 'trong suốt dòng đời hoạt động, cũng như chịu được tác động của nước, sóng siêu âm và không bị hao mòn theo thời gian.',
        },
        {
          h3: 'Công Nghệ Poly-View System™',
          p: 'Tấm phim polyme hồng ngoại áp dụng công nghệ Poly-View System™ được kết hợp với lưới trợ lực '
            + 'chuẩn công nghiệp cho phép làm việc với bất cứ máy chụp hình nhiệt để giám sát tình trạng thiết '
            + 'bị điện sâu bên trong. Tấm phim polyme của '
            + 'chúng tôi cho phép truyền dẫn sóng hồng ngoại ở mọi dải cùng với tia cực tím và cho phép quan sát trực tiếp.',
        },

      ],
      center: 'assets/images/products/01/01/03/1.png',
      right: [
        {
          h3: 'Trường Quan Sát Tuyệt Vời',
          p: 'Khung nhìn hình chữ nhật cung cấp một trường nhìn rộng và '
            + 'tốt hơn nhiều khi so sánh với các cửa sổ hồng ngoại dạng tròn truyền thống.',
        },
        {
          h3: 'Bảo Hành Trọn Đời Vô Điều Kiện',
          p: 'Bảo hành trọn đời không chỉ được áp dụng cho chất lượng lắp đặt cửa sổ hồng ngoại mà còn bao gồm độ bền '
            + 'và độ ổn định quang học trong điều kiện hoạt động bình thường theo đề xuất.',
        },
        {
          h3: 'Tự Hào Sản Xuất Tại Hoa Kỳ',
          p: 'IRISS sản xuất và lắp đặt toàn bộ sản phẩm của mình tại khu văn phòng chính đặt ở Bradenton, FL.',
        },
      ],
    },
    detail: {
      features: [
        {
          th: [
            {
              text: 'VẬT LIỆU',
              colspan: 2
            }
          ],
          tr: [
            [
              'Vỏ và Nắp che cửa sổ hồng ngoại',
              'Standard product constructed of aluminum; custom materials available',
            ],
            [
              'Tấm phim quang học',
              'UL 746 compliant, visual, UV and IR transmissive polymer; -40°C (-40°F) to 325°C (617°F)',
            ],
            [
              'Ron',
              'UL 94 5VA TPE; -40°C (-40°F) to 273°C (523°F)',
            ],
            [
              'Khung',
              '316 stainless steel',
            ],
          ],
        },
        {
          th: [
            {
              text: 'CÁC ĐẶC ĐIỂM KHÁC',
              colspan: 2,
            }
          ],
          tr: [
            [
              'Dải nhiệt độ sử dụng',
              '-40°C (-40°F) to 200°C (392°F)',
            ],
            [
              'Chống Bụi và Nước',
              'IP67 / NEMA 6',
            ],
          ],
        },
        {
          th: [
            {
              text: 'LOẠI',
              colspan: 1,
            },
            {
              text: 'KÍCH THƯỚC MIỀN NHÌN',
              colspan: 1,
            },
            {
              text: 'KÍCH THƯỚC TỔNG THỂ',
              colspan: 1,
            },
          ],
          tr: [
            ['CAP-ENV-4', 'A= 9.68 cm (3.81 in), B= 9.77 cm (3.85 in)', 'C= 15.23 cm (6 in), D= 15.24 cm (6 in)'],
            ['CAP-ENV-6', 'A= 9.1 cm (3.6 in), B= 15 cm (5.9 in)', 'C= 16 cm (6.3 in), D= 21.8 cm (8.6 in)'],
            ['CAP-ENV-12', 'A= 23.6 cm (9.3 in), B= 12.7 cm (5.0 in)', 'C= 30.5 cm (12.0 in), D= 20.6 cm (8.1 in)'],
            ['CAP-ENV-24', 'A= 53 cm (20.9 in), B= 15 cm (5.9 in)', 'C= 61 cm (24.0 in), D= 21.8 cm (8.6 in)'],
          ],
        },
      ],
      certificates: {
        img: [
          'assets/images/products/cer-1.gif',
          'assets/images/products/cer-2.png',
          'assets/images/products/cer-3.png',
          'assets/images/products/cert-4.png',
          'assets/images/products/cert-5.png',
        ],
        tables: [
          {
            th: [
              {
                text: 'American Bureau of Shipping [ABS] Approved',
                colspan: 1
              }
            ],
            tr: [
              ['Certificate No. 11-HS807296-PDA'],
            ],
          },
          {
            th: [
              {
                text: 'American Society of Testing and Materials (ASTM)',
                colspan: 2
              }
            ],
            tr: [
              [
                'ASTM F2281-2004 (2012)',
                'Standard Specification for Stainless Steel and Nickel Alloy Bolts, '
                + 'Hex Cap Screws and Studs, for Heat Resistance and High Temperature Applications',
              ],
            ],
          },
          {
            th: [
              {
                text: 'Canadian Standards Association (CSA)',
                colspan: 2
              }
            ],
            tr: [
              ['CSA-C22.2 No. 14-13', 'Industrial Control Equipment – 12th Ed.'],
              ['CSA-C22.2 No. 94-M91', 'Special Purpose Enclosures – 4th Ed.'],
              ['CSA-C22.2 No. 94.1-07', 'Enclosures for Electrical Equipment'],
              ['CSA-C22.2 No. 94.2-07', 'Enclosures for Electrical Equipment'],
            ],
          },
          {
            th: [
              {
                text: 'Det Norske Veritas (DNV) GL',
                colspan: 2
              }
            ],
            tr: [
              ['P261.1E', 'Maritime, Vessel and Offshore Applications Approved'],
            ],
          },
          {
            th: [
              {
                text: 'Institute of Electrical and Electronics Engineers (IEEE)',
                colspan: 2
              }
            ],
            tr: [
              [
                'IEEE C37.20.2.a.3.6',
                'Mandatory impact and load test requirements for visual viewing panes for '
                + 'Metal-Clad and Station Type Cubicle Switchgear',
              ],
            ],
          },
          {
            th: [
              {
                text: 'International Electrochemical Commission (IEC, IP Code)',
                colspan: 2
              }
            ],
            tr: [
              [
                'IP65/NEMA 4',
                'Enclosures constructed for either indoor or outdoor use to provide a degree of '
                + 'protection to personnel against incidental contact with the enclosed equipment',
              ],
              [
                'IIP22/IP2X',
                'Minimum requirements for the design of electrical accessories for indoor use',
              ],
              [
                'ANSI/IEC 60529-2004 (R2011)',
                'Degrees of Protection Provided by Enclosures (IP Code 65)',
              ],
            ],
          },
          {
            th: [
              {
                text: 'International Standards Organization (ISO)',
                colspan: 2
              }
            ],
            tr: [
              ['IP65/NEMA 4', 'EISO 9001:2008 Certificate No. 74 300 3797'],
            ],
          },
          {
            th: [
              {
                text: 'Lloyd\'s of London',
                colspan: 1
              }
            ],
            tr: [
              ['Certificate No. 05/00026'],
            ],
          },
          {
            th: [
              {
                text: 'National Electrical Manufacturers Association (NEMA)',
                colspan: 1
              }
            ],
            p: [
              ['Type 1', ''],
              ['Type 3:', ' Viewport may be marked Rain-tight'],
              ['Type 3R:', ' Viewport may be marked Rainproof'],
              ['Type 2, 5, 12, 12K and 13: ', 'Viewport may be marked Drip-tight or Dust-tight'],
              ['', 'Ratings above are when installed on a flat surface of a suitably rated enclosure.'],
            ],
          },
          {
            th: [
              {
                text: 'Underwriter\'s Laboratories (UL) and Canadian Underwriters Laboratories (cUL)',
                colspan: 2
              }
            ],
            tr: [
              ['UL 50V', 'Infrared Viewports'],
              ['UL 50E', 'Enclosures for Electrical Equipment, Environmental Considerations'],
              ['UL 746C', 'Polymeric Materials - Use in Electrical Equipment Evaluations'],
              ['UL 1558', 'Metal-Enclosed Low-Voltage Power Circuit Breaker Switchgear'],
              ['UL 508A/ANSI UL 508A', 'Industrial Control Panels'],
              ['UL 94-2013', 'Tests for Flammability of Plastic Materials for Parts in Devices and Appliances'],
              ['UL 746A-2012', 'Polymeric Materials - Short Term Property Evaluations'],
            ],
          },
          {
            th: [
              {
                text: 'Arc Containment Tested',
                colspan: 2
              }
            ],
            tr: [
              ['IEC 62271-200', 'Arc Flash Spectest 1.1 Second Duration'],
              ['IEC 60262271-200', '63kA, 15kV for 30 cycles at 60Hz'],
              ['IEC 60298 Appendix A', '63kA, 15kV for 30 cycles at 60Hz'],
              ['IEE C37.20.7 Type 2B', '63kA, 15kV for 30 cycler at 60Hz'],
            ],
          },
        ],
      },
      demos: {
        img: [
          'assets/images/products/01/01/03/7.png',
          'assets/images/products/01/01/03/2.jpg',
          'assets/images/products/01/01/03/3.jpeg',
          'assets/images/products/01/01/03/4.png',
          'assets/images/products/01/01/03/5.jpg',
          'assets/images/products/01/01/03/6.jpg',
          'assets/images/products/01/01/03/1.png',
        ],
        video: 'assets/images/products/01/01/03/video.mp4',
      },
      documents: [
        'Product Data Sheet – CAP-ENV Series',
        'Product Specification Sheet – CAP-ENV Series',
        'Product Installation Guide – CAP-ENV Series',
      ],
    },
  };

  flexIr = {
    cover: {
      left: [
        {
          h3: 'Bền Vững và Đa Dạng',
          p: 'Dòng CAP-F được thiết kế để đáp ứng các ứng dụng đặc thù với kích thước có thể tùy biến theo yêu cầu của bạn.',
        },
        {
          h3: 'Truyền Dẫn Cố Định và Ổn Định (FAST)',
          p: 'Dòng CAP-F được thiết kế đặc biệt cho phép truyền dẫn sóng hồng ngoại, cực tím '
            + 'và quan sát trực tiếp tử bên ngoài khi thiết bị vẫn đang có điện và được cách ly an toàn nhằm '
            + 'đảm bảo người thực hiện công tác không chịu rủi ro nguy hiểm điện giật hoặc chảy nổ do hồ quang điện.',
        },
        {
          h3: 'Công Nghệ Poly-View System™',
          p: 'Tấm phim polyme hồng ngoại áp dụng công nghệ Poly-View System™ được kết hợp với lưới trợ lực chuẩn công nghiệp '
            + 'cho phép làm việc với bất cứ máy chụp hình nhiệt để giám sát tình trạng thiết bị điện sâu bên trong.',
        },

      ],
      center: 'assets/images/products/01/01/04/1.png',
      right: [
        {
          h3: 'Trường Quan Sát Tuyệt Vời',
          p: 'Khung nhìn hình chữ nhật cung cấp một trường nhìn rộng và '
            + 'tốt hơn nhiều khi so sánh với các cửa sổ hồng ngoại dạng tròn truyền thống.',
        },
        {
          h3: 'Bảo Hành Trọn Đời Vô Điều Kiện',
          p: 'Bảo hành trọn đời không chỉ được áp dụng cho chất lượng lắp đặt cửa sổ hồng ngoại mà còn bao gồm độ bền '
            + 'và độ ổn định quang học trong điều kiện hoạt động bình thường theo đề xuất.',
        },
        {
          h3: 'Tự Hào Sản Xuất Tại Hoa Kỳ',
          p: 'IRISS sản xuất và lắp đặt toàn bộ sản phẩm của mình tại khu văn phòng chính đặt ở Bradenton, FL.',
        },
      ],
    },
    detail: {
      features: [
        {
          th: [
            {
              text: 'VẬT LIỆU',
              colspan: 2
            }
          ],
          tr: [
            [
              'Vỏ và Nắp che cửa sổ hồng ngoại',
              'Standard product constructed of aluminum; custom materials available',
            ],
            [
              'Tấm phim quang học',
              'UL 746 compliant, visual, UV and IR transmissive polymer; -40°C (-40°F) to 325°C (617°F)',
            ],
            [
              'Ron',
              'UL 94 5VA TPE; -40°C (-40°F) to 273°C (523°F)',
            ],
            [
              'Khung',
              '316 stainless steel',
            ],
          ],
        },
        {
          th: [
            {
              text: 'CÁC ĐẶC ĐIỂM KHÁC',
              colspan: 2,
            }
          ],
          tr: [
            [
              'Dải nhiệt độ sử dụng',
              '-40°C (-40°F) to 200°C (392°F)',
            ],
            [
              'Chống Bụi và Nước',
              'IP67 / NEMA 6',
            ],
          ],
        },
      ],
      certificates: {
        img: [
          'assets/images/products/cer-1.gif',
          'assets/images/products/cer-2.png',
          'assets/images/products/cer-3.png',
          'assets/images/products/cert-4.png',
          'assets/images/products/cert-5.png',
        ],
        tables: [
          {
            th: [
              {
                text: 'American Bureau of Shipping [ABS] Approved',
                colspan: 1
              }
            ],
            tr: [
              ['Certificate No. 11-HS807296-PDA'],
            ],
          },
          {
            th: [
              {
                text: 'American Society of Testing and Materials (ASTM)',
                colspan: 2
              }
            ],
            tr: [
              [
                'ASTM F2281-2004 (2012)',
                'Standard Specification for Stainless Steel and Nickel Alloy Bolts, '
                + 'Hex Cap Screws and Studs, for Heat Resistance and High Temperature Applications',
              ],
            ],
          },
          {
            th: [
              {
                text: 'Canadian Standards Association (CSA)',
                colspan: 2
              }
            ],
            tr: [
              ['CSA-C22.2 No. 14-13', 'Industrial Control Equipment – 12th Ed.'],
              ['CSA-C22.2 No. 94-M91', 'Special Purpose Enclosures – 4th Ed.'],
              ['CSA-C22.2 No. 94.1-07', 'Enclosures for Electrical Equipment'],
              ['CSA-C22.2 No. 94.2-07', 'Enclosures for Electrical Equipment'],
            ],
          },
          {
            th: [
              {
                text: 'Det Norske Veritas (DNV) GL',
                colspan: 2
              }
            ],
            tr: [
              ['P261.1E', 'Maritime, Vessel and Offshore Applications Approved'],
            ],
          },
          {
            th: [
              {
                text: 'Institute of Electrical and Electronics Engineers (IEEE)',
                colspan: 2
              }
            ],
            tr: [
              [
                'IEEE C37.20.2.a.3.6',
                'Mandatory impact and load test requirements for visual viewing panes for '
                + 'Metal-Clad and Station Type Cubicle Switchgear',
              ],
            ],
          },
          {
            th: [
              {
                text: 'International Electrochemical Commission (IEC, IP Code)',
                colspan: 2
              }
            ],
            tr: [
              [
                'IP65/NEMA 4',
                'Enclosures constructed for either indoor or outdoor use to provide a degree of '
                + 'protection to personnel against incidental contact with the enclosed equipment',
              ],
              [
                'IIP22/IP2X',
                'Minimum requirements for the design of electrical accessories for indoor use',
              ],
              [
                'ANSI/IEC 60529-2004 (R2011)',
                'Degrees of Protection Provided by Enclosures (IP Code 65)',
              ],
            ],
          },
          {
            th: [
              {
                text: 'International Standards Organization (ISO)',
                colspan: 2
              }
            ],
            tr: [
              ['IP65/NEMA 4', 'EISO 9001:2008 Certificate No. 74 300 3797'],
            ],
          },
          {
            th: [
              {
                text: 'Lloyd\'s of London',
                colspan: 1
              }
            ],
            tr: [
              ['Certificate No. 05/00026'],
            ],
          },
          {
            th: [
              {
                text: 'National Electrical Manufacturers Association (NEMA)',
                colspan: 1
              }
            ],
            p: [
              ['Type 1', ''],
              ['Type 3:', ' Viewport may be marked Rain-tight'],
              ['Type 3R:', ' Viewport may be marked Rainproof'],
              ['Type 2, 5, 12, 12K and 13: ', 'Viewport may be marked Drip-tight or Dust-tight'],
              ['', 'Ratings above are when installed on a flat surface of a suitably rated enclosure.'],
            ],
          },
          {
            th: [
              {
                text: 'Underwriter\'s Laboratories (UL) and Canadian Underwriters Laboratories (cUL)',
                colspan: 2
              }
            ],
            tr: [
              ['UL 50V', 'Infrared Viewports'],
              ['UL 50E', 'Enclosures for Electrical Equipment, Environmental Considerations'],
              ['UL 746C', 'Polymeric Materials - Use in Electrical Equipment Evaluations'],
              ['UL 1558', 'Metal-Enclosed Low-Voltage Power Circuit Breaker Switchgear'],
              ['UL 508A/ANSI UL 508A', 'Industrial Control Panels'],
              ['UL 94-2013', 'Tests for Flammability of Plastic Materials for Parts in Devices and Appliances'],
              ['UL 746A-2012', 'Polymeric Materials - Short Term Property Evaluations'],
            ],
          },
          {
            th: [
              {
                text: 'Arc Containment Tested',
                colspan: 2
              }
            ],
            tr: [
              ['IEC 62271-200', 'Arc Flash Spectest 1.1 Second Duration'],
              ['IEC 60262271-200', '63kA, 15kV for 30 cycles at 60Hz'],
              ['IEC 60298 Appendix A', '63kA, 15kV for 30 cycles at 60Hz'],
              ['IEE C37.20.7 Type 2B', '63kA, 15kV for 30 cycler at 60Hz'],
            ],
          },
        ],
      },
      demos: {
        img: [
          'assets/images/products/01/01/04/1.png',
          'assets/images/products/01/01/04/2.png',
          'assets/images/products/01/01/04/3.jpg',
          'assets/images/products/01/01/04/4.jpg',
          'assets/images/products/01/01/04/5.jpg',
          'assets/images/products/01/01/04/6.png',
          'assets/images/products/01/01/04/7.png',
        ],
        video: 'assets/images/products/01/01/04/video.mp4',
      },
      documents: [
        'Product Data Sheet – CAP-F Series',
        'Product Specification Sheet – CAP-F Series',
        'Product Installation Guide – CAP-F Series',
      ],
    },
  };

  tabs = [
    {
      active: false,
      name: 'SẢN PHẨM CBM',
      img: 'assets/images/products/01/01/tab-home.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #096dd9',
      },
      click: () => { this.router.navigate(['/san-pham/cua-so-hong-ngoai']); },
    },
    {
      active: false,
      name: 'CỬA SỔ IR IRISS',
      img: 'assets/images/products/01/01/tab-1.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #096dd9',
      },
      click: () => { this.router.navigate(['/san-pham/san-pham-iriss']); },
    },
    {
      active: true,
      id: 'dong-vpt',
      name: 'DÒNG VPT',
      img: 'assets/images/products/01/01/tab-2.png',
      contents: { ...this.vpt },
      style: {
        ...this.style,
      },
      click: () => {
        const activeTab = this.tabs.find(t => t.active && t.id !== 'dong-vpt');
        if (activeTab) {
          activeTab.active = false;
          this.tabs.find(t => t.id === 'dong-vpt').active = true;
        }
        this.router.navigate(['/san-pham/san-pham-iriss/chi-tiet'], {
          fragment: 'dong-vpt',
        });
      },
    },
    {
      active: false,
      id: 'dong-cap-ct',
      name: 'DÒNG CAP CT',
      img: 'assets/images/products/01/01/tab-3.png',
      contents: { ...this.capCt },
      style: {
        ...this.style,
      },
      click: () => {
        const activeTab = this.tabs.find(t => t.active && t.id !== 'dong-cap-ct');
        if (activeTab) {
          activeTab.active = false;
          this.tabs.find(t => t.id === 'dong-cap-ct').active = true;
        }
        this.router.navigate(['/san-pham/san-pham-iriss/chi-tiet'], {
          fragment: 'dong-cap-ct',
        });
      },
    },
    {
      active: false,
      id: 'dong-cap-env',
      name: 'DÒNG CAP ENV',
      img: 'assets/images/products/01/01/tab-4.png',
      contents: { ...this.capEnv },
      style: {
        ...this.style,
      },
      click: () => {
        const activeTab = this.tabs.find(t => t.active && t.id !== 'dong-cap-env');
        if (activeTab) {
          activeTab.active = false;
          this.tabs.find(t => t.id === 'dong-cap-env').active = true;
        }
        this.router.navigate(['/san-pham/san-pham-iriss/chi-tiet'], {
          fragment: 'dong-cap-env',
        });
      },
    },
    {
      active: false,
      id: 'dong-flex-ir',
      name: 'DÒNG FLEX IR',
      img: 'assets/images/products/01/01/tab-5.jpg',
      contents: { ...this.flexIr },
      style: {
        ...this.style,
      },
      click: () => {
        const activeTab = this.tabs.find(t => t.active && t.id !== 'dong-flex-ir');
        if (activeTab) {
          activeTab.active = false;
          this.tabs.find(t => t.id === 'dong-flex-ir').active = true;
        }
        this.router.navigate(['/san-pham/san-pham-iriss/chi-tiet'], {
          fragment: 'dong-flex-ir',
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
  //         this.router.navigate(['/san-pham/san-pham-iriss/chi-tiet'], {
  //           fragment: id,
  //         });
  //       }
  //     }
  //   });
  // }

}
