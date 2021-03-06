import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { ProductTableComponent } from './product-table.component';
import { ProductEditorComponent } from './product-editor.component';
import { OrderTableComponent } from './order-table.component';

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  {
    path: "main", component: AdminComponent, canActivate: [AuthGuard],
    children: [{ path: "products/:mode/:id", component: ProductEditorComponent },
    { path: "products/:mode", component: ProductEditorComponent },
    { path: "products", component: ProductTableComponent },
    { path: "orders", component: OrderTableComponent },
    { path: "**", redirectTo: "products" }]

  },
  { path: "**", redirectTo: "auth" }
]);

@NgModule({
  declarations: [AdminComponent, AuthComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent],
  imports: [
    CommonModule, FormsModule, routing],
  providers: [AuthGuard]
})
export class AdminModule { }
