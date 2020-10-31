import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { Product } from './product.model';
import { map } from "rxjs/operators";

const PROTOCOL = "http";
const PORT = 3500;
@Injectable()
export class RestDataSource {
    baseUrl: string;
    authToken: string;
    constructor(private _restClient: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this._restClient.get<Product[]>(this.baseUrl + "products", this.getOptions());
    }
    saveOrder(order: Order): Observable<Order> {
        return this._restClient.post<Order>(this.baseUrl + "orders", order, this.getOptions());
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this._restClient.post<any>(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(map(response => {
            this.authToken = response.success ? response.token : null;
            return response.success;
        }));
    }

    getOptions() {
        return {
            headers: new HttpHeaders({ "Authorization": `Bearer<${this.authToken}>` })
        }
    }
    getOrders(): Observable<Order[]> {
        return this._restClient.get<Order[]>(this.baseUrl + "orders", this.getOptions());
        }
    deleteOrder(id: number): Observable<Order> {
        return this._restClient.delete<Order>(`${this.baseUrl}orders/${id}`,
            this.getOptions());
    }
    updateOrder(order: Order): Observable<Order> {
        return this._restClient.put<Order>(`${this.baseUrl}orders/${order.id}`,
            this.getOptions());
    }

    updateProduct(product): Observable<Product> {
        return this._restClient.put<Product>(`${this.baseUrl}products/${product.id}`,
            product, this.getOptions());
    }
    deleteProduct(id: number): Observable<Product> {
        return this._restClient.delete<Product>(`${this.baseUrl}products/${id}`,
            this.getOptions());
    }
    saveProduct(product: Product): Observable<Product> {
        return this._restClient.post<Product>(this.baseUrl + "products",
            product, this.getOptions());
    }

}