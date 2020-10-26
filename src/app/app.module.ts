import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {EmployeeService} from '../app/employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component'
import {CreateEmployeeRoutGaurd} from '../app/employees/create-employee-route-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { TempComponent } from './employees/temp.component'
import { EmployeeFileter } from './employees/employees-filter.pipe';
import { ListUsersComponent } from './users/list-users.component';
import { StorelistComponent } from './store/storelist.component';
import { StoreModule } from './store/store.module';
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    TempComponent,
    EmployeeFileter,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule
  ],
  providers: [EmployeeService,CreateEmployeeRoutGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
