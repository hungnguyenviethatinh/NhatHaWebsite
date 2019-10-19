import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nh-conditional-maintain',
  templateUrl: './conditional-maintain.component.html',
  styleUrls: ['./conditional-maintain.component.less']
})
export class ConditionalMaintainComponent implements OnInit {
  service = {
    name: 'Bảo trì theo tình trạng',
    data: {
      banners: [
        'assets/images/services/05/1.jpg',
        'assets/images/services/05/2.jpg',
        'assets/images/services/05/3.png',
      ],
      subject: 'BẢO TRÌ THEO TÌNH TRẠNG – XU HƯỚNG TƯƠNG LAI',
      body: [
        {
          title: 'Kiểu Dạng Hư Hỏng Thiết Bị:',
          contentType: 1,
          contents: [
            '89% số trường hợp hư hỏng xảy ra ngẫu nhiện chỉ có 11% số trường hợp là liên quan '
            + 'đến thời gian vận hành của thiết bị.',
            'Thông thường, ít khi quá trình hư hỏng của thiết bị được chú ý đến và càng ít khi '
            + 'câu hỏi về nguyên nhân thật sự dẫn đến hư hỏng được đặt ra. Phần lớn thời gian, '
            + 'mọi người đều cố gắng phóng đoán trong vô vọng về thời điểm mà các hư hỏng sẽ diễn ra.',
            'Trên thực tế, tỉ lệ hư hỏng và tần suất xảy ra các hư hỏng này không thể '
            + 'cải thiện được nếu chỉ áp dụng phương pháp thay thế định kỳ theo thời gian. '
            + 'Vì vậy, thiết bị cần được theo dõi và thời gian để tiến hành các sửa chữa hoặc thay thế '
            + 'sẽ được quyết định dựa trên tình trạng của thiết bị. Đây chính là nguyên lý của Bảo trì theo Tình trạng (CBM).',
          ],
          figures: [
            'assets/images/services/05/fig-1.jpg',
          ],
        },
        {
          title: 'Đặc Tuyến Hư Hỏng P-F (Potential Failure – Functional Failure)',
          contentType: 0,
          contents: [
            'Khi chúng ta bắt đầu “thấy ánh sáng”, “nghe tiếng ồn”, “cảm nhận nhiệt” '
            + 'hoặc “ngửi thấy mùi” bằng các giác quan của chúng ta, lúc đó đã khá trễ để có thể '
            + 'ngăn ngừa một sự cố hư hỏng nghiêm trọng sẽ sớm xảy ra. Hãy sử dụng “giác quan bằng cảm biến” '
            + 'bằng cách áp dụng các công nghệ hiện đại để có thể phát hiện từ sớm các hư hỏng này một cách chủ động.',
            'Chi phí sửa chữa luôn tăng cao hơn khi chúng ta tiến gần hơn đến trạng thái hư hỏng chức năng (functional failure)!',
          ],
          figures: [
            'assets/images/services/05/fig-2.png',
          ],
        },
        {
          title: 'Chương Trình Bảo Trì Theo Tình Trạng',
          contentType: 1,
          contents: [
            'Ngày nay, công nghệ liên tục được cải thiện, tính năng sử dụng trở nên thân thiện hơn, '
            + 'có thêm nhiều chức năng mới được phát triển thêm cũng như chi phí đầu tư cũng hợp lý hơn cho mọi người.',
            'Chương trình Bảo trì theo Tình trạng (CBM) mang lại cơ hội để có thể thực hiện công tác sửa chữa sớm nhất'
            + 'vào thời điểm thuận lợi nhất cũng như mang lại ít phiền phức và chi phí thấp nhất.',
          ],
          figures: [
            'assets/images/services/05/fig-3.jpg',
          ],
        },
      ],
      footer: {
        title: 'Nếu bạn nghĩ rằng bạn cần đến Bảo trì theo Tình trạng, '
          + 'chúng tôi có thể hỗ trợ bạn bất cứ lúc nào. Hãy xem qua các dịch vụ của chúng tôi:',
        links: [
          {
            img: 'assets/images/services/05/link-1.JPG',
            title: 'QUÉT NHIỆT HỒNG NGOẠI THIẾT BỊ ĐIỆN',
            href: '/dich-vu/quet-nhiet-hong-ngoai-thiet-bi-dien',
          },
          {
            img: 'assets/images/services/05/link-2.jpg',
            title: 'ĐO PHÓNG ĐIỆN CỤC BỘ',
            href: '/dich-vu/do-phong-dien-cuc-bo',
          },
        ],
      },
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
