import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import {Department} from '../models/department.model'
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  fullName = "";
  email = "";
  gender = "";
  phoneNumber = "";
  contactPref = "";
  department = "HR";
  isAcive = true;
  dep:Department[]=[{
 id:"1",
 value:"HR"

  },
{
  id:"2",
  value:"Sales"
}
] ;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  saveEmployee(formVlues: NgForm): void {
    console.log(formVlues.value);
  }
}
