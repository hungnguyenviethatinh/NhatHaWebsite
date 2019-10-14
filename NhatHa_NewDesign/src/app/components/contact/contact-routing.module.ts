import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JobCareerComponent } from './job-career/job-career.component';

const contactRoutes: Routes = [
  {
    path: 'tuyen-dung', component: JobCareerComponent,
  },
  {
    path: '', component: ContactUsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ContactRoutingModule { }
