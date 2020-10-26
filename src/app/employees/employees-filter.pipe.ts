import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';
@Pipe({
 name:'employeeFiler'
})
export class EmployeeFileter implements PipeTransform {

    transform(employees: Employee[], filetertext: string):Employee[] {
        if (!employees || !filetertext) {
            return employees;
        }

        return employees.filter(employe=>employe.name.toLowerCase().indexOf(filetertext.toLowerCase())!=-1);
    }
}