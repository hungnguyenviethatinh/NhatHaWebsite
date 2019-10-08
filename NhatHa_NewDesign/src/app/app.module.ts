import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NzAffixModule, NzAnchorModule, NzCarouselModule, NzDividerModule, NzButtonModule, NzFormModule, NzTableModule,
  NzBackTopModule, NzGridModule, NzIconModule, NzInputModule, NzMenuModule, NzTypographyModule, NZ_I18N, vi_VN
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
    ShortCircuitComponent,
    ArcFlashComponent,
    TestCommitComponent,
    PowerQualityComponent,
    EpMaintainComponent,
    InfraredScanComponent,
    OpdTestComponent,
    PowerSystemStudyComponent,
    ConditionalMaintainComponent,
    ProductComponent,
    InfraredWindowComponent,
    CbmToolComponent,
    OnlineMonitorComponent,
    IrissProductComponent,
    CordexProductComponent,
    IrissDetailComponent,
    CordexCameraComponent,
    CameraDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzAffixModule,
    NzBackTopModule,
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
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})

export class AppModule { }
