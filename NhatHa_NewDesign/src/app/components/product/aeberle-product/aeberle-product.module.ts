import { NgModule } from '@angular/core';
import { AeberleProductComponent } from './aeberle-product.component';
import { AeberleDetailComponent } from './aeberle-detail/aeberle-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../_shared/shared.module';

const aeberleRoutes: Routes = [
  {
    path: '',
    component: AeberleProductComponent,
  },
  {
    path: 'chi-tiet',
    component: AeberleDetailComponent,
  }
];

@NgModule({
  declarations: [
    AeberleProductComponent,
    AeberleDetailComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(aeberleRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AeberleProductModule { }
