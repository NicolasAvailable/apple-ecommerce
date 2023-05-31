import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../interfaces/product.interface';
import { EcommerceService } from '../../services/ecommerce.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product!: Products;
  qty!: number;

  constructor( public ES: EcommerceService ) { }

  ngOnInit(): void {
    this.qty = this.product.qty
  }

  selectQty(){
    console.log(this.qty);
    this.ES.addCart(this.product)
  }

}
