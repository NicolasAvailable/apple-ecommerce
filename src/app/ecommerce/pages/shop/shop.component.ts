import { Component, OnInit } from '@angular/core';

import { Products } from '../../interfaces/product.interface';
import { EcommerceService } from '../../services/ecommerce.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products$!: Products[];

  constructor(private ES: EcommerceService) { }

  ngOnInit(): void {
    this.ES.getProductsFromFB().
    subscribe( products => {
      this.products$ = products
    })
  }

}
