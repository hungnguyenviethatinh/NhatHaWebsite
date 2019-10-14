import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PartnerComponent } from './components/partner/partner.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  {
    path: 'trang-chu', component: HomeComponent,
  },
  {
    path: 'doanh-nghiep',
    loadChildren: () => import('./components/company/company.module').then(mod => mod.CompanyModule),
  },
  {
    path: 'dich-vu',
    loadChildren: () => import('./components/service/service.module').then(mod => mod.ServiceModule),
    data: { preload: true },
  },
  {
    path: 'san-pham',
    loadChildren: () => import('./components/product/product.module').then(mod => mod.ProductModule),
    data: { preload: true },
  },
  {
    path: 'doi-tac', component: PartnerComponent,
  },
  {
    path: 'du-an', component: ProjectComponent,
  },
  {
    path: 'ho-tro',
    loadChildren: () => import('./components/support/support.module').then(mod => mod.SupportModule),
  },
  {
    path: 'lien-he',
    loadChildren: () => import('./components/contact/contact.module').then(mod => mod.ContactModule),
  },
  {
    path: '', redirectTo: '/trang-chu', pathMatch: 'full',
  },
  { path: '**', component: HomeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 120],
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
