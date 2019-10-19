import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  language = 'vn';
  sideBarVisible = false;
  selectedMenuIndex = 0;

  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang(this.language);
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
  }

  useLanguage = (language: string) => {
    this.language = language === 'English' ? 'en' : 'vn';
    this.translate.use(this.language);
  }
}
