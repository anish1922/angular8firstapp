import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from '../models/employee.model'
import { EmployeeService } from './employee.service';
import {Router} from '@angular/router';
@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  childData: string;
  searchText:string;
  constructor(private _empService: EmployeeService,private _router:Router) { }

  ngOnInit(): void {
    this.employees = this._empService.getEmploye();
  }
  handleEvent(data: string) {
    this.childData = data;
  }

  onClick(id:number)
  {
  this._router.navigate(["/employee",id])
  }
}
