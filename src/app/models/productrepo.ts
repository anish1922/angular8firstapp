import { Injectable } from '@angular/core'
import { StaticDataSource } from '../models/datasource'
import { Product } from '../models/product.model'
import { RestDataSource } from './restDataSource';
@Injectable()
export class ProductRepo {

    private products: Product[] = [];
    private categories: string[] = [];
    constructor(private _datSource: RestDataSource) {

        _datSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) == index).sort();
        })

    }

    getProducts(category: string = null): Product[] {
        return this.products
            .filter(p => category == null || category == p.category);
    }
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }
    getCategories(): string[] {
        return this.categories;
    }

    saveProduct(product: Product) {
        if (product.id == null || product.id == 0) {
            this._datSource.saveProduct(product).subscribe(product => this.products.push(product));
        }
        else {
            this._datSource.updateProduct(product).subscribe(product => {
                this.products.splice(this.products.findIndex(p => p.id = product.id), 1, product);
            })
        }
    }

    deleteProduct(id: number) {
        this._datSource.deleteProduct(id).subscribe(p => {
        this.products.splice(this.products.
        findIndex(p => p.id == id), 1);
        })
        }

}