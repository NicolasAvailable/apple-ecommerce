import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { EcommerceService } from '../../services/ecommerce.service';
import { Products } from '../../interfaces/product.interface';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.scss']
})
export class AboutProductComponent implements OnInit {

  constructor( private activatedRouter: ActivatedRoute,
               public ES: EcommerceService 
  ) { }

  product!: Products;


  ngOnInit(): void {
    this.activatedRouter.params.pipe(
      switchMap( ({id}) => this.ES.getOneProduct(id))
    ).subscribe( productCalled => {
      console.log(productCalled);
      this.product = productCalled
    })

  }

}
