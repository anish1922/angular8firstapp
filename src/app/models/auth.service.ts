import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from './restDataSource';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private restDatasource: RestDataSource) { }
  authenticate(user: string, password: string): Observable<boolean> {
    return this.restDatasource.authenticate(user, password);
  }

  get authenticated(): boolean {
    return this.restDatasource.authToken != null;
  }
  clear() {
    this.restDatasource.authToken = null;
    }

    

}
