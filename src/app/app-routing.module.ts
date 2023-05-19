import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './ecommerce/pages/home/home.component';
import { ShopComponent } from './ecommerce/pages/shop/shop.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ShopComponent},
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
