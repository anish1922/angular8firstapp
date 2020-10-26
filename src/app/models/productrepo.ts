import { Injectable } from '@angular/core'
import { StaticDataSource } from '../models/datasource'
import { Product } from '../models/product.model'
@Injectable()
export class ProductRepo {

    private products: Product[] = [];
    private categories: string[] = [];
    constructor(private _datSource: StaticDataSource) {

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

}