import { Injectable } from '@angular/core';
import {CanActivate, CanDeactivate} from '@angular/router'
import { CreateEmployeeComponent } from './create-employee.component'
@Injectable()
export class CreateEmployeeRoutGaurd implements CanDeactivate<CreateEmployeeComponent> {
    
    canDeactivate(component: CreateEmployeeComponent):boolean
    {
     
    if(component.createEmployeeform.dirty)
    return confirm('are you sure you want to discard cahnges');
     else
     return true;
    }
    
}
