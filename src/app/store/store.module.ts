import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule} from '../models/module.model'
import { FormsModule } from '@angular/forms';
import { StorelistComponent } from './storelist.component';
import { BrowserModule } from '@angular/platform-browser';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary.component';
import { CheckoutComponent } from './checkout.component';
import { CartDetailComponent } from './cart-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [StorelistComponent,CounterDirective,CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  imports: [
    ModelModule,FormsModule,BrowserModule,RouterModule
  ],
  exports:[StorelistComponent]
})
export class StoreModule { }
