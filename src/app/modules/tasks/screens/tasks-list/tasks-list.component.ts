import { Component, OnInit } from '@angular/core';
import { FireBase } from 'src/app/core/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../../modals/create-task/create-task.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  public taskList;

  constructor(
    private _taskService: TasksService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.taskList = this._taskService.getTasks();
    console.log( this.taskList );

  }

  onOpenCreateTaskModal() {
    this._dialog.open( CreateTaskComponent, {
      autoFocus: false
    } );
  }

}
