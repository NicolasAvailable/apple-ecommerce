import { Injectable } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';
import { CartStorage } from '../interfaces/cart-storage.interface';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService extends DataService {

  constructor( http: HttpClient ) {
    super(http)
  }

  private cartStorage: CartStorage = {
    products: [],
    quantity: 0,
    totalPrice: 0 
  }

  private myCart = new BehaviorSubject<CartStorage>(this.cartStorage);
  myCart$ = this.myCart


  //this add a new product the cartStorage or updated it
  addCart( product: Products){

    if(this.cartStorage.products.some(p => p.id === product.id)){
      this.cartStorage.quantity += 1
      this.cartStorage.totalPrice = this.calculatePrice()
      this.myCart.next(this.cartStorage)
      console.log('aqui estoy');
      console.log(this.cartStorage);
      return
    }

    this.cartStorage.products.push(product)
    this.cartStorage.quantity += 1
    this.cartStorage.totalPrice = this.calculatePrice()
    this.myCart.next(this.cartStorage)
    console.log(this.cartStorage);
  }

  // this function calculate the final price
  calculatePrice(){
    let totalPrice = 0;
    this.cartStorage.products.forEach( product => {
      totalPrice = totalPrice + product.price;
    })
    // totalPrice = this.cartStorage.products.reduce((total, product) => total + (product.price * this.cartStorage.quantity), 0);
    console.log(totalPrice * this.cartStorage.quantity);
    return totalPrice * this.cartStorage.quantity
  }
  

}
