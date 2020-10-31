import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductRepo } from '../models/productrepo';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  constructor(private productRepo: ProductRepo) { }

  ngOnInit(): void {
  }

  getProducts(): Product[] {
    return this.productRepo.getProducts();
  }
  deleteProduct(id: number) {
    this.deleteProduct(id);
  }

}
