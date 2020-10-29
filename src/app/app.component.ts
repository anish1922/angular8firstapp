import { Component } from '@angular/core';
import {Model, ToDoItem} from '../app/models/model'
@Component({
  selector: 'app-root',
  templateUrl:"./app.component.html"
})
export class AppComponent {
  title = 'angular8firstapp';
  m:Model= new Model();;
  getName():string
  {
    
    return this.m.user;
  }
  getTodoItems(): ToDoItem[]
  {
    
    return this.m.items;
  }
  addItem(item)
  {
  if(item!="")
    this.m.items.push(new ToDoItem(item,false));
  }
}
