import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  NzAffixModule, NzAnchorModule, NzCarouselModule, NzDividerModule,
  NzButtonModule, NzFormModule, NzTableModule, NzDrawerModule,
  NzBackTopModule, NzGridModule, NzIconModule, NzInputModule,
  NzMenuModule, NzTypographyModule, NzMessageModule,
} from 'ng-zorro-antd';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzAffixModule,
    NzAnchorModule,
    NzCarouselModule,
    NzDividerModule,
    NzButtonModule,
    NzFormModule,
    NzTableModule,
    NzDrawerModule,
    NzBackTopModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzMenuModule,
    NzTypographyModule,
    NzMessageModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MenuComponent,
    CommonModule,
    RouterModule,
    NzAffixModule,
    NzAnchorModule,
    NzCarouselModule,
    NzDividerModule,
    NzButtonModule,
    NzFormModule,
    NzTableModule,
    NzDrawerModule,
    NzBackTopModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzMenuModule,
    NzTypographyModule,
    NzMessageModule,
    ReactiveFormsModule,
    TranslateModule
  ],
})
export class SharedModule { }
