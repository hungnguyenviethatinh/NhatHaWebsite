import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { ServiceComponent } from './service.component';
import { ShortCircuitComponent } from './service-detail/short-circuit/short-circuit.component';
import { ArcFlashComponent } from './service-detail/arc-flash/arc-flash.component';
import { TestCommitComponent } from './service-detail/test-commit/test-commit.component';
import { PowerQualityComponent } from './service-detail/power-quality/power-quality.component';
import { EpMaintainComponent } from './service-detail/ep-maintain/ep-maintain.component';
import { InfraredScanComponent } from './service-detail/infrared-scan/infrared-scan.component';
import { OpdTestComponent } from './service-detail/opd-test/opd-test.component';
import { PowerSystemStudyComponent } from './service-group/power-system-study/power-system-study.component';
import { ConditionalMaintainComponent } from './service-group/conditional-maintain/conditional-maintain.component';
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  declarations: [
    ServiceComponent,
    ShortCircuitComponent,
    ArcFlashComponent,
    TestCommitComponent,
    PowerQualityComponent,
    EpMaintainComponent,
    InfraredScanComponent,
    OpdTestComponent,
    PowerSystemStudyComponent,
    ConditionalMaintainComponent,
  ],
  imports: [
    SharedModule,
    ServiceRoutingModule,
  ]
})
export class ServiceModule { }
