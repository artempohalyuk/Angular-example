import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TasksListComponent } from './screens/tasks-list/tasks-list.component';
import { TaskItemComponent } from './screens/tasks-list/task-item/task-item.component';
import { CreateTaskComponent } from './modals/create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TasksListComponent },
  { path: 'list/item/:id', component: TaskItemComponent },

];

@NgModule({
    imports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
    ],
    declarations: [ TasksComponent, TasksListComponent, TaskItemComponent, CreateTaskComponent ],
    entryComponents: [
      CreateTaskComponent
    ],
    providers: [
      TasksService
    ]
})

export class TasksModule { }

