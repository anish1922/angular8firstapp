import { Component, OnInit } from '@angular/core';
import { ProductRepo } from '../models/productrepo'
import { Product } from '../models/product.model'
import { Cart } from '../models/cart.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.component.html',
  styleUrls: ['./storelist.component.css']
})
export class StorelistComponent implements OnInit {
  public selectedCat = null;
  public productPerPage = 4;
  public selectedPage = 1;
  constructor(private _productRepo: ProductRepo, private cart: Cart,private _router:Router) { }
  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productPerPage;
    return this._productRepo.getProducts(this.selectedCat).slice(pageIndex, pageIndex + this.productPerPage);
  }
  get categories(): string[] {
    return this._productRepo.getCategories();
  }
  ngOnInit(): void {
  }

  changeCategory(cat?: string) {
    this.selectedCat = cat;
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newPageSize: number) {
    this.productPerPage = Number(newPageSize);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this._productRepo.
      getProducts(this.selectedCat).length / this.productPerPage)).fill(0).map((x, i) => i + 1);
  }
  get pageCount(): number {
    return Math.ceil(this._productRepo
      .getProducts(this.selectedCat).length / this.productPerPage)
  }
  addProductToCart(product: Product) {
    this.cart.addLine(product);
     this._router.navigateByUrl('/cart');
  }
}
