import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/product.interface';
import { DataService } from '../../../data/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products$: Products[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getProductsFromFB().subscribe( products => {
      this.products$ = products
    })
  }

}
