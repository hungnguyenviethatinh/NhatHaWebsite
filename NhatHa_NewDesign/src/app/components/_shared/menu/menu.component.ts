import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nh-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  @Input() menuMode: string;
  @Input() selectedMenuIndex: number;
  @Output() switchRouterEvent = new EventEmitter<string>();
  @Output() closeSideBarEvent = new EventEmitter();
  @Output() setSelectedMenuIndexEvent = new EventEmitter<number>();

  style = { };

  constructor() { }

  ngOnInit() {
    if (this.menuMode === 'horizontal') {
      this.style = {
        ...this.style,
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1em',
      };
    }
  }

  setSelectedMenuIndex = (index: number) => {
    this.setSelectedMenuIndexEvent.emit(index);
  }

  switchRouter = (route: string, event: any, index: number) => {
    this.switchRouterEvent.emit(route);
    this.closeSideBarEvent.emit();
    this.setSelectedMenuIndex(index);
    event.stopPropagation();
  }

  closeSideBar = (event: any, index: number) => {
    this.closeSideBarEvent.emit();
    this.setSelectedMenuIndex(index);
    event.stopPropagation();
  }
}
