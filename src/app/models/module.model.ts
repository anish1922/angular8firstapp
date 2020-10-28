import { NgModule } from "@angular/core";
import { ProductRepo } from "./productrepo";
import { StaticDataSource } from "./datasource";
import { Cart } from './cart.model';
@NgModule({
 providers: [ProductRepo, StaticDataSource,Cart]
})
export class ModelModule { }