import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductRepo } from '../models/productrepo';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
  editing: boolean = false;
  product: Product = new Product();
  constructor(private pRepo: ProductRepo, private router: Router, activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";

    if (this.editing) {
      Object.assign(this.product, pRepo.getProduct(activeRoute.snapshot.params["id"]));
    }

  }

  ngOnInit(): void {
  }
  save(form: NgForm) {
    this.pRepo.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }
}
