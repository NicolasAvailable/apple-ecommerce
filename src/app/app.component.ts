import { Component, OnInit } from '@angular/core';
import { EcommerceService } from './ecommerce/services/ecommerce.service';
import { CartStorage } from './ecommerce/interfaces/cart-storage.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  switchModal: boolean = false;

  constructor( private ES: EcommerceService ) { }

  ngOnInit(): void {
    this.ES.getLocalStorage()
  }

  openModal(event: boolean){
    this.switchModal = event
  }

  closeModal( event: boolean ){
    this.switchModal = event;
  }


}
