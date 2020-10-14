import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model'
@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[] =[{
    id:1,
    name:'Anish Kumar',
    gander:'M',
    email:'anish.1922@gmail.com',
    phoneNumber:1234566,
    contactPrefernce:'email',
    dateOfBirth:new Date('20jul1984'),
    department:'IT',
    isActive:true,
    photoPath:'assets/images/users.png'
  },
  {
    id:2,
    name:'Mohit Kumar',
    gander:'M',
    email:'anish.1922@gmail.com',
    phoneNumber:1234566,
    contactPrefernce:'email',
    dateOfBirth:new Date('20jul1984'),
    department:'IT',
    isActive:true,
    photoPath:'assets/images/users.png'
  },{
    id:3,
    name:'Suresh Kumar',
    gander:'M',
    email:'anish.1922@gmail.com',
    phoneNumber:1234566,
    contactPrefernce:'email',
    dateOfBirth:new Date('20jul1984'),
    department:'IT',
    isActive:true,
    photoPath:'assets/images/users.png'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
