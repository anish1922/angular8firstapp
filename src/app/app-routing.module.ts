import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeRoutGaurd } from './employees/create-employee-route-guard.service';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { TempComponent } from './employees/temp.component';
import { StorelistComponent } from './store/storelist.component';
import { ListUsersComponent } from './users/list-users.component';
const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
