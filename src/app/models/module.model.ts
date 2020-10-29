import { NgModule } from "@angular/core";
import { ProductRepo } from "./productrepo";
import { StaticDataSource } from "./datasource";
import { Cart } from './cart.model';
import { OrderRepository } from './orderRepo';
import { Order } from './order.model';
@NgModule({
 providers: [ProductRepo, StaticDataSource,Cart,OrderRepository,Order]
})
export class ModelModule { }