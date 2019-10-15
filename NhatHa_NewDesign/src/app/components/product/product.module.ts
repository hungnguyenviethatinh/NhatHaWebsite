import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
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
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    InfraredWindowComponent,
    CbmToolComponent,
    OnlineMonitorComponent,
    CordexProductComponent,
    IrissUltrsoundComponent,
    IrissDischargeComponent,
    EmersonIntellisawComponent,
    IrissDeltaComponent,
    IrissSentryComponent,
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
