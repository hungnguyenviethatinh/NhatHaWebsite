import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { InfraredWindowComponent } from './infrared-window/infrared-window.component';
import { CbmToolComponent } from './cbm-tool/cbm-tool.component';
import { OnlineMonitorComponent } from './online-monitor/online-monitor.component';
import { IrissProductComponent } from './iriss-product/iriss-product.component';
import { CordexProductComponent } from './cordex-product/cordex-product.component';
import { IrissDetailComponent } from './iriss-product/iriss-detail/iriss-detail.component';
import { CordexCameraComponent } from './cordex-camera/cordex-camera.component';
import { CameraDetailComponent } from './cordex-camera/camera-detail/camera-detail.component';
import { IrissUltrsoundComponent } from './iriss-ultrsound/iriss-ultrsound.component';
import { IrissDischargeComponent } from './iriss-discharge/iriss-discharge.component';
import { EmersonIntellisawComponent } from './emerson-intellisaw/emerson-intellisaw.component';
import { CordexAutoCameraComponent } from './cordex-auto-camera/cordex-auto-camera.component';
import { IrissDeltaComponent } from './iriss-delta/iriss-delta.component';
import { IrissSentryComponent } from './iriss-sentry/iriss-sentry.component';
import { CordexMn4000Component } from './cordex-auto-camera/cordex-mn4000/cordex-mn4000.component';
import { CordexMn4100Component } from './cordex-auto-camera/cordex-mn4100/cordex-mn4100.component';

const productRoutes: Routes = [
  {
    path: '', component: ProductComponent,
  },
  {
    path: 'cua-so-hong-ngoai', component: InfraredWindowComponent,
  },
  {
    path: 'san-pham-iriss', component: IrissProductComponent,
  },
  {
    path: 'san-pham-iriss/chi-tiet', component: IrissDetailComponent,
  },
  {
    path: 'cua-so-hong-ngoai-cordex', component: CordexProductComponent,
  },
  {
    path: 'may-do-tinh-trang-thiet-bi', component: CbmToolComponent,
  },
  {
    path: 'may-chup-hinh-nhiet-cordex', component: CordexCameraComponent,
  },
  {
    path: 'may-chup-hinh-nhiet-cordex/chi-tiet', component: CameraDetailComponent,
  },
  {
    path: 'may-do-song-sieu-am-iriss', component: IrissUltrsoundComponent,
  },
  {
    path: 'may-do-phong-dien-cuc-bo-iriss', component: IrissDischargeComponent,
  },
  {
    path: 'giai-phap-giam-sat-lien-tuc', component: OnlineMonitorComponent,
  },
  {
    path: 'emerson-intellisaw', component: EmersonIntellisawComponent,
  },
  {
    path: 'cordex-automated-camera', component: CordexAutoCameraComponent,
  },
  {
    path: 'cordex-automated-camera/cordex-mn4000', component: CordexMn4000Component,
  },
  {
    path: 'cordex-automated-camera/cordex-mn4100', component: CordexMn4100Component,
  },
  {
    path: 'iriss-delta-t-alert', component: IrissDeltaComponent,
  },
  {
    path: 'iriss-e-sentry-connect', component: IrissSentryComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProductRoutingModule { }
