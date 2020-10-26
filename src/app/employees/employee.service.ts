import { Injectable } from '@angular/core';
import {Employee} from '../models/employee.model'
import { EmployeeDetailsComponent } from './employee-details.component';

@Injectable()
export class EmployeeService {
  
    private employees:Employee[] =[{
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

      getEmploye():Employee[]
      {
        return this.employees;
      }
      getEmployeeById(id:number):Employee
      {
          return this.employees.find((item)=>item.id===id);
      }
      saveEmployee(employee:Employee)
      {
        this.employees.push(employee);
      }
}