import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EcommerceService } from '../../services/ecommerce.service';

import { Products } from '../../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Output() modalOpen = new EventEmitter<boolean>();
  products: Products[] = [];
  currentQuantity: number = 0;
  subtotal: number = 0;

  constructor( private ES: EcommerceService,
               private router: Router  ) { }

  ngOnInit(): void {
    
    this.ES.myCart$.subscribe(({products, quantity, totalPrice}) => {
      console.log(products);
      this.products = products
      this.currentQuantity = quantity
      this.subtotal =  totalPrice
      
    })
  }

  closeModal(){
    this.modalOpen.emit(false)
  }

  goToShop(){
    this.router.navigateByUrl('/products')
  }

}
