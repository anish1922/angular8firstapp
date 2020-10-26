import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {EmployeeService} from  '../employees/employee.service'
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _router:ActivatedRoute,private _employeeServic:EmployeeService) { }
  employee:Employee;
  ngOnInit(): void {
     const id=+this._router.snapshot.params['id'];
     this.employee=this._employeeServic.getEmployeeById(id);
  }

}
