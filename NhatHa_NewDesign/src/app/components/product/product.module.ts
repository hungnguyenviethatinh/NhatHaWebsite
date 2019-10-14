import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
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
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    InfraredWindowComponent,
    CbmToolComponent,
    OnlineMonitorComponent,
    IrissProductComponent,
    CordexProductComponent,
    IrissDetailComponent,
    CordexCameraComponent,
    CameraDetailComponent,
    IrissUltrsoundComponent,
    IrissDischargeComponent,
    EmersonIntellisawComponent,
    CordexAutoCameraComponent,
    IrissDeltaComponent,
    IrissSentryComponent,
    CordexMn4000Component,
    CordexMn4100Component,
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
