import { Injectable } from '@angular/core';
import { FireBase } from 'src/app/core/firebase.service';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, mergeMap } from 'rxjs/operators';
import { ITaskResponse, TaskModel } from '../models/task.model';
import * as moment from 'moment';

@Injectable()
export class TasksService {
  public usersCollection = this._fireStore.collection( 'users' );

  constructor(
    private _http: HttpClient,
    private _fireStore: AngularFirestore,
    private _fireAuth: AngularFireAuth,
    private _fireBase: FireBase
  ) {}

  /**
   * Get task and detect sign in user or not
   */
  getTasks() {
    if ( this._fireBase.authenticated ) {
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

  /**
   * Save task id to our array of tasks
   * @param tasks - current user array of tasks
   */
  addTaskIdToCollection( tasks ) {
    return tasks.map(
      task => {
        const data = task.payload.doc.data() as ITaskResponse;
        data.id = task.payload.doc.id;
        return data;
      }
    );
  }

  /**
   * add new task to our collection
   * @param formValue - form data
   */
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

  /**
   * How many tasks you have todat, return count
   */
  getCurrentDayTasksCount( tasksList: Array<TaskModel> ) {
    const today = new Date();

    return tasksList.filter(
      task => {
        const taskDay = new Date( +task.task_date * 1000 );

        if ( ( today.getDate() === taskDay.getDate() ) && ( today.getFullYear() && taskDay.getFullYear() ) ) {
          return task;
        }
      }
    ).length;
  }
}
