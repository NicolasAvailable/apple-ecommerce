import { Products } from "./product.interface";


export interface CartStorage {
    products: Products[],
    quantity: number,
    totalPrice: number
}