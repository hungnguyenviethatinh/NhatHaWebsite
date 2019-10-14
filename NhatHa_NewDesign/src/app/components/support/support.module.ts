import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { SupportRoutingModule } from './support-routing.module';
import { SoftwareComponent } from './software/software.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

@NgModule({
  declarations: [
    SoftwareComponent,
    CaseStudiesComponent,
  ],
  imports: [
    SharedModule,
    SupportRoutingModule,
  ]
})
export class SupportModule { }
