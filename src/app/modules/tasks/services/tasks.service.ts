import { Injectable } from '@angular/core';
import { FireBase } from 'src/app/core/firebase.service';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, mergeMap } from 'rxjs/operators';
import { ITaskResponse } from '../models/task.model';

@Injectable()
export class TasksService {
  public usersCollection = this._fireStore.collection( 'users' );

  constructor(
    private _http: HttpClient,
    private _fireStore: AngularFirestore,
    private _fireAuth: AngularFireAuth,
    private _fireBase: FireBase
  ) {}

  getTasks() {
    if ( this._fireBase.getAuthenticated() ) {
      return this.usersCollection.doc( this._fireBase.currentUser.uid )
        .collection( 'tasks', ref => ref.orderBy( 'task_date' ) ).snapshotChanges()
        .pipe(
          map(
            tasks => {
              return this.addTaskIdToCollection( tasks );
            }
          )
        );
    } else {
      return this._fireAuth.authState.pipe(
        mergeMap(
          ( res: any ) => {
            return this.usersCollection.doc( res.uid ).collection( 'tasks', ref => ref.orderBy( 'task_date' ) ).snapshotChanges().pipe(
              map(
                tasks => {
                  return this.addTaskIdToCollection( tasks );
                }
              )
            );
          }
        )
      );
    }
  }

  addTaskIdToCollection( tasks ) {
    return tasks.map(
      task => {
        const data = task.payload.doc.data() as ITaskResponse;
        data.id = task.payload.doc.id;
        return data;
      }
    );
  }

  createTask( formValue ) {
    const docID = this._fireStore.createId();
    formValue.created_at = Math.floor(Date.now() / 1000);

    this.usersCollection.doc( this._fireBase.currentUser.uid ).collection( 'tasks' ).doc( docID ).set( formValue )
      .then(
        res => console.log( res )
      )
      .catch(
        res => console.log( res )
      );
  }
}