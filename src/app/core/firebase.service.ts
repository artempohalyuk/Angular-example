import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
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
    console.log( this.currentUser )
    return this.currentUser !== null;
  }

  // getAuthenticated(): boolean {
  //   return this.currentUser !== null;
  // }

  /**
   * return observable of current user state
   */
  getCurrentUserObservable(): Observable<any> {
    return this._fireAuth.authState;
  }

  /**
   * sign in to system
   * @param email - user email
   * @param password - user password
   */
  signIn( email: string, password: string ) {
    return this._fireAuth.auth.signInWithEmailAndPassword( email, password ).then(
      res => {
        console.log( res );
        // this.userCollectionRef = this._fireStore.collection( 'users' ).doc( this.userId );
      }
    )
    .catch(
      res => console.log( res )
    );
  }

  /**
   * sign out from system
   */
  signOut() {
    return this._fireAuth.auth.signOut()
      .then(
        res => console.log( res )
      ).catch( res => console.log( res ) );
  }

  /**
   * Create new user account
   * @param email - user email
   * @param password - user password
   */
  createUser( email: string, password: string ) {
    return this._fireAuth.auth.createUserWithEmailAndPassword( email, password );
  }
}
