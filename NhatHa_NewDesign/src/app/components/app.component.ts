import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  year = new Date().getFullYear();
  language = 'vn';
  sideBarVisible = false;

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

  useLanguage = (language: string) => {
    this.language = language === 'English' ? 'en' : 'vn';
    this.translate.use(this.language);
  }
}
