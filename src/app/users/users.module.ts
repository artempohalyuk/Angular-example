import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './users-list/user/user.component';
import { UsersComponent } from './users.component';
import { UserCreateComponent } from './modals/user-create/user-create.component';

const usersRoutes: Routes = [
  { path: '', component: UsersComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( usersRoutes ),
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserComponent,
    UserCreateComponent
  ],
  entryComponents: [
    UserCreateComponent
  ]
})
export class UsersModule { }
