import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { CartStorage } from 'src/app/ecommerce/interfaces/cart-storage.interface';
import { EcommerceService } from 'src/app/ecommerce/services/ecommerce.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() modal = new EventEmitter<boolean>()
  myCart!: CartStorage;

  constructor( public ES: EcommerceService ) { }

  ngOnInit(): void {
    this.ES.myCart$.subscribe(cartStorage => {
      this.myCart = cartStorage
    })
  }

  openModal(){
    this.modal.emit(true)
  }

}
