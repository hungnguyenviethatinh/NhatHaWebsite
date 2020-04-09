import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Constants from '../helpers/constants';

@Component({
  selector: 'nh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  language = localStorage.getItem(Constants.CurrentLanguage) || 'vi';
  sideBarVisible = false;
  selectedMenuIndex = localStorage.getItem(Constants.CurrentMenuIndex) || 0;

  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang(this.language);
  }

  ngOnInit() {
    localStorage.setItem(Constants.CurrentLanguage, this.language);
    localStorage.setItem(Constants.CurrentMenuIndex, `${this.selectedMenuIndex}`);
  }

  navigateTo = (route: string) => {
    this.router.navigate([route]);
  }

  openSideBar = () => {
    this.sideBarVisible = true;
  }

  closeSideBar = () => {
    this.sideBarVisible = false;
  }

  setSelectedMenuIndex = (index: number) => {
    this.selectedMenuIndex = index;
    localStorage.setItem(Constants.CurrentMenuIndex, `${this.selectedMenuIndex}`);
  }

  useLanguage = (language: string) => {
    this.language = language;
    this.translate.use(this.language);
    localStorage.setItem(Constants.CurrentLanguage, this.language);
  }
}
