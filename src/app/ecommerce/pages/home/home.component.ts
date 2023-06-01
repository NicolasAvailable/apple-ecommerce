import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../services/ecommerce.service';
import { CartStorage } from '../../interfaces/cart-storage.interface';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public modalService: ModalService ){}

  ngOnInit(): void {
  }

}
