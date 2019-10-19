import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nh-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  @Output() setSelectedMenuIndexEvent = new EventEmitter<number>();

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

  setSelectedMenuIndex = (index: number) => {
    this.setSelectedMenuIndexEvent.emit(index);
  }

}
