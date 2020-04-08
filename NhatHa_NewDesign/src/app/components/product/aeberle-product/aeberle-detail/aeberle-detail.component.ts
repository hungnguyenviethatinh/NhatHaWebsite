import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nh-aeberle-detail',
  templateUrl: './aeberle-detail.component.html',
  styleUrls: ['./aeberle-detail.component.less']
})
export class AeberleDetailComponent implements OnInit {
  style = {
    'text-align': 'center',
    cursor: 'pointer',
  };

  open = {
    // opacity: 1,
    display: 'block',
  };

  nzGutter = {
    xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 32
  };

  pqBox50 = {
    p1: 'p1',
    ul: 'ul',
    li: [
      '',
      '',
      '',
      '',
    ],
    p2: 'p2',
    img: 'assets/images/products/02/04/01/pqbox50.png',
  };

  pqBox150 = {
    p1: 'p1',
    ul: 'ul',
    li: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    img: 'assets/images/products/02/04/02/pqbox150.png',
  };

  pqBox200 = {
    p1: 'p1',
    ul: 'ul',
    li: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    img: 'assets/images/products/02/04/03/pqbox200.png',
  };

  pqBox300 = {
    p1: 'p1',
    ul: 'ul',
    li: [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
    img: 'assets/images/products/02/04/04/pqbox300.png',
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
      name: 'MÁY PHÂN TÍCH CHẤT LƯỢNG ĐIỆN NĂNG',
      img: 'assets/images/products/02/04/tab_1.png',
      style: {
        ...this.style,
        'border-right': '1px dashed #ffa500',
      },
      click: () => { this.router.navigate(['/san-pham/may-phan-tich-chat-luong-dien-nang-aeberle']); },
    },
    {
      active: true,
      id: 'pqbox50',
      name: 'PQ BOX 50',
      img: 'assets/images/products/02/04/tab_2.png',
      content: { ...this.pqBox50, },
      style: {
        ...this.style,
      },
      click: () => {
        const activeTab = this.tabs.find(t => t.active && t.id !== 'pqbox50');
        if (activeTab) {
          activeTab.active = false;
          this.tabs.find(t => t.id === 'pqbox50').active = true;
        }
        this.router.navigate(['/san-pham/may-phan-tich-chat-luong-dien-nang-aeberle/chi-tiet'], {
          fragment: 'pqbox50',
        });
      },
    },
    {
      active: false,
      id: 'pqbox150',
      name: 'PQ BOX 150',
      img: 'assets/images/products/02/04/tab_3.png',
      content: { ...this.pqBox150, },
      style: {
        ...this.style,
      },
      click: () => {
        const activeTab = this.tabs.find(t => t.active && t.id !== 'pqbox150');
        if (activeTab) {
          activeTab.active = false;
          this.tabs.find(t => t.id === 'pqbox150').active = true;
        }
        this.router.navigate(['/san-pham/may-phan-tich-chat-luong-dien-nang-aeberle/chi-tiet'], {
          fragment: 'pqbox150',
        });
      },
    },
    {
      active: false,
      id: 'pqbox200',
      name: 'PQ BOX 200',
      img: 'assets/images/products/02/04/tab_4.png',
      content: { ...this.pqBox200, },
      style: {
        ...this.style,
      },
      click: () => {
        const activeTab = this.tabs.find(t => t.active && t.id !== 'pqbox200');
        if (activeTab) {
          activeTab.active = false;
          this.tabs.find(t => t.id === 'pqbox200').active = true;
        }
        this.router.navigate(['/san-pham/may-phan-tich-chat-luong-dien-nang-aeberle/chi-tiet'], {
          fragment: 'pqbox200',
        });
      },
    },
    {
      active: false,
      id: 'pqbox300',
      name: 'PQ BOX 300',
      img: 'assets/images/products/02/04/tab_5.png',
      content: { ...this.pqBox300, },
      style: {
        ...this.style,
      },
      click: () => {
        const activeTab = this.tabs.find(t => t.active && t.id !== 'pqbox300');
        if (activeTab) {
          activeTab.active = false;
          this.tabs.find(t => t.id === 'pqbox300').active = true;
        }
        this.router.navigate(['/san-pham/may-phan-tich-chat-luong-dien-nang-aeberle/chi-tiet'], {
          fragment: 'pqbox300',
        });
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
    }
    const selectedTab = this.tabs.find(t => t.id === this.fragment);
    selectedTab.active = true;
  }
}
