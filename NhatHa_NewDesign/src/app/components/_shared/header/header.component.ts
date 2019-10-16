import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() language: string;
  @Output() useLanguage = new EventEmitter<string>();
  @Output() navigateTo = new EventEmitter<string>();
  @Output() openSideBarEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openSideBar = () => {
    this.openSideBarEvent.emit();
  }

  switchRouter = (route: string) => {
    this.navigateTo.emit(route);
  }

  switchLanguage = (event: any) => {
    this.useLanguage.emit(event.target.innerText);
  }
}
