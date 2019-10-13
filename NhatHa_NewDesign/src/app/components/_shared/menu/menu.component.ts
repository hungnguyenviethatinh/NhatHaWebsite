import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nh-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  @Input() menuMode: string;
  @Output() switchRouterEvent = new EventEmitter<string>();
  @Output() closeSideBarEvent = new EventEmitter();

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

  switchRouter = (route: string, event: any) => {
    this.switchRouterEvent.emit(route);
    this.closeSideBarEvent.emit();
    event.stopPropagation();
  }

  closeSideBar = (event: any) => {
    this.closeSideBarEvent.emit();
    event.stopPropagation();
  }
}
