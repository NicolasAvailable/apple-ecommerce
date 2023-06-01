import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { CartStorage } from 'src/app/ecommerce/interfaces/cart-storage.interface';
import { ModalService } from 'src/app/ecommerce/modal/modal.service';
import { EcommerceService } from 'src/app/ecommerce/services/ecommerce.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  myCart!: CartStorage;

  constructor( public ES: EcommerceService,
               public modalService: ModalService ) { }

  ngOnInit(): void {
    this.ES.myCart$.subscribe(cartStorage => {
      this.myCart = cartStorage
    })
  }

}
