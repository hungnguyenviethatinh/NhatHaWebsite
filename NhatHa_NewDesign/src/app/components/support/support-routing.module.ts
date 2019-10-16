import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareComponent } from './software/software.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

const supportRoutes: Routes = [
  {
    path: 'phan-mem', component: SoftwareComponent,
  },
  {
    path: 'nghien-cuu', component: CaseStudiesComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(supportRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class SupportRoutingModule { }
