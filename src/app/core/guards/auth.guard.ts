import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { FireBase } from '../firebase.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor( private _firebase: FireBase, private router: Router ) {}
  canLoad( route: Route ): Promise<boolean> {
      return this._firebase.getCurrentUserObservable().then(
        res => {
          if ( !res ) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        }
      ).catch(
        res => {
          this.router.navigate(['/login']);
          return false;
        }
      );
  }
}
