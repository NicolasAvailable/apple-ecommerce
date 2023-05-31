import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './modal/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { CardProductComponent } from './modal/card-product/card-product.component';
import { ComponentsModule } from '../components/components.module';
import { AboutProductComponent } from './pages/about-product/about-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    CartComponent,
    ProductComponent,
    CardProductComponent,
    AboutProductComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FormsModule
  ]
})
export class EcommerceModule { }
