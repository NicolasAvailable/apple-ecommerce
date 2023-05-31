import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../ecommerce/interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlDataBase = environment.urlDataBaseFirebase;

  constructor( private http: HttpClient ) { }

  getProductsFromFB(){
    const url = `${this.urlDataBase}/products.json`
    return this.http.get<Products[]>(url);
  }

  getOneProduct(id: number){
    const url = `${this.urlDataBase}/products/${id}.json`
    return this.http.get<Products>(url);
  }
}
