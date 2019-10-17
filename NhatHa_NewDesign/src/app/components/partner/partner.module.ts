import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PartnerComponent } from './partner.component';

const partnerRoutes: Routes = [
  {
    path: '', component: PartnerComponent,
  },
];

@NgModule({
  declarations: [
    PartnerComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(partnerRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PartnerModule { }
