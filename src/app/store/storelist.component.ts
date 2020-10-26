import { Component, OnInit } from '@angular/core';
import { ProductRepo } from '../models/productrepo'
import { Product } from '../models/product.model'
@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.component.html',
  styleUrls: ['./storelist.component.css']
})
export class StorelistComponent implements OnInit {

  constructor(private _productRepo: ProductRepo) { }
  get products(): Product[] {
    return this._productRepo.getProducts();
  }
  get categories(): string[] {
    return this._productRepo.getCategories();
  }
  ngOnInit(): void {
  }

}
