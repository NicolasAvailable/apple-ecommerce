import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './modal/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';



@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    CartComponent,
    ProductComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EcommerceModule { }
