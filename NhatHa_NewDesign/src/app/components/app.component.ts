import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'nh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  year = new Date().getFullYear();

  constructor(private router: Router,private translate: TranslateService) {
    translate.setDefaultLang('vn');
  }

  navigateTo = (route: string) => {
    this.router.navigate([route]);
  }
  useLanguage(language: string) {
    this.translate.use(language);
}
}
