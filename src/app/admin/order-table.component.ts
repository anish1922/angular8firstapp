import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrderRepository } from '../models/orderRepo';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  includeShipped = false;
  constructor(private repository: OrderRepository) {

  }
  ngOnInit(): void {
  }
  getOrders(): Order[] {
    return this.repository.getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }
  delete(id: number) {
    this.repository.deleteOrder(id);
  }
  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }
}
