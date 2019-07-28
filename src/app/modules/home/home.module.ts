import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { HomeComponent } from './home.component';
import { TasksService } from '../tasks/services/tasks.service';
import { MaterialModule } from 'src/app/shared/material/material.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
      CommonModule,
      MaterialModule,
      RouterModule.forChild(routes)
    ],
    declarations: [ HomeComponent ],
    providers: [
      TasksService
    ]
})

export class HomeModule { }

