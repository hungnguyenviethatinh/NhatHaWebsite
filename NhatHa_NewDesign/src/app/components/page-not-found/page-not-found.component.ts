import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="page-not-found">
      <h1 nz-title>404</h1>
      <h2 nz-title>{{'NotFound' | translate}}</h2>
      <a [routerLink]="['/trang-chu']">
        <i nz-icon nzType="left-circle" nzTheme="outline"></i>
        {{'BackHome' | translate}}
      </a>
    </div>
  `,
  styles: [
    `
      .page-not-found {
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        flex: 1;
      }

      h1, h2 {
        text-align: center;
        color: #096dd9;
      }

      h2 {
        margin-top: 0 !important;
      }
    `
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
