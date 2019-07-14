import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FireBase } from 'src/app/core/firebase.service';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  public createTaskForm: FormGroup;
  public errorsMsg: string;

  constructor(
    private _fb: FormBuilder,
    private _taskService: TasksService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createTaskForm = this._fb.group({
      title: [ '' ],
      description: [ '' ],
      task_date: [ '' ],
    });
  }

  onCreateTask() {
    this.createTaskForm.value.task_date = Math.floor( Date.parse( this.createTaskForm.get( 'task_date' ).value ) / 1000 );

    this._taskService.createTask( this.createTaskForm.value );
  }

}
