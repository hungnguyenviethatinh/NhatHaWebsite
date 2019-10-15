import { NgModule } from '@angular/core';
import { IrissProductComponent } from './iriss-product.component';
import { IrissDetailComponent } from './iriss-detail/iriss-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../_shared/shared.module';

const irissProductRoutes: Routes = [
  {
    path: '', component: IrissProductComponent,
  },
  {
    path: 'chi-tiet', component: IrissDetailComponent,
  },
];

@NgModule({
  declarations: [
    IrissProductComponent,
    IrissDetailComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(irissProductRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class IrissProductModule { }
