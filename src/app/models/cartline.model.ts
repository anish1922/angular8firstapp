import { Product } from './product.model';

export class CartLine {
    constructor(public product:Product,public quintity:number) {
        
    }
    get lineTotal()
    {
        return this.quintity*this.product.price;
    }
}