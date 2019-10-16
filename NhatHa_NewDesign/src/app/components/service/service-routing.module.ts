import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const serviceRoutes: Routes = [
  {
    path: '', component: ServiceComponent,
  },
  {
    path: 'phan-tich-he-thong-dien', component: PowerSystemStudyComponent,
  },
  {
    path: 'tinh-toan-ngan-mach-phoi-hop-bao-ve', component: ShortCircuitComponent,
  },
  {
    path: 'phan-tich-nguy-co-ho-quang-dien', component: ArcFlashComponent,
  },
  {
    path: 'thu-nghiem-va-nghiem-thu', component: TestCommitComponent,
  },
  {
    path: 'phan-tich-chat-luong-dien-nang', component: PowerQualityComponent,
  },
  {
    path: 'chuong-trinh-bao-tri-dien', component: EpMaintainComponent,
  },
  {
    path: 'bao-tri-theo-tinh-trang', component: ConditionalMaintainComponent,
  },
  {
    path: 'quet-nhiet-hong-ngoai-thiet-bi-dien', component: InfraredScanComponent,
  },
  {
    path: 'do-phong-dien-cuc-bo', component: OpdTestComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(serviceRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ServiceRoutingModule { }
