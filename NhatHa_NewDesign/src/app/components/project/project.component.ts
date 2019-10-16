import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {
  banners = [
    {
      img: '/assets/images/projects/nhatha-projects.JPG',
      caption: 'Dự án cuả chúng tôi'
    },
  ];

  projects = [
    {
      id: 'heavy-industry',
      group: 'Công nghiệp nặng',
      projects: [
        {
          img: '/assets/images/projects/01/01/Pomina.gif',
          name: 'Nhà Máy Thép Pomina 2 – Bà Rịa Vũng Tàu',
          descriptions: [
            'Cung cấp Sản phẩm – Thiết bị Cao thế - Trung thế cho trạm phân phối.',
            'Cung cấp Dịch vụ lắp đặt – thay thế - thí nghiệm đầu cáp Trung thế.',
          ],
        },
        {
          img: '/assets/images/projects/01/02/Viglacera.jpg',
          name: 'Nhà Máy Kính Nổi Viglacera – Bình Dương',
          descriptions: [
            'Cung cấp Sản phẩm – Thiết bị Trung thế - Hạ thế cho trạm và tủ phân phối.',
            'Cung cấp Dịch vụ lắp đặt – thay thế - thí nghiệm máy cắt ACB Hạ thế.',
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
          ],
        },
        {
          img: '/assets/images/projects/01/03/Formosa Ha Tinh.jpg',
          name: 'Nhà Máy Gang Thép Formosa – Hà Tĩnh',
          descriptions: [
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (PD Online) cho Busway Trung thế.',
          ],
        },
        {
          img: '/assets/images/projects/01/04/Formosa Nhon Trach.png',
          name: 'Nhà Máy Formosa Nhơn Trạch – Đồng Nai',
          descriptions: [
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (PD Online) cho Hộp nối cáp Trung thế.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (AC – VLF & Tan-Delta) cho cáp ngầm Trung thế.',
          ],
        },
      ],
    },
    {
      id: 'power-generation',
      group: 'Nhà máy điện',
      projects: [
        {
          img: '/assets/images/projects/02/01/Nhiet Dien Phu My.jpg',
          name: 'Nhiệt Điện Phú Mỹ 2.2 – Bà Rịa Vũng Tàu',
          descriptions: [
            'Cung cấp Sản phẩm – Thiết bị Trung thế - Hạ thế cho trạm và tủ phân phối.',
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ huấn luyện chuyên môn kỹ thuật về bảo trì thiết bị.',
          ],
        },
      ],
    },
    {
      id: 'oil-gas',
      group: 'Dầu khí',
      projects: [
        {
          img: '/assets/images/projects/03/Tau FPSO Lewek Emas.jpg',
          name: 'Tàu FPSO Lewek Emas – Bà Rịa Vũng Tàu',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ xử lý sự cố theo yêu cầu.',
          ],
        },
        {
          img: '/assets/images/projects/03/Chim Sao Platform.jpg',
          name: 'Giàn Khoan Chim Sáo – Bà Rịa Vũng Tàu',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ xử lý sự cố theo yêu cầu.',
          ],
        },
      ],
    },
    {
      id: 'electronic-semicon',
      group: 'Điện tử - Bán dẫn',
      projects: [
        {
          img: '/assets/images/projects/04/01/ON Semiconductor Binh Duong.jpg',
          name: 'Nhà máy ON Semiconductor – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ xử lý sự cố theo yêu cầu.',
            'Cung cấp Dịch vụ thi công lắp đặt thiết bị Trung thế - Hạ thế.',
          ],
        },
        {
          img: '/assets/images/projects/04/02/ON Semiconductor Dong Nai.jpg',
          name: 'Nhà máy ON Semiconductor – Đồng Nai',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ xử lý sự cố theo yêu cầu.',
            'Cung cấp Dịch vụ thi công lắp đặt thiết bị Trung thế - Hạ thế.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho hệ thống tủ điện và MBA.',
          ],
        },
        {
          img: '/assets/images/projects/04/03/Nha May II-VI.png',
          name: 'Nhà máy II-VI Optical VSIP1 – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ xử lý sự cố theo yêu cầu.',
            'Cung cấp Dịch vụ thi công lắp đặt thiết bị Hạ thế.',
          ],
        },
        {
          img: '/assets/images/projects/04/04/Nha May Jabil.jpg',
          name: 'Nhà máy Jabil SHTP – Hồ Chí Minh',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ xử lý sự cố theo yêu cầu.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho hệ thống tủ điện, (PD Online) cho tủ Trung thế và MBA.',
          ],
        },
      ],
    },
    {
      id: 'consumable-product',
      group: 'Hàng tiêu dùng',
      projects: [
        {
          img: '/assets/images/projects/05/01/Nha May P&G Dong An.JPG',
          name: 'Nhà máy P&G Đồng An – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ phản ứng 24/7.',
            'Cung cấp Dịch vụ thi công lắp đặt thiết bị Hạ thế.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho hệ thống tủ điện và MBA.',
          ],
        },
        {
          img: '/assets/images/projects/05/02/Nha May P&G Ben Cat.jpg',
          name: 'Nhà máy P&G Bến Cát – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ thi công lắp đặt thiết bị Hạ thế.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho hệ thống tủ điện và MBA.',
          ],
        },
        {
          img: '/assets/images/projects/05/03/Nha May Kimberly Clark.jpg',
          name: 'Nhà máy Kimberly Clark – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho MBA.',
          ],
        },
        {
          img: '/assets/images/projects/05/04/Nha May Colgate My Phuoc.jpg',
          name: 'Nhà máy Colgate Mỹ Phước – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho hệ thống tủ điện, (PD Online) cho tủ Trung thế và MBA.',
          ],
        },
      ],
    },
    {
      id: 'food-beverage',
      group: 'Thực phẩm',
      projects: [
        {
          img: '/assets/images/projects/06/01/Nha May Masan Binh Duong.jpg',
          name: 'Nhà máy Masan – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ xử lý sự cố theo yêu cầu.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho hệ thống tủ điện, (PD Online) cho tủ Trung thế và MBA.',
          ],
        },
        {
          img: '/assets/images/projects/06/02/Nha May Perfetti.jpg',
          name: 'Nhà máy Perfetti Van Melle – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ lắp đặt – thay thế - thí nghiệm đầu cáp Trung thế.',
          ],
        },
        {
          img: '/assets/images/projects/06/03/Nha May Yakult.jpg',
          name: 'Nhà máy Yakult – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện',
            'Cung cấp Dịch vụ lắp đặt – thay thế - thí nghiệm đầu cáp Trung thế.',
            'Cung cấp Dịch vụ lắp đặt – thay thế - thí nghiệm rơ-le Trung thế.',
          ],
        },
        {
          img: '/assets/images/projects/06/04/Nha May Nestle Dong Nai.jpg',
          name: 'Nhà máy Nestle’ – Đồng Nai',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho hệ thống tủ điện.',
          ],
        },
      ],
    },
    {
      id: 'port-warehouse',
      group: 'Cảng - Kho bãi',
      projects: [
        {
          img: '/assets/images/projects/07/01/Cang SITV.jpg',
          name: 'Cảng Quốc Tế Saigon – Bà Rịa Vũng Tàu',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ tính toán phối hợp bảo vệ rơ-le Trung thế.',
            'Cung cấp Dịch vụ lắp đặt hệ thống giám sát Năng lượng sử dụng.',
          ],
        },
        {
          img: '/assets/images/projects/07/02/Cang Vopak.jpg',
          name: 'Kho Hóa Chất Vopak – Đồng Nai',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho hệ thống tủ điện.',
          ],
        },
        {
          img: '/assets/images/projects/07/03/Kho Linfox Unilever.jpg',
          name: 'Kho Linfox Unilever – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ kiểm tra an toàn thiết bị điện.',
            'Cung cấp Dịch vụ tính toán phân bố chiếu sáng.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho hệ thống tủ điện.',
          ],
        },
        {
          img: '/assets/images/projects/07/04/Kho DKSH.jpg',
          name: 'Kho DKSH VSIP – Bình Dương',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ tính toán phân bố chiếu sáng – Lắp đặt hệ thống đèn cao áp nhà kho.',
          ],
        },
      ],
    },
    {
      id: 'commercial-build',
      group: 'Tòa nhà văn phòng',
      projects: [
        {
          img: '/assets/images/projects/08/01/Toa Nha IPC.jpg',
          name: 'Tòa nhà IPC – Hồ Chí Minh',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (PD Online) cho MBA.',
          ],
        },
        {
          img: '/assets/images/projects/08/02/Toa Nha TNR.jpg',
          name: 'Tòa nhà TNR – Hồ Chí Minh',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ xử lý sự cố theo yêu cầu.',
            'Cung cấp Dịch vụ thi công lắp đặt thiết bị Trung thế - Hạ thế.',
          ],
        },
      ],
    },
    {
      id: 'hotel-resort',
      group: 'Khách sạn - Resort',
      projects: [
        {
          img: '/assets/images/projects/09/01/Khach San Desart.jpg',
          name: 'Khách sạn DesArt – Hồ Chí Minh',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
          ],
        },
        {
          img: '/assets/images/projects/09/02/Khach San Intercontinental Nha Trang.jpg',
          name: 'Khách sạn Intercontinental – Nha Trang',
          descriptions: [
            'Cung cấp Dịch vụ xử lý sự cố theo yêu cầu.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng chất lượng điện năng hệ thống điện.',
          ],
        },
        {
          img: '/assets/images/projects/09/03/Khach San New World.jpg',
          name: 'Khách sạn New World – Hồ Chí Minh',
          descriptions: [
            'Cung cấp Dịch vụ bảo trì – thí nghiệm điện.',
            'Cung cấp Dịch vụ đo và đánh giá tình trạng (Quét nhiệt hồng ngoại) cho hệ thống tủ điện.',
          ],
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
