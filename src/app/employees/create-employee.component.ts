import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from "../models/employee.model";
import { EmployeeService } from '../employees/employee.service'
import { Router } from '@angular/router'
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = {

    id: null,
    name: null,
    gander: null,
    email: null,
    phoneNumber: null,
    department: null,
    contactPrefernce: null,
    dateOfBirth: null,
    isActive: null


  };

  dep: Department[] = [{
    id: "1",
    value: "HR"

  },
  {
    id: "2",
    value: "Sales"
  }
  ];

  constructor(private _employeeService: EmployeeService, private _routerService: Router) { }

  ngOnInit(): void {

  }
  saveEmployee(): void {
    this._employeeService.saveEmployee(this.employee);
    this._routerService.navigate(['list']);
  }
}
