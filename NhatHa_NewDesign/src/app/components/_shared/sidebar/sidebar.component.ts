import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nh-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  @Input() visible: boolean;
  @Input() language: string;
  @Input() selectedMenuIndex: number;
  @Output() useLanguage = new EventEmitter<string>();
  @Output() closeSideBarEvent = new EventEmitter();
  @Output() navigateTo = new EventEmitter<string>();
  @Output() setSelectedMenuIndexEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  close = () => {
    this.closeSideBarEvent.emit();
  }

  setSelectedMenuIndex = (index: number) => {
    this.setSelectedMenuIndexEvent.emit(index);
  }

  switchLanguage = (language: string) => {
    this.useLanguage.emit(language);
  }

  switchRouter = (route: string) => {
    this.navigateTo.emit(route);
  }
}
