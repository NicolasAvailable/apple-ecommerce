import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../services/ecommerce.service';
import { CartStorage } from '../../interfaces/cart-storage.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

}
