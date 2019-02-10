import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserCreateComponent } from './modals/user-create/user-create.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
    constructor(
      private dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    openDialog() {
      this.dialog.open(UserCreateComponent);
    }
}
