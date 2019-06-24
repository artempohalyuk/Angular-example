import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FireBase {
  public userId: string;
  constructor(
    private _http: HttpClient,
    private _fireStore: AngularFirestore,
    private _fireAuth: AngularFireAuth
  ) {
    this._fireAuth.authState.subscribe(
      user => {
        if ( user ) {
          this.userId = user.uid;
        }
      }
    );
  }

  signIn( email: string, password: string ) {
    return this._fireAuth.auth.signInWithEmailAndPassword( email, password ).then(
      res => console.log( res )
    )
    .catch(
      res => console.log( res )
    )
  }

  getTasks() {
    if ( !this.userId ) {
      return;
    }
    console.log( this.userId );
    return this._fireStore.collection( `tasks` ).doc( `${ this.userId }` ).get()
      .subscribe(
        res => console.log( res )
      );
  }

  createUser( email: string, password: string ) {
    return this._fireAuth.auth.createUserWithEmailAndPassword( email, password );
  }

  createTask( formValue ) {
    this._fireStore.collection( 'tasks' ).add( formValue )
      .then(
        res => console.log( res )
      )
      .catch(
        res => console.log( res )
      );
  }
}
