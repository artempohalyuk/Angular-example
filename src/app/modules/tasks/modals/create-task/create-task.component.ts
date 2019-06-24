import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FireBase } from 'src/app/core/firebase.service';

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
    private _firebase: FireBase
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createTaskForm = this._fb.group({
      title: [ '' ],
      description: [ '' ],
      date: [ '' ]
    });
  }

  onCreateTask() {
    this._firebase.createTask( this.createTaskForm.value );
  }

}
