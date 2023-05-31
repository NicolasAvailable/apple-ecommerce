import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './ecommerce/pages/home/home.component';
import { ShopComponent } from './ecommerce/pages/shop/shop.component';
import { AboutProductComponent } from './ecommerce/pages/about-product/about-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ShopComponent},
  {path: 'products/:id', component: AboutProductComponent},
  {path: '**', redirectTo: ''},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
