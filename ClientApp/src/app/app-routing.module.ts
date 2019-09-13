import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { OurVisionComponent } from './components/our-company/our-vision/our-vision.component';
import { OurEquipComponent } from './components/our-company/our-equip/our-equip.component';
import { CaseStudiesComponent } from './components/supports/case-studies/case-studies.component';
import { SoftwaresComponent } from './components/supports/softwares/softwares.component';
import { ContactInfoComponent } from './components/contact-us/contact-info/contact-info.component';
import { JobCareerComponent } from './components/contact-us/job-career/job-career.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'our-company/our-vision', component: OurVisionComponent },
  { path: 'our-company/our-equip', component: OurEquipComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'supports/case-studies', component: CaseStudiesComponent },
  { path: 'supports/softwares', component: SoftwaresComponent },
  { path: 'contact-us/contact-info', component: ContactInfoComponent },
  { path: 'contact-us/job-career', component: JobCareerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
