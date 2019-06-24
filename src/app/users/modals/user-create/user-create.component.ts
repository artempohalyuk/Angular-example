import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<UserCreateComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit() {
  }

}
