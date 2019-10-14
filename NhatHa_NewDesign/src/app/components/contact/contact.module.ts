import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JobCareerComponent } from './job-career/job-career.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactUsComponent,
    JobCareerComponent,
  ],
  imports: [
    SharedModule,
    ContactRoutingModule,
  ]
})
export class ContactModule { }
