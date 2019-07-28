import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { map, mergeMap, first, take } from 'rxjs/operators';
import { ITaskResponse } from '../modules/tasks/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class FireBase {
  public currentUser = null;

  constructor(
    private _http: HttpClient,
    private _fireStore: AngularFirestore,
    public _fireAuth: AngularFireAuth
  ) {
    this._fireAuth.authState.subscribe(
      user => this.currentUser = user
    );
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }

  // getAuthenticated(): boolean {
  //   return this.currentUser !== null;
  // }

  /**
   * return promise of current user state
   */
  getCurrentUserObservable(): Promise<any> {
    return this._fireAuth.authState.pipe( take(1) ).toPromise();
  }

  /**
   * sign in to system
   * @param email - user email
   * @param password - user password
   */
  signIn( email: string, password: string ) {
    return this._fireAuth.auth.signInWithEmailAndPassword( email, password );
  }

  /**
   * sign out from system
   */
  signOut() {
    return this._fireAuth.auth.signOut();
  }

  /**
   * Create new user account
   * @param email - user email
   * @param password - user password
   */
  createUser( email: string, password: string, nickname: string ) {
    return this._fireAuth.auth.createUserWithEmailAndPassword( email, password )
      .then(
        res => {
          res.user.updateProfile( { displayName: nickname } );
          return res;
        }
      );
  }
}
