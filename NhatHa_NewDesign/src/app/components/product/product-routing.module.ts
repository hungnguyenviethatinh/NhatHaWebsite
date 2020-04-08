import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { InfraredWindowComponent } from './infrared-window/infrared-window.component';
import { CbmToolComponent } from './cbm-tool/cbm-tool.component';
import { OnlineMonitorComponent } from './online-monitor/online-monitor.component';
import { CordexProductComponent } from './cordex-product/cordex-product.component';
import { IrissUltrsoundComponent } from './iriss-ultrsound/iriss-ultrsound.component';
import { IrissDischargeComponent } from './iriss-discharge/iriss-discharge.component';
import { EmersonIntellisawComponent } from './emerson-intellisaw/emerson-intellisaw.component';
import { IrissDeltaComponent } from './iriss-delta/iriss-delta.component';
import { IrissSentryComponent } from './iriss-sentry/iriss-sentry.component';

const productRoutes: Routes = [
  {
    path: '', component: ProductComponent,
  },
  {
    path: 'cua-so-hong-ngoai', component: InfraredWindowComponent,
  },
  {
    path: 'san-pham-iriss',
    loadChildren: () => import('./iriss-product/iriss-product.module').then(mod => mod.IrissProductModule),
  },
  {
    path: 'cua-so-hong-ngoai-cordex', component: CordexProductComponent,
  },
  {
    path: 'may-do-tinh-trang-thiet-bi', component: CbmToolComponent,
  },
  {
    path: 'may-chup-hinh-nhiet-cordex',
    loadChildren: () => import('./cordex-camera/cordex-camera.module').then(mod => mod.CordexCameraModule),
  },
  {
    path: 'may-do-song-sieu-am-iriss', component: IrissUltrsoundComponent,
  },
  {
    path: 'may-do-phong-dien-cuc-bo-iriss', component: IrissDischargeComponent,
  },
  {
    path: 'may-phan-tich-chat-luong-dien-nang-aeberle',
    loadChildren: () => import('./aeberle-product/aeberle-product.module').then(mod => mod.AeberleProductModule),
  },
  {
    path: 'giai-phap-giam-sat-lien-tuc', component: OnlineMonitorComponent,
  },
  {
    path: 'emerson-intellisaw', component: EmersonIntellisawComponent,
  },
  {
    path: 'cordex-automated-camera',
    loadChildren: () => import('./cordex-auto-camera/cordex-auto-camera.module').then(mod => mod.CordexAutoCameraModule),
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
