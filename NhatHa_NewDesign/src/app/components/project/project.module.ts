import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const projectRoutes: Routes = [
  {
    path: '', component: ProjectComponent,
  },
];


@NgModule({
  declarations: [
    ProjectComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(projectRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProjectModule { }
