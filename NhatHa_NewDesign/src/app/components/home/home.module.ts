import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class HomeModule { }
