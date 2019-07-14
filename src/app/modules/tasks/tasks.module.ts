import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import { CreateTaskComponent } from './modals/create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TasksListComponent },
  { path: 'list/item/:id', component: TasksItemComponent },

];

@NgModule({
    imports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
    ],
    declarations: [ TasksComponent, TasksListComponent, TasksItemComponent, CreateTaskComponent ],
    entryComponents: [
      CreateTaskComponent
    ]
})

export class TasksModule { }

