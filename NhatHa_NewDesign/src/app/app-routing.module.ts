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
import { ServiceGroupComponent } from './components/service/service-group/service-group.component';
import { ShortCircuitComponent } from './components/service/service-detail/short-circuit/short-circuit.component';
import { ArcFlashComponent } from './components/service/service-detail/arc-flash/arc-flash.component';


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
  // {
  //   path: 'dichvu/:id', component: ServiceGroupComponent,
  // },
  {
    path: 'dichvu/tinh-toan-ngan-mach-phoi-hop-bao-ve',
    component: ShortCircuitComponent,
  },
  {
    path: 'dichvu/phan-tich-nguy-co-ho-quang-dien',
    component: ArcFlashComponent,
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
