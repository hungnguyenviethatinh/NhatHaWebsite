import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  constructor() { 
    this.isAuthenticated = false;
  }

  ngOnInit() {
    this.showDropdown();
  }

  showDropdown = () => {
    $('a[data-toggle="dropdown"]').hover(() => {
      console.log('hover in');
      $('div.dropdown-menu').addClass('show');
    },
    () => {
      console.log('hover out');
      $('div.dropdown-menu').removeClass('show');
    });
  }

}
