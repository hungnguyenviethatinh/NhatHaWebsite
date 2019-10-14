import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { VisionMissionValueComponent } from './vision-mission-value/vision-mission-value.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  declarations: [
    VisionMissionValueComponent,
    EquipmentComponent,
  ],
  imports: [
    SharedModule,
    CompanyRoutingModule,
  ]
})
export class CompanyModule { }
