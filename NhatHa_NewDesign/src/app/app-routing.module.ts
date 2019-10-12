import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VisionMissionValueComponent } from './components/company/vision-mission-value/vision-mission-value.component';
import { EquipmentComponent } from './components/company/equipment/equipment.component';
import { PartnerComponent } from './components/partner/partner.component';
import { SoftwareComponent } from './components/support/software/software.component';
import { CaseStudiesComponent } from './components/support/case-studies/case-studies.component';
import { JobCareerComponent } from './components/contact/job-career/job-career.component';
import { ContactUsComponent } from './components/contact/contact-us/contact-us.component';
import { ProjectComponent } from './components/project/project.component';
import { ServiceComponent } from './components/service/service.component';
import { ShortCircuitComponent } from './components/service/service-detail/short-circuit/short-circuit.component';
import { ArcFlashComponent } from './components/service/service-detail/arc-flash/arc-flash.component';
import { TestCommitComponent } from './components/service/service-detail/test-commit/test-commit.component';
import { PowerQualityComponent } from './components/service/service-detail/power-quality/power-quality.component';
import { EpMaintainComponent } from './components/service/service-detail/ep-maintain/ep-maintain.component';
import { InfraredScanComponent } from './components/service/service-detail/infrared-scan/infrared-scan.component';
import { OpdTestComponent } from './components/service/service-detail/opd-test/opd-test.component';
import { PowerSystemStudyComponent } from './components/service/service-group/power-system-study/power-system-study.component';
import { ConditionalMaintainComponent } from './components/service/service-group/conditional-maintain/conditional-maintain.component';
import { ProductComponent } from './components/product/product.component';
import { InfraredWindowComponent } from './components/product/infrared-window/infrared-window.component';
import { CbmToolComponent } from './components/product/cbm-tool/cbm-tool.component';
import { OnlineMonitorComponent } from './components/product/online-monitor/online-monitor.component';
import { IrissProductComponent } from './components/product/iriss-product/iriss-product.component';
import { CordexProductComponent } from './components/product/cordex-product/cordex-product.component';
import { IrissDetailComponent } from './components/product/iriss-product/iriss-detail/iriss-detail.component';
import { CordexCameraComponent } from './components/product/cordex-camera/cordex-camera.component';
import { CameraDetailComponent } from './components/product/cordex-camera/camera-detail/camera-detail.component';
import { IrissUltrsoundComponent } from './components/product/iriss-ultrsound/iriss-ultrsound.component';
import { IrissDischargeComponent } from './components/product/iriss-discharge/iriss-discharge.component';
import { EmersonIntellisawComponent } from './components/product/emerson-intellisaw/emerson-intellisaw.component';
import { CordexAutoCameraComponent } from './components/product/cordex-auto-camera/cordex-auto-camera.component';
import { IrissDeltaComponent } from './components/product/iriss-delta/iriss-delta.component';
import { IrissSentryComponent } from './components/product/iriss-sentry/iriss-sentry.component';
import { CordexMn4000Component } from './components/product/cordex-auto-camera/cordex-mn4000/cordex-mn4000.component';
import { CordexMn4100Component } from './components/product/cordex-auto-camera/cordex-mn4100/cordex-mn4100.component';

const routes: Routes = [
  {
    path: 'trang-chu', component: HomeComponent,
  },
  {
    path: 'doanh-nghiep/tamnhin-sumenh-giatri', component: VisionMissionValueComponent,
  },
  {
    path: 'doanh-nghiep/thiet-bi', component: EquipmentComponent,
  },
  {
    path: 'dich-vu', component: ServiceComponent,
  },
  {
    path: 'dich-vu/phan-tich-he-thong-dien', component: PowerSystemStudyComponent,
  },
  {
    path: 'dich-vu/tinh-toan-ngan-mach-phoi-hop-bao-ve', component: ShortCircuitComponent,
  },
  {
    path: 'dich-vu/phan-tich-nguy-co-ho-quang-dien', component: ArcFlashComponent,
  },
  {
    path: 'dich-vu/thu-nghiem-va-nghiem-thu', component: TestCommitComponent,
  },
  {
    path: 'dich-vu/phan-tich-chat-luong-dien-nang', component: PowerQualityComponent,
  },
  {
    path: 'dich-vu/chuong-trinh-bao-tri-dien', component: EpMaintainComponent,
  },
  {
    path: 'dich-vu/bao-tri-theo-tinh-trang', component: ConditionalMaintainComponent,
  },
  {
    path: 'dich-vu/quet-nhiet-hong-ngoai-thiet-bi-dien', component: InfraredScanComponent,
  },
  {
    path: 'dich-vu/do-phong-dien-cuc-bo', component: OpdTestComponent,
  },
  {
    path: 'san-pham', component: ProductComponent,
  },
  {
    path: 'san-pham/cua-so-hong-ngoai', component: InfraredWindowComponent,
  },
  {
    path: 'san-pham/san-pham-iriss', component: IrissProductComponent,
  },
  {
    path: 'san-pham/san-pham-iriss/chi-tiet', component: IrissDetailComponent,
  },
  {
    path: 'san-pham/cua-so-hong-ngoai-cordex', component: CordexProductComponent,
  },
  {
    path: 'san-pham/may-do-tinh-trang-thiet-bi', component: CbmToolComponent,
  },
  {
    path: 'san-pham/may-chup-hinh-nhiet-cordex', component: CordexCameraComponent,
  },
  {
    path: 'san-pham/may-chup-hinh-nhiet-cordex/chi-tiet', component: CameraDetailComponent,
  },
  {
    path: 'san-pham/may-do-song-sieu-am-iriss', component: IrissUltrsoundComponent,
  },
  {
    path: 'san-pham/may-do-phong-dien-cuc-bo-iriss', component: IrissDischargeComponent,
  },
  {
    path: 'san-pham/giai-phap-giam-sat-lien-tuc', component: OnlineMonitorComponent,
  },
  {
    path: 'san-pham/emerson-intellisaw', component: EmersonIntellisawComponent,
  },
  {
    path: 'san-pham/cordex-automated-camera', component: CordexAutoCameraComponent,
  },
  {
    path: 'san-pham/cordex-automated-camera/cordex-mn4000', component: CordexMn4000Component,
  },
  {
    path: 'san-pham/cordex-automated-camera/cordex-mn4100', component: CordexMn4100Component,
  },
  {
    path: 'san-pham/iriss-delta-t-alert', component: IrissDeltaComponent,
  },
  {
    path: 'san-pham/iriss-e-sentry-connect', component: IrissSentryComponent,
  },
  {
    path: 'doi-tac', component: PartnerComponent,
  },
  {
    path: 'du-an', component: ProjectComponent,
  },
  {
    path: 'ho-tro/phan-mem', component: SoftwareComponent,
  },
  {
    path: 'ho-tro/nghien-cuu', component: CaseStudiesComponent,
  },
  {
    path: 'tuyen-dung', component: JobCareerComponent,
  },
  {
    path: 'lien-he', component: ContactUsComponent,
  },
  {
    path: '', redirectTo: '/trang-chu', pathMatch: 'full',
  },
  { path: '**', component: HomeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 120],
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
