import { NgModule } from '@angular/core';
import { SharedModule } from '../../_shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { CordexAutoCameraComponent } from './cordex-auto-camera.component';
import { CordexMn4000Component } from './cordex-mn4000/cordex-mn4000.component';
import { CordexMn4100Component } from './cordex-mn4100/cordex-mn4100.component';

const cordexAutoCameraRoutes: Routes = [
  {
    path: '', component: CordexAutoCameraComponent,
  },
  {
    path: 'cordex-mn4000', component: CordexMn4000Component,
  },
  {
    path: 'cordex-mn4100', component: CordexMn4100Component,
  },
];


@NgModule({
  declarations: [
    CordexAutoCameraComponent,
    CordexMn4000Component,
    CordexMn4100Component,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(cordexAutoCameraRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CordexAutoCameraModule { }
