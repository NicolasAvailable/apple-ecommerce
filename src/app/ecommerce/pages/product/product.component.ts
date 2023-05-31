import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../interfaces/product.interface';
import { EcommerceService } from '../../services/ecommerce.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productInput!: Products;

  constructor( public ES: EcommerceService,
                ) { }

  ngOnInit(): void {
  }

}
