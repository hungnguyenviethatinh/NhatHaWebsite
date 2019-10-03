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


const routes: Routes = [
  {
    path: 'trangchu', component: HomeComponent,
  },
  {
    path: 'doanhnghiep/tamnhin-sumenh-giatri', component: VisionMissionValueComponent,
  },
  {
    path: 'doanhnghiep/thietbi', component: EquipmentComponent,
  },
  {
    path: 'dichvu', component: ServiceComponent,
  },
  {
    path: 'dichvu/phan-tich-he-thong-dien', component: PowerSystemStudyComponent,
  },
  {
    path: 'dichvu/tinh-toan-ngan-mach-phoi-hop-bao-ve', component: ShortCircuitComponent,
  },
  {
    path: 'dichvu/phan-tich-nguy-co-ho-quang-dien', component: ArcFlashComponent,
  },
  {
    path: 'dichvu/thu-nghiem-va-nghiem-thu', component: TestCommitComponent,
  },
  {
    path: 'dichvu/phan-tich-chat-luong-dien-nang', component: PowerQualityComponent,
  },
  {
    path: 'dichvu/chuong-trinh-bao-tri-dien', component: EpMaintainComponent,
  },
  {
    path: 'dichvu/bao-tri-theo-tinh-trang', component: ConditionalMaintainComponent,
  },
  {
    path: 'dichvu/quet-nhiet-hong-ngoai-thiet-bi-dien', component: InfraredScanComponent,
  },
  {
    path: 'dichvu/do-phong-dien-cuc-bo', component: OpdTestComponent,
  },
  {
    path: 'doitac', component: PartnerComponent,
  },
  {
    path: 'duan', component: ProjectComponent,
  },
  {
    path: 'hotro/phanmem', component: SoftwareComponent,
  },
  {
    path: 'hotro/nghiencuu', component: CaseStudiesComponent,
  },
  {
    path: 'tuyendung', component: JobCareerComponent,
  },
  {
    path: 'lienhe', component: ContactUsComponent,
  },
  {
    path: '', redirectTo: '/trangchu', pathMatch: 'full',
  },
  { path: '**', component: HomeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
