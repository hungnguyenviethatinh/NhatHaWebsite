import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'trang-chu',
    loadChildren: () => import('./components/home/home.module').then(mod => mod.HomeModule),
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
    path: 'doi-tac',
    loadChildren: () => import('./components/partner/partner.module').then(mod => mod.PartnerModule),
  },
  {
    path: 'du-an',
    loadChildren: () => import('./components/project/project.module').then(mod => mod.ProjectModule),
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
  { path: '**', component: PageNotFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    // anchorScrolling: 'enabled',
    // scrollOffset: [0, 120],
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
