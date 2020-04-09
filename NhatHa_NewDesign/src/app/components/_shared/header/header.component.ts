import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() language: string;
  @Input() selectedMenuIndex: number;
  @Output() useLanguage = new EventEmitter<string>();
  @Output() navigateTo = new EventEmitter<string>();
  @Output() openSideBarEvent = new EventEmitter();
  @Output() setSelectedMenuIndexEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  openSideBar = () => {
    this.openSideBarEvent.emit();
  }

  setSelectedMenuIndex = (index: number) => {
    this.setSelectedMenuIndexEvent.emit(index);
  }

  switchRouter = (route: string) => {
    this.navigateTo.emit(route);
  }

  switchLanguage = (language: string) => {
    this.useLanguage.emit(language);
  }
}
