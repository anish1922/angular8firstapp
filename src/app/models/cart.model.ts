import { Injectable } from '@angular/core'
import { Product } from './product.model';

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number;
    public cartPrice: number;
    constructor() {}
    addLine(product: Product, quantity: number = 1) {
        let line = this.lines.find(x => x.product.id == product.id);
        if (line != undefined) {
            line.quintity = line.quintity + quantity;
        }
        else {
            this.lines.push(new CartLine(product, quantity));
        }

        this.reCalculate();
    }
    reCalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {

            this.itemCount = this.itemCount + l.quintity;
            this.cartPrice += (l.quintity * l.product.price);

        });
    }

    clear() {
        this.lines = [];
        this.cartPrice = 0;
        this.itemCount = 0;
    }
    removeLine(id: number) {
        let index = this.lines.findIndex(x => x.product.id == id);
        this.lines.splice(index, 1);
        this.reCalculate();
    }
    updateQuantity(product: Product, quantity: number) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quintity = Number(quantity);
        }
        this.reCalculate();
    }
    
}

class CartLine {
    constructor(public product:Product,public quintity:number) {
        
    }
    get lineTotal()
    {
        return this.quintity*this.product.price;
    }
}