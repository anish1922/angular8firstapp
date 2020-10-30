import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeRoutGaurd } from './employees/create-employee-route-guard.service';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { TempComponent } from './employees/temp.component';
import { CartDetailComponent } from './store/cart-detail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreFirstGuard } from './store/store-first.guard';
import { StorelistComponent } from './store/storelist.component';
import { ListUsersComponent } from './users/list-users.component';
const routes: Routes = [
  { path: "store", component: StorelistComponent, canActivate: [StoreFirstGuard] },
  { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
  { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [StoreFirstGuard]
  },
  { path: "**", redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard]
})
export class AppRoutingModule { }
