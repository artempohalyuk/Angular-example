import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FireBase } from '../firebase.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private _firebase: FireBase, private router: Router ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this._firebase.getAuthenticated()) { return true; }

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
