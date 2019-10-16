import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisionMissionValueComponent } from './vision-mission-value/vision-mission-value.component';
import { EquipmentComponent } from './equipment/equipment.component';

const companyRoutes: Routes = [
  {
    path: 'tamnhin-sumenh-giatri', component: VisionMissionValueComponent,
  },
  {
    path: 'thiet-bi', component: EquipmentComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(companyRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CompanyRoutingModule { }
