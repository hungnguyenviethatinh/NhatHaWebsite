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


const routes: Routes = [
  {
    path: 'trangchu', component: HomeComponent,
  },
  {
    path: 'tamnhin-sumenh-giatri', component: VisionMissionValueComponent,
  },
  {
    path: 'thietbi', component: EquipmentComponent,
  },
  {
    path: 'doitac', component: PartnerComponent,
  },
  {
    path: 'duan', component: ProjectComponent,
  },
  {
    path: 'phanmem', component: SoftwareComponent,
  },
  {
    path: 'nghiencuu', component: CaseStudiesComponent,
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
