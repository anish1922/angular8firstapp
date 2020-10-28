import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule} from '../models/module.model'
import { FormsModule } from '@angular/forms';
import { StorelistComponent } from './storelist.component';
import { BrowserModule } from '@angular/platform-browser';
import { CounterDirective } from './counter.directive';


@NgModule({
  declarations: [StorelistComponent,CounterDirective],
  imports: [
    ModelModule,FormsModule,BrowserModule
  ],
  exports:[StorelistComponent]
})
export class StoreModule { }
