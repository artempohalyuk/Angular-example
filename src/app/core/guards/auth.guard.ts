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
  canLoad( route: Route ) {

      if (this._firebase.authenticated) { return true; }

      return this._firebase.getCurrentUserObservable()
        .pipe(
          map(
            res => {
              if ( res === null ) {
                this.router.navigate(['/login']);
              }
              return true;
            }
          )
        )
  }
}
