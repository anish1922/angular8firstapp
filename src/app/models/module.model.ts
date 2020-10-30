import { NgModule } from "@angular/core";
import { ProductRepo } from "./productrepo";
import { StaticDataSource } from "./datasource";
import { Cart } from './cart.model';
import { OrderRepository } from './orderRepo';
import { Order } from './order.model';
import { RestDataSource } from './restDataSource';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from "./auth.service";
@NgModule({
    imports:[HttpClientModule],
 providers: [ProductRepo, StaticDataSource,Cart,OrderRepository,Order,{ provide: StaticDataSource, useClass: RestDataSource },RestDataSource,AuthService]
})
export class ModelModule { }