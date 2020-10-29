import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorelistComponent } from './storelist.component';

@Injectable({
  providedIn: 'root'
})
export class StoreFirstGuard implements CanActivate {
  private isFirstNavigation=true;
  constructor(private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isFirstNavigation)
    {
      this.isFirstNavigation=false;
      if(route.component!=StorelistComponent)
      {
        this.router.navigateByUrl("/");
        return false;
      }
      
    }
    return true;
  }

}
