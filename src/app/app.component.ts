import { Component, OnInit } from '@angular/core';
import { EcommerceService } from './ecommerce/services/ecommerce.service';
import { CartStorage } from './ecommerce/interfaces/cart-storage.interface';
import { ModalService } from './ecommerce/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  switchModal: boolean = false;

  constructor( private ES: EcommerceService,
               public modalService: ModalService ) { }

  ngOnInit(): void {
    this.ES.getLocalStorage()
  }

}
