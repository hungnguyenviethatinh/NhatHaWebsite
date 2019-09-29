import { Component } from '@angular/core';

@Component({
  selector: 'nh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  year = new Date().getFullYear();
}
