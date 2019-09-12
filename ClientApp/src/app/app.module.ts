import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { OurCompanyComponent } from './components/our-company/our-company.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PartnersComponent } from './components/partners/partners.component';
import { SupportsComponent } from './components/supports/supports.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OurVisionComponent } from './components/our-company/our-vision/our-vision.component';
import { OurEquipComponent } from './components/our-company/our-equip/our-equip.component';
import { SoftwaresComponent } from './components/supports/softwares/softwares.component';
import { CaseStudiesComponent } from './components/supports/case-studies/case-studies.component';
import { ContactInfoComponent } from './components/contact-us/contact-info/contact-info.component';
import { JobCareerComponent } from './components/contact-us/job-career/job-career.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    OurCompanyComponent,
    ServicesComponent,
    ProductsComponent,
    ProjectsComponent,
    PartnersComponent,
    SupportsComponent,
    ContactUsComponent,
    OurVisionComponent,
    OurEquipComponent,
    SoftwaresComponent,
    CaseStudiesComponent,
    ContactInfoComponent,
    JobCareerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
