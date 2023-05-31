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
  addCart( product: Products, qty?: number ){
    const productFind = this.cartStorage.products.find( p => p.id === product.id)

    if(product.qty === 0){
      product.qty = 1
    }

    if(productFind){
      productFind.qty += 1;
      this.cartStorage.quantity += 1;
      this.cartStorage.totalPrice = this.getTotalPrice(this.cartStorage);
      this.myCart.next({...this.cartStorage});
      this.saveCartProducts(this.cartStorage)
      return
    }

    this.cartStorage.products.push(product);
    this.cartStorage.quantity += qty || 1;
    this.cartStorage.totalPrice = this.getTotalPrice(this.cartStorage);
    this.myCart.next({...this.cartStorage});
    this.saveCartProducts(this.cartStorage)
  }

  // chequear porque despues de agregar un producto por primera vez pasa al if de productFind y se le modifi
  // ca el qty
  addCartFromAbout(product: Products){
    const productFind = this.cartStorage.products.find( p => p.id === product.id)

    if(productFind){
      this.cartStorage.quantity += product.qty;
      productFind.qty += product.qty
      this.cartStorage.totalPrice = this.getTotalPrice(this.cartStorage);
      this.myCart.next({...this.cartStorage});
      this.saveCartProducts(this.cartStorage)
      return
    }

    this.addCart(product, product.qty)
    return
  }

  moreProduct(product: Products){
    product.qty += 1;
    return
  }

  lessProduct(product: Products ){
    if(product.qty === 1) return
    product.qty -= 1;
    return
  }

  deleteProduct(product: Products){
    
    if(product.qty > 1){
      product.qty -= 1;
      this.cartStorage.quantity -= 1;
      this.cartStorage.totalPrice = this.getTotalPrice(this.cartStorage);
      this.myCart.next({...this.cartStorage});
      this.saveCartProducts(this.cartStorage)
      return
    }

    this.deleteAllProduct(product)
    return
  }


  deleteAllProduct(product: Products){
    const index = this.cartStorage.products.findIndex(item => item.id === product.id);

    if (index !== -1) {
      this.cartStorage.products.splice(index, 1);
      this.cartStorage.quantity -= product.qty;
      product.qty -= product.qty;
      this.cartStorage.totalPrice = this.getTotalPrice(this.cartStorage);
      this.myCart.next({...this.cartStorage});
      this.saveCartProducts(this.cartStorage)
    }
  }


  //TODO: to fix the issues with the final price
  // this function calculate the final price
  getTotalPrice(cartStorage: CartStorage): number {
    return cartStorage.products.reduce((total, product) => total + (product.price * product.qty), 0);
  }
  

  saveCartProducts( cartStorage: CartStorage ){
    localStorage.setItem('cartstorage', JSON.stringify(cartStorage));
  }

  getLocalStorage(){
    const cartStorageFromLS = localStorage.getItem('cartstorage');
    this.cartStorage = cartStorageFromLS ? JSON.parse(cartStorageFromLS) : {products: [], quantity: 0, totalPrice: 0 };
    this.myCart.next({...this.cartStorage})
  }
  

}
