import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nh-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  @Input() visible: boolean;
  @Input() language: string;
  @Output() useLanguage = new EventEmitter<string>();
  @Output() closeSideBarEvent = new EventEmitter();
  @Output() navigateTo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  close = () => {
    this.closeSideBarEvent.emit();
  }

  switchLanguage = (language: string) => {
    this.useLanguage.emit(language);
  }

  switchRouter = (route: string) => {
    this.navigateTo.emit(route);
  }
}
