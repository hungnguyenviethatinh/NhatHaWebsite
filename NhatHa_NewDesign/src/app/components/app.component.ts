import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  year = new Date().getFullYear();

  constructor(private router: Router) {
  }

  navigateTo = (route: string) => {
    this.router.navigate([route]);
  }
}
