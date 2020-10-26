import { NgModule } from "@angular/core";
import { ProductRepo } from "./productrepo";
import { StaticDataSource } from "./datasource";
@NgModule({
 providers: [ProductRepo, StaticDataSource]
})
export class ModelModule { }