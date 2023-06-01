import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EcommerceService } from '../../services/ecommerce.service';

import { Products } from '../../interfaces/product.interface';
import { Router } from '@angular/router';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: Products[] = [];
  currentQuantity: number = 0;
  subtotal: number = 0;

  constructor( private ES: EcommerceService,
               private router: Router,
               public modalService: ModalService  ) { }

  ngOnInit(): void {
    
    this.ES.myCart$.subscribe(({products, quantity, totalPrice}) => {
      console.log(products);
      this.products = products
      this.currentQuantity = quantity
      this.subtotal =  totalPrice
      
    })
  }

  goToShop(){
    this.router.navigateByUrl('/products')
  }

}
