import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NzAffixModule, NzAnchorModule, NzCarouselModule, NzDividerModule, NzButtonModule, NzFormModule,
  NzGridModule, NzIconModule, NzInputModule, NzMenuModule, NzTypographyModule, NZ_I18N, vi_VN
} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { EquipmentComponent } from './components/company/equipment/equipment.component';
import { VisionMissionValueComponent } from './components/company/vision-mission-value/vision-mission-value.component';
import { PartnerComponent } from './components/partner/partner.component';
import { SoftwareComponent } from './components/support/software/software.component';
import { CaseStudiesComponent } from './components/support/case-studies/case-studies.component';
import { ContactUsComponent } from './components/contact/contact-us/contact-us.component';
import { JobCareerComponent } from './components/contact/job-career/job-career.component';
import { ProjectComponent } from './components/project/project.component';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquipmentComponent,
    VisionMissionValueComponent,
    PartnerComponent,
    SoftwareComponent,
    CaseStudiesComponent,
    ContactUsComponent,
    JobCareerComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzAffixModule,
    NzAnchorModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzCarouselModule,
    NzDividerModule,
    NzGridModule,
    NzIconModule,
    NzMenuModule,
    NzTypographyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
