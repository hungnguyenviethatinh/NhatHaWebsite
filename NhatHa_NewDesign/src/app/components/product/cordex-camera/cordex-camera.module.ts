import { NgModule } from '@angular/core';
import { CordexCameraComponent } from './cordex-camera.component';
import { CameraDetailComponent } from './camera-detail/camera-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../_shared/shared.module';

const cordexCameraRoutes: Routes = [
  {
    path: '', component: CordexCameraComponent,
  },
  {
    path: 'chi-tiet', component: CameraDetailComponent,
  },
];

@NgModule({
  declarations: [
    CordexCameraComponent,
    CameraDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(cordexCameraRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CordexCameraModule { }
