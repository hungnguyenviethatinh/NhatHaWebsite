import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NzAnchorModule, NzCarouselModule, NzDividerModule, NzButtonModule, NzFormModule, NzTableModule,
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
import { ServiceComponent } from './components/service/service.component';
import { ServiceGroupComponent } from './components/service/service-group/service-group.component';
import { ShortCircuitComponent } from './components/service/service-detail/short-circuit/short-circuit.component';
import { ArcFlashComponent } from './components/service/service-detail/arc-flash/arc-flash.component';
import { TestCommitComponent } from './components/service/service-detail/test-commit/test-commit.component';
import { PowerQualityComponent } from './components/service/service-detail/power-quality/power-quality.component';
import { EpMaintainComponent } from './components/service/service-detail/ep-maintain/ep-maintain.component';
import { InfraredScanComponent } from './components/service/service-detail/infrared-scan/infrared-scan.component';
import { OpdTestComponent } from './components/service/service-detail/opd-test/opd-test.component';

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
    ServiceComponent,
    ServiceGroupComponent,
    ShortCircuitComponent,
    ArcFlashComponent,
    TestCommitComponent,
    PowerQualityComponent,
    EpMaintainComponent,
    InfraredScanComponent,
    OpdTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
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
